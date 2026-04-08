import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { sendEmail } from "@/lib/email"; // <-- 1. Import your email logic

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
          application_status: "PENDING",
        },
        data: {
          application_status: "APPROVED",
        },
      });

      const updatework = await tx.work.update({
        where: { work_id: workId },
        data: {
          work_status: "ASSIGNED",
          is_open_pool: false,
        },
      });

      // Note: Changed `db.assignment` to `tx.assignment` to keep it inside the transaction scope
      const assignId = await tx.assignment.findFirst({
        where: { work_id: workId },
      });

      if (assignId) {
        await tx.assignment.update({
          where: { assignment_id: assignId.assignment_id },
          data: {
            assignment_status: "CONFIRMED",
            user_id: userId,
          },
        });
      }
    });

    // --- 3. NEW NOTIFICATION LOGIC STARTS HERE ---
    
    // A. Fetch the Employee's details (to get their name)
    const employee = await db.user.findUnique({
      where: { user_id: userId },
      select: { full_name: true, email: true }
    });

    // B. Fetch the Work and Project details (to give the Owner context)
    const workDetails = await db.work.findUnique({
      where: { work_id: workId },
      include: { project: true }
    });

    // C. Fetch all Owner accounts
    const owners = await db.user.findMany({
      where: { user_type: "OWNER" },
      select: { email: true }
    });

    // D. Construct and send the emails
    if (employee && workDetails && owners.length > 0) {
      // Fallback to email if full_name is null
      const employeeName = employee.full_name || employee.email || "An employee"; 
      const projectName = workDetails.project?.project_name || "Unknown Project";
      const roleName = workDetails.project_role;

      const subject = `Work Accepted: ${employeeName}`;
      const message = `${employeeName} has officially accepted the ${roleName} request for ${projectName}.\n\nThe work status is now ASSIGNED and their schedule is confirmed.`;

      for (const owner of owners) {
        if (owner.email) {
          await sendEmail(owner.email, subject, message);
        }
      }
    }
    // --- NEW NOTIFICATION LOGIC ENDS HERE ---

    return NextResponse.json({ message: "Work accepted and assigned to user" });
  } catch (err) {
    console.error("Accept route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}