import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params; // unwrap the Promise
  console.log("Params object:", params);
  console.log("Request URL:", req.url);

  const workId = parseInt(params.id);
  if (!workId) return new NextResponse("Invalid work ID", { status: 400 });

  const workExists = await db.work.findUnique({ where: { work_id: workId } });
  if (!workExists) return new NextResponse("Work not found", { status: 404 });

  try {
    // const updatedWork = await db.work.update({
    //   where: { work_id: workId },
    //   data: { work_status: "ASSIGNED" },
    // });

    // console.log("Updated work:", updatedWork);

    const userId = 1; // Replace with actual logged-in user ID from session
    const application = await db.workapplication.create({
      data: {
        work_id: workId,
        user_id: userId,
        application_status: "APPROVAL", // <-- new type
      },
    });

    console.log("Created application:", application);

    return NextResponse.json({ message: "Applied successfully" });
  } catch (err) {
    console.error("Apply route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
