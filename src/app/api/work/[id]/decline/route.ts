import { Router, Request, Response } from 'express';
import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const workId = parseInt(id);
  const userId = req.session.userId;

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