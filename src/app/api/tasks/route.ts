import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function GET(request: Request) {
  try {
    const session = await getSession();
    const userId = session?.userId || 1;

    const tasks = await db.task.findMany({
      where: {
        user_id: userId,
      },
      // IMPORTANT: We have to nest the include to reach the actual tag table
      include: {
        tasktag: {
          include: {
            tag: true, 
          },
        },
      },
      orderBy: {
        due_date: "asc",
      },
    });

    // Map the data for the frontend
    const formattedTasks = tasks.map((dbTask) => {
      let longDate = "No Due Date";
      let shortDate = "N/A";

      if (dbTask.due_date) {
        const dateObj = new Date(dbTask.due_date);
        longDate = dateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
        shortDate = dateObj.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
      }

      return {
        id: dbTask.task_id,
        name: dbTask.task_title,
        description: dbTask.task_desc || "",
        isCompleted: dbTask.is_completed,
        inProgress: false,
        dueDate: longDate,
        dueDateBadge: shortDate,
        // Extract just the tag_name string from the nested relationship
        tags: dbTask.tasktag.map((tt) => tt.tag.tag_name), 
      };
    });

    return NextResponse.json(formattedTasks);
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    const userId = session?.userId || 1;

    const body = await request.json();
    const { title, description, dueDate, tags } = body;

    if (!title) {
      return NextResponse.json({ error: "Task title is required" }, { status: 400 });
    }

    // 1. Find the tags
    const foundTags = await db.tag.findMany({
      where: { tag_name: { in: tags } },
    });

    // 2. Create the task
    const newTask = await db.task.create({
      data: {
        user_id: userId,
        task_title: title,
        task_desc: description || null, // This correctly saves to the DB
        due_date: dueDate ? new Date(dueDate) : null,
        is_completed: false,
        tasktag: {
          create: foundTags.map((t) => ({
            tag_id: t.tag_id,
          })),
        },
      },
      // Include tags so we can return the full object to the frontend immediately
      include: {
        tasktag: {
          include: { tag: true }
        }
      }
    });

    // 3. Format it so the frontend "Add Task" success handler gets what it expects
    const formattedResponse = {
      id: newTask.task_id,
      name: newTask.task_title,
      description: newTask.task_desc || "",
      isCompleted: newTask.is_completed,
      dueDate: newTask.due_date ? new Date(newTask.due_date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "No Due Date",
      tags: newTask.tasktag.map((tt) => tt.tag.tag_name),
    };

    return NextResponse.json(formattedResponse, { status: 201 });
  } catch (error) {
    console.error("Failed to create task:", error);
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
  }
}