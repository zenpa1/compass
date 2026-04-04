import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const taskId = parseInt(id);
    
    if (isNaN(taskId)) {
      return NextResponse.json({ error: "Invalid task ID" }, { status: 400 });
    }

    await db.tasktag.deleteMany({ where: { task_id: taskId } });
    await db.task.delete({ where: { task_id: taskId } });

    return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Failed to delete task:", error);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const taskId = parseInt(id);

    if (isNaN(taskId)) {
      return NextResponse.json({ error: "Invalid task ID" }, { status: 400 });
    }

    const body = await request.json();
    const { task_title, task_desc, due_date, tagIds, is_completed } = body;

    // Simple status toggle — only is_completed was sent
    if (is_completed !== undefined && !task_title) {
      const updated = await db.task.update({
        where: { task_id: taskId },
        data: { is_completed },
      });
      return NextResponse.json(updated, { status: 200 });
    }

    // Full edit — task_title, tags, etc. were sent
    const [, , updatedTask] = await db.$transaction([
      db.tasktag.deleteMany({ where: { task_id: taskId } }),
      db.tasktag.createMany({
        data: (tagIds as number[]).map((tag_id) => ({ task_id: taskId, tag_id })),
      }),
      db.task.update({
        where: { task_id: taskId },
        data: {
          task_title,
          task_desc,
          due_date: due_date ? new Date(due_date) : null,
        },
        include: {
          tasktag: { include: { tag: true } },
        },
      }),
    ]);

    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    console.error("Failed to update task:", error);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}