import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

let current_user: number = 1;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tab = searchParams.get("tab");

  // NORTH STUDIO WORKS
  if (tab === "works") {
    const works = await db.work.findMany({
      where: {
        is_open_pool: false,
        work_status: {
          in: ["ASSIGNED", "REVIEW", "COMPLETED"]
        }
      },
      include: {
        project: true,
        workapplication: true
      }
    });

    const events = works
      .filter((work) => work.work_start_date)
      .map((work) => ({
        title: work.project?.project_name ?? "Work",
        date: work.work_start_date
      }));

    return NextResponse.json(events);
  }

  // PERSONAL TASKS (default)
  const tasks = await db.task.findMany({
    where: {
      user_id: current_user,
      due_date: { not: null }
    }
  });

  const tasksUTC8 = tasks.map((task) => {
    if (!task.due_date) return null;

    const date = new Date(task.due_date);
    date.setHours(date.getHours() - 8);

    return {
      title: task.task_title,
      date: date
    };
  }).filter(Boolean);

  return NextResponse.json(tasksUTC8);
}