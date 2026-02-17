import { db } from "@/lib/prisma";

type TabType = "OPEN" | "PENDING" | "ACTIVE";
const allowedTabs: TabType[] = ["OPEN", "PENDING", "ACTIVE"];

//temporary auth, replace with actual auth/session logic
let current_user: number = 1;

const getUser = async () => {
  return await db.user.findUnique({ where: { user_id: current_user } });
};

export async function GET(req: Request) {
  const user = await getUser();

  if (!user || user.user_type !== "EMPLOYEE") {
    return new Response(JSON.stringify({ error: "Not authorized" }), { status: 403 });
  }

  //gets the current tab (open|pending|active)
  const { searchParams } = new URL(req.url);
  const tabParam = searchParams.get("tab")?.toUpperCase();

  const tab: TabType | undefined =
    tabParam && allowedTabs.includes(tabParam as TabType)
      ? (tabParam as TabType)
      : undefined;

  let works;

  if (tab === "OPEN") {
    works = await db.work.findMany({
      where: {
        is_open_pool: true,
        work_status: "OPEN"
      },
      include: { project: true }
    });
  }

  else if (tab === "PENDING") {
    const applications = await db.workapplication.findMany({
      where: {
        user_id: user.user_id,
        application_status: "PENDING"
      },
      include: {
        work: {
          include: { project: true }
        }
      }
    });

    works = applications.map(app => app.work);
  }


  else if (tab === "ACTIVE") {
    works = await db.work.findMany({
      where: {
        work_status: {
          in: ["ASSIGNED", "REVIEW", "COMPLETED"]
        },
        workapplication: {
          some: {
            user_id: user.user_id,
            application_status: "APPROVED" 
          }
        }
      },
      include: {
        project: true
      }
    });
  }


  else {
    return new Response(JSON.stringify({ error: "Invalid tab" }), { status: 400 });
  }

  return new Response(JSON.stringify(works));
}
