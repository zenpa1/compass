import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tab = searchParams.get("tab");

  const session = await getSession();
  const current_user = session?.userId || 1;  

  // NORTH STUDIO WORKS
  if (tab === "works") {
    const works = await db.work.findMany({
      where: {
        is_open_pool: false,
        work_status: { in: ["ASSIGNED", "REVIEW", "COMPLETED"] },
      },
      include: { project: true, workapplication: true },
    });

    const events = works
      .filter((work) => work.work_start_date)
      .map((work) => ({
        title: work.project?.project_name ?? "Work",
        date: work.work_start_date,
        extendedProps: {
          role_category: work.role_category,
          description: work.work_description,
          location: work.project?.project_location,
          client_name: work.project?.client_name,
          expected_salary: work.expected_salary,
          status: work.work_status,
        },
      }));

    return NextResponse.json(events);
  }

  // PERSONAL TASKS (default)
  const tasks = await db.task.findMany({
    where: { user_id: current_user, due_date: { not: null } },
  });

  const tasksUTC8 = tasks
    .map((task) => {
      if (!task.due_date) return null;

      const date = new Date(task.due_date);
      date.setHours(date.getHours() - 8);

      return {
        title: task.task_title,
        date: date,
        extendedProps: {
          description: task.task_desc ?? undefined,
          status: task.is_completed ? "COMPLETED" : "PENDING",
        },
      };
    })
    .filter(Boolean);

  return NextResponse.json(tasksUTC8);
}