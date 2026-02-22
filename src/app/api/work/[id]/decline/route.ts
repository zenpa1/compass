import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const workId = parseInt(id);
  const userId = 1; // Replace with actual session logic

  if (!workId) return new NextResponse("Invalid work ID", { status: 400 });

  try {
    // 1. We use a transaction to ensure both updates happen, or neither happens
    await db.$transaction(async (tx) => {
      
      // 2. Update the Application status for this specific user/work combo
      // We use updateMany because we don't have the unique 'application_id' handy
      await tx.workapplication.updateMany({
        where: {
          work_id: workId,
          user_id: userId,
          application_status: "PENDING", 
        },
        data: {
          application_status: "REJECTED",
        },
      });
    
      const updatework = await db.work.update({
        where: { work_id: workId },
        data: {
            work_status: "OPEN", 
        },  
     });
    });

    return NextResponse.json({ message: "Work declined" });
  } catch (err) {
    console.error("Accept route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}