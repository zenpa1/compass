import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";

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

    return NextResponse.json({ message: "Work withdrawn successfully" });
  } catch (err) {
    console.error("Withdraw route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}