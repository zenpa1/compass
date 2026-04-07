import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { work_work_status, workapplication_application_status } from "@/generated/client";

console.log(workapplication_application_status);
type TabType = "OPEN" | "PENDING" | "ACTIVE";
type WorkStatus = "PENDING" | "OPEN" | "ASSIGNED" | "REVIEW" | "COMPLETED";
const allowedTabs: TabType[] = ["OPEN", "PENDING", "ACTIVE"];

const getUser = async (user_id: number) => {
  return await db.user.findUnique({ where: { user_id: user_id } });
};

export async function GET(req: Request) {
  const session = await getSession();
  const userId = session?.userId || 1;

  const user = await getUser(userId);

  if (!user || user.user_type !== "EMPLOYEE") {
    return new Response(JSON.stringify({ error: "Not authorized" }), {
      status: 403,
    });
  }

  //gets the current tab (open|pending|active)
  const { searchParams } = new URL(req.url);
  const tabParam = searchParams.get("tab")?.toUpperCase();
  const hideParam = searchParams.get("active")?.toUpperCase();

  const status = (hideParam == "TRUE") ? 
    ["ASSIGNED", "REVIEW"] as WorkStatus[] : 
    ["ASSIGNED", "REVIEW", "COMPLETED"] as WorkStatus[]

  const tab: TabType | undefined =
    tabParam && allowedTabs.includes(tabParam as TabType)
      ? (tabParam as TabType)
      : undefined;

  let works;

  if (tab === "OPEN") {
    const dateConflicts = await db.work.findMany({
      where: {
        OR: [
          {
            assignment: {
              some: { user_id: userId }
            },
            work_status: "ASSIGNED"
          },
          {
            workapplication: {
              some: { 
                user_id: userId, // CRITICAL: Scope this to the user
                application_status: "APPROVAL" 
              }
            }
          }
        ]
        
      },
      select: { work_start_date: true }
    })

    const dateConflictValues = dateConflicts.map(p => p.work_start_date);

    works = await db.work.findMany({
      where: {
        is_open_pool: true,
        work_status: "OPEN",
        work_start_date: { notIn: dateConflictValues },
        // Logic: Exclude works where the current user already has an active application
        workapplication: {
          none: {
            user_id: user.user_id,
            application_status: {
              in: ["PENDING", "APPROVAL", "APPROVED"], // Omit if already applied/waiting/active
            },
          },
        },
        
      },
      include: {
        project: true,
        workapplication: true,
      },
    });
  } else if (tab === "PENDING") {
    works = await db.work.findMany({
      where: {
        workapplication: {
          some: {
            user_id: user.user_id,
            application_status: {
              in: ["PENDING", "APPROVAL"], // Filter for the specific statuses you want to see
            },
          },
        },
      },
      include: {
        project: true,
        workapplication: true,
      },
    });
  } else if (tab === "ACTIVE") {
    works = await db.work.findMany({
      where: {
        is_open_pool: false,
        work_status: {
          in: status,
        },
        workapplication: {
          some: {
            user_id: user.user_id,
            application_status: {
              in: ["APPROVED"],
            },
          },
        },
      },
      include: {
        project: true,
        workapplication: true,
      },
    });
  } else {
    return new Response(JSON.stringify({ error: "Invalid tab" }), {
      status: 400,
    });
  }

  return new Response(JSON.stringify(works));
}
