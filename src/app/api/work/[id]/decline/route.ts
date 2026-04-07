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
      await tx.workapplication.deleteMany({
        where: {
          work_id: workId,
          user_id: userId,
          application_status: "PENDING",
        }
      });

      // Fixed: Changed `db` to `tx` to keep it inside the transaction
      await tx.assignment.updateMany({
        where: { work_id: workId },
        data: {
          user_id: null
        },
      });
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

    // D. Construct and send the email
    if (employee && workDetails && owners.length > 0) {
      const employeeName = employee.full_name || employee.email || "An employee"; 
      const projectName = workDetails.project?.project_name || "Unknown Project";
      const roleName = workDetails.project_role;

      const subject = `Work Declined: ${employeeName}`;
      const message = `${employeeName} has declined the ${roleName} request for ${projectName}.\n\nTheir application has been removed and the assignment is currently empty.`;

      for (const owner of owners) {
        if (owner.email) {
          await sendEmail(owner.email, subject, message);
        }
      }
    }
    // --- NEW NOTIFICATION LOGIC ENDS HERE ---

    return NextResponse.json({ message: "Work declined" });
  } catch (err) {
    console.error("Decline route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}