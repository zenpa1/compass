import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";

const toLocalISOString = (dt: Date) => {
  const pad = (n: number) => String(n).padStart(2, "0");

  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}T${pad(dt.getHours())}:${pad(dt.getMinutes())}:00`;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tab = searchParams.get("tab");

  const session = await getSession();
  const current_user = session?.userId || 1;  
  const user_type = session?.user_type || 1;  

  // NORTH STUDIO WORKS
  if (tab === "works") {
    const works = await db.work.findMany({
      where: {
        is_open_pool: false,
        work_status: { in: ["ASSIGNED", "REVIEW", "COMPLETED"] },
      },
      include: { project: true, workapplication: true },
    });

    let filteredWorks = works;

    if (user_type !== "OWNER") {
      filteredWorks = works.filter((work) =>
        work.workapplication.some((app) => app.user_id === current_user)
      );
    }
    const events = filteredWorks
      .filter((work) => work.work_start_date)
      .map((work) => ({
        title: work.project?.project_name ?? "Work",
        start: work.work_start_time
          ? toLocalISOString(work.work_start_time)
          : toLocalISOString(work.work_start_date!),
        end: work.work_end_time ? toLocalISOString(work.work_end_time) : undefined,
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
    .filter((task) => task.due_date)
    .map((task) => ({
      title: task.task_title,
      start: toLocalISOString(task.due_date!),
      extendedProps: {
        description: task.task_desc ?? undefined,
        status: task.is_completed ? "COMPLETED" : "PENDING",
      },
    }));

  return NextResponse.json(tasksUTC8);
}
