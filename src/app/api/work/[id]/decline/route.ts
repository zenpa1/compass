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
      await tx.workapplication.deleteMany({
        where: {
          work_id: workId,
          user_id: userId,
          application_status: "PENDING",
        }
      });

      const updatework = await db.assignment.updateMany({
        where: { work_id: workId },
        data: {
          user_id: null
        },
      });
    });

    return NextResponse.json({ message: "Work declined" });
  } catch (err) {
    console.error("Accept route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
