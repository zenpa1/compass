import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { sendEmail } from "@/lib/email"; // <-- 1. Import the email function

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const workId = parseInt(id);

  const session = await getSession();
  const userId = session?.userId || 1;

  if (!workId) return new NextResponse("Invalid work ID", { status: 400 });

  try {
    // 2. The Database Transaction
    await db.$transaction(async (tx) => {
      await tx.workapplication.updateMany({
        where: {
          work_id: workId,
          user_id: userId,
          application_status: "APPROVED",
        },
        data: {
          application_status: "REJECTED",
        },
      });

      await tx.work.update({
        where: { work_id: workId },
        data: {
          work_status: "OPEN",
          is_open_pool: true,
        },
      });

      const assign = await tx.assignment.findFirst({
        where: { work_id: workId, user_id: userId },
      });

      if (assign) {
        await tx.assignment.update({
          where: { assignment_id: assign.assignment_id },
          data: {
            assignment_status: "PENDING",
            user_id: null,
          },
        });
      }
    });

    // --- 3. NEW NOTIFICATION LOGIC STARTS HERE ---
    
    // A. Fetch Employee Details
    const employee = await db.user.findUnique({
      where: { user_id: userId },
      select: { full_name: true, email: true }
    });

    // B. Fetch Work and Project Details
    const workDetails = await db.work.findUnique({
      where: { work_id: workId },
      include: { project: true }
    });

    // C. Fetch all Owner accounts
    const owners = await db.user.findMany({
      where: { user_type: "OWNER" },
      select: { email: true }
    });

    // D. Construct and send the Urgent email
    if (employee && workDetails && owners.length > 0) {
      const employeeName = employee.full_name || employee.email || "An employee"; 
      const projectName = workDetails.project?.project_name || "Unknown Project";
      const roleName = workDetails.project_role;

      // Make the subject line stand out since a withdrawal means an empty slot!
      const subject = `URGENT: Work Withdrawal - ${employeeName}`;
      const message = `${employeeName} has just withdrawn from their confirmed ${roleName} role for ${projectName}.\n\nThis work has been automatically moved back to the OPEN pool and currently has no assignee.`;

      for (const owner of owners) {
        if (owner.email) {
          await sendEmail(owner.email, subject, message);
        }
      }
    }
    // --- NEW NOTIFICATION LOGIC ENDS HERE ---

    return NextResponse.json({ message: "Work withdrawn successfully" });
  } catch (err) {
    console.error("Withdraw route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}