import { db } from "@/lib/prisma";
import { workapplication_application_status } from "@/generated/client";

console.log(workapplication_application_status);
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
        work_status: "OPEN",
        // Logic: Exclude works where the current user already has an active application
        workapplication: {
          none: {
            user_id: user.user_id,
            application_status: {
              in: ["PENDING", "APPROVAL", "APPROVED"] // Omit if already applied/waiting/active
            }
          }
        }
      },
      include: { 
        project: true 
      }
    });
  }

  else if (tab === "PENDING") {
    works = await db.work.findMany({
      where: {
        workapplication: {
          some: {
            user_id: user.user_id,
            application_status: {
              in: ["PENDING", "APPROVAL"] // Filter for the specific statuses you want to see
            }
          }
        }
      },
      include: { 
        project: true,
      }
    });
  }

  else if (tab === "ACTIVE") {
    works = await db.work.findMany({
      where: {
        is_open_pool: false,
        work_status: {
          in: ["ASSIGNED", "REVIEW", "COMPLETED"]
        },
        workapplication: {
          some: {
            user_id: user.user_id,
            application_status: {
              in: ["APPROVED"]
            }
          } 
        }
      },
      include: { 
        project: true,
      }
    });
  }



  else {
    return new Response(JSON.stringify({ error: "Invalid tab" }), { status: 400 });
  }

  return new Response(JSON.stringify(works));
}
