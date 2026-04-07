import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import nodemailer from "nodemailer";

// Initialize the Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to: string, subject: string, text: string) {
  try {
    const info = await transporter.sendMail({
      from: `"Task Manager" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      text: text,
    });

    console.log(`Email successfully sent to ${to}. Message ID:`, info.messageId);
    return info;
  } catch (error) {
    console.error("Failed to send email via Nodemailer:", error);
    return null;
  }
}

export async function GET(request: Request) {
  try {
    // 1. Security Check
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new Response('Unauthorized', { status: 401 });
    }

    const today = new Date();
    const isSunday = today.getDay() === 0;

    // Calculate tomorrow's start and end dates
    const tomorrowStart = new Date(today);
    tomorrowStart.setDate(today.getDate() + 1);
    tomorrowStart.setHours(0, 0, 0, 0);

    const tomorrowEnd = new Date(tomorrowStart);
    tomorrowEnd.setHours(23, 59, 59, 999);

    // 2. Fetch tasks due tomorrow
    const tasksDueTomorrow = await db.task.findMany({
      where: {
        is_completed: false,
        due_date: {
          gte: tomorrowStart,
          lte: tomorrowEnd,
        },
      },
      include: { user: true },
    });

    // 3. Group tomorrow's tasks by user email
    const tomorrowAlertsByUser: Record<string, any[]> = {};
    tasksDueTomorrow.forEach((task) => {
      if (task.user?.email) {
        if (!tomorrowAlertsByUser[task.user.email]) tomorrowAlertsByUser[task.user.email] = [];
        tomorrowAlertsByUser[task.user.email].push(task);
      }
    });

    // Send 1-Day Warning Emails
    for (const [email, tasks] of Object.entries(tomorrowAlertsByUser)) {
      const taskList = tasks.map(t => `- ${t.task_title}`).join('\n');
      await sendEmail(
        email,
        "Action Required: Tasks Due Tomorrow!",
        `You have ${tasks.length} task(s) due tomorrow:\n\n${taskList}`
      );
    }

    // 4. Sunday Weekly Roundup
    if (isSunday) {
      // --- A. TASK ROUNDUP (Pending & Overdue) ---
      const allIncompleteTasks = await db.task.findMany({
        where: { is_completed: false, due_date: { not: null } },
        include: { user: true },
      });

      const weeklyTaskAlerts: Record<string, { pending: any[], overdue: any[] }> = {};

      allIncompleteTasks.forEach((task) => {
        if (!task.user?.email) return;
        if (!weeklyTaskAlerts[task.user.email]) {
          weeklyTaskAlerts[task.user.email] = { pending: [], overdue: [] };
        }

        // If due date is in the past, it's overdue
        if (task.due_date! < today) {
          weeklyTaskAlerts[task.user.email].overdue.push(task);
        } else {
          weeklyTaskAlerts[task.user.email].pending.push(task);
        }
      });

      // Send Weekly Task Emails
      for (const [email, { pending, overdue }] of Object.entries(weeklyTaskAlerts)) {
        let emailText = "Here is your weekly task roundup:\n\n";

        if (overdue.length > 0) {
          emailText += "🚨 OVERDUE TASKS:\n";
          emailText += overdue.map(t => `- ${t.task_title}`).join('\n') + "\n\n";
        }

        if (pending.length > 0) {
          emailText += "📅 UPCOMING TASKS:\n";
          emailText += pending.map(t => `- ${t.task_title}`).join('\n');
        }

        if (overdue.length > 0 || pending.length > 0) {
          await sendEmail(email, "Weekly Task Roundup", emailText);
        }
      }

      // --- B. UNASSIGNED WORK (4 weeks out) ---
      const fourWeeksFromNow = new Date(today);
      fourWeeksFromNow.setDate(today.getDate() + 28);

      // Find work that is OPEN, starting in 28 days or less
      const unassignedWork = await db.work.findMany({
        where: {
          work_status: "OPEN",
          work_start_date: { lte: fourWeeksFromNow, gte: today },
          // Ensure there are no CONFIRMED assignments for this work
          assignment: {
            none: { assignment_status: "CONFIRMED" }
          }
        },
        include: { project: true }
      });

      if (unassignedWork.length > 0) {
        // 1. Fetch all Owner emails from the database
        const owners = await db.user.findMany({
          where: { user_type: "OWNER" },
          select: { email: true }
        });

        const workList = unassignedWork.map(w =>
          `- ${w.project.project_name}: ${w.project_role} (Starts: ${w.work_start_date.toLocaleDateString()})`
        ).join('\n');

        const emailBody = `The following open roles are starting in 4 weeks or less and have no confirmed assignee:\n\n${workList}`;

        // 2. Loop through every owner and send them the warning
        for (const owner of owners) {
          if (owner.email) {
            await sendEmail(
              owner.email,
              "Action Needed: Unassigned Work approaching deadline",
              emailBody
            );
          }
        }
      }
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Failed to process cron job:", error);
    return NextResponse.json({ error: "Failed to process reminders" }, { status: 500 });
  }
}