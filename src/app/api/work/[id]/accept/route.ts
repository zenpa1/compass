import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const workId = parseInt(id);
  
  const session = await getSession();
  const userId = session?.userId || 1

  if (!workId) return new NextResponse("Invalid work ID", { status: 400 });

  try {
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
    
      const updatework = await db.work.update({
        where: { work_id: workId },
        data: {
            work_status: "ASSIGNED", 
            is_open_pool: false
        },  
     });

      const assignId = await db.assignment.findFirst({where: {work_id: workId}})

      await tx.assignment.update({
        where: { assignment_id: assignId?.assignment_id },
        data: { 
          assignment_status: "CONFIRMED",
          user_id: userId
        }
      })
    });

    return NextResponse.json({ message: "Work accepted and assigned to user" });
  } catch (err) {
    console.error("Accept route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}