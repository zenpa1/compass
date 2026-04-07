import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { sendEmail } from "@/lib/email"; // <-- 1. Import the email function

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const params = await context.params;
  const workId = parseInt(params.id);
  if (!workId) return new NextResponse("Invalid work ID", { status: 400 });

  const workExists = await db.work.findUnique({ where: { work_id: workId } });
  if (!workExists) return new NextResponse("Work not found", { status: 404 });

  try {
    const session = await getSession();
    const userId = session?.userId || 1;

    // 2. The Database Insert
    const application = await db.workapplication.create({
      data: {
        work_id: workId,
        user_id: userId,
        application_status: "APPROVAL",
      },
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

      const subject = `New Application: ${employeeName}`;
      const message = `${employeeName} has just applied for the ${roleName} role on ${projectName}.\n\nPlease review their application in your dashboard to approve or reject.`;

      for (const owner of owners) {
        if (owner.email) {
          await sendEmail(owner.email, subject, message);
        }
      }
    }
    // --- NEW NOTIFICATION LOGIC ENDS HERE ---

    return NextResponse.json({ message: "Applied successfully" });
  } catch (err) {
    console.error("Apply route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}