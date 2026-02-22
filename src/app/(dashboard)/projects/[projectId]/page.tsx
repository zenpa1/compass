import { db } from "@/lib/prisma";
import { Button } from "@/components/ui/button";

interface ProjectDetailPageProps {
  params: { projectId: string };
}

const scheduleCards: { id: number; label: string; date: string }[] = [
  { id: 1, label: "Project Schedule", date: "10/26 - 10/30" },
  { id: 2, label: "Project Schedule", date: "10/26 - 10/30" },
  { id: 3, label: "Project Schedule", date: "10/26 - 10/30" },
  { id: 4, label: "Project Schedule", date: "10/26 - 10/30" },
  { id: 5, label: "Project Schedule", date: "10/26 - 10/30" },
];

const workRows: {
  id: number;
  role: string;
  schedule: string;
  assignee: string;
  status: string;
  action: string;
  actionTone: "amber" | "blue" | "red" | "green";
}[] = [
  {
    id: 1,
    role: "Main Photographer",
    schedule: "12PM-7PM, 18/12/2025",
    assignee: "ZYRO GONZALES",
    status: "⌛ REQUEST SENT",
    action: "Cancel Request",
    actionTone: "amber",
  },
  {
    id: 2,
    role: "Main Videographer",
    schedule: "12PM-7PM, 18/12/2025",
    assignee: "JB RAMOS",
    status: "✅ ASSIGNED",
    action: "Change Assignee?",
    actionTone: "blue",
  },
  {
    id: 3,
    role: "2nd Videographer",
    schedule: "12PM-7PM, 18/12/2025",
    assignee: "JOSE PANGANIBAN",
    status: "⚠ WITHDRAWN",
    action: "View and Assign",
    actionTone: "red",
  },
  {
    id: 4,
    role: "2nd Photographer",
    schedule: "12PM-7PM, 18/12/2025",
    assignee: "NONE",
    status: "⚠ UNASSIGNED",
    action: "Assign Employee",
    actionTone: "red",
  },
  {
    id: 5,
    role: "Booth Operator",
    schedule: "2PM-7PM, 18/12/2025",
    assignee: "NONE",
    status: "🌐 OPEN POOL",
    action: "View Application [3]",
    actionTone: "red",
  },
  {
    id: 6,
    role: "Same Day Video Editor",
    schedule: "12PM-7PM, 18/12/2025",
    assignee: "BRICE ALER (F)",
    status: "✅ ASSIGNED",
    action: "Change Assignee?",
    actionTone: "blue",
  },
  {
    id: 7,
    role: "Photoman",
    schedule: "12PM-5PM, 18/12/2025",
    assignee: "STEPHON ULANG",
    status: "🔍 FOR REVIEW",
    action: "Mark Complete?",
    actionTone: "green",
  },
];

function actionButtonClass(actionTone: "amber" | "blue" | "red" | "green") {
  if (actionTone === "amber") {
    return "bg-amber-300 text-slate-900 hover:bg-amber-400";
  }

  if (actionTone === "blue") {
    return "bg-sky-300 text-slate-900 hover:bg-sky-400";
  }

  if (actionTone === "green") {
    return "bg-emerald-400 text-slate-900 hover:bg-emerald-500";
  }

  return "bg-red-500 text-white hover:bg-red-600";
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const projectId = Number(params.projectId);
  const project = Number.isNaN(projectId)
    ? null
    : await db.project.findUnique({
        where: { project_id: projectId },
      });

  const title = project?.project_name ?? "AdHoc Co. Christmas Party";
  const description =
    project?.project_description ??
    "Coverage for AdHoc Co.'s Annual Christmas Party at The Blue Leaf. Focus on candid moments, the awards ceremony, and the SDE presentation. Client wants a fun, energetic vibe. Call time is 4 PM for setup. Formal attire required for all crew members.";

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <div className="h-px flex-1 bg-slate-300" />
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Project actions"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <circle cx="12" cy="5" r="1.8" />
              <circle cx="12" cy="12" r="1.8" />
              <circle cx="12" cy="19" r="1.8" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
          <div className="w-full space-y-2 lg:w-auto lg:min-w-[170px]">
            <span className="flex h-8 items-center justify-center rounded-full bg-red-600 px-3 text-sm font-bold text-white">
              1 DAY LEFT
            </span>
            <span className="flex h-8 items-center justify-center rounded-full bg-amber-500 px-3 text-sm font-bold text-white">
              4/7 ROLES
            </span>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-900">
              <span className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21a8 8 0 1 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Roberto Robertson
              </span>
              <span className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Shangri-La Fort, Taguig City
              </span>
              <span className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                Dec 18, 2025
              </span>
            </div>
            <p className="max-w-5xl text-sm leading-relaxed text-slate-700">
              {description}
            </p>
          </div>
        </div>

        <div className="h-px bg-slate-300" />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Schedule
        </div>
        <Button
          size="sm"
          className="h-7 rounded-md bg-slate-900 px-3 text-xs text-white hover:bg-slate-800"
        >
          Add Schedule
        </Button>
      </div>

      {scheduleCards.length === 0 ? (
        <div className="flex items-center justify-center py-3">
          <p className="text-xs text-slate-500">No schedules found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-5">
          {scheduleCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-100 text-amber-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <div className="text-xs text-slate-700">
                <p className="font-semibold">{card.label}</p>
                <p className="text-slate-500">{card.date}</p>
              </div>
              <button
                type="button"
                className="ml-auto flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100"
                aria-label="Schedule actions"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <circle cx="12" cy="5" r="1.6" />
                  <circle cx="12" cy="12" r="1.6" />
                  <circle cx="12" cy="19" r="1.6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <div className="h-px bg-slate-300" />

        <div className="overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-900">
              <tr>
                <th className="border-r border-slate-300 px-3 py-2 text-xs font-semibold uppercase">
                  Role
                </th>
                <th className="border-r border-slate-300 px-3 py-2 text-xs font-semibold uppercase">
                  Schedule
                </th>
                <th className="border-r border-slate-300 px-3 py-2 text-xs font-semibold uppercase">
                  Assignee
                </th>
                <th className="border-r border-slate-300 px-3 py-2 text-xs font-semibold uppercase">
                  Status
                </th>
                <th className="px-3 py-2 text-xs font-semibold uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {workRows.map((row) => (
                <tr
                  key={row.id}
                  className="border-t border-slate-200 text-slate-800"
                >
                  <td className="border-r border-slate-200 px-3 py-2 text-xs font-medium">
                    {row.role}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-2 text-xs">
                    {row.schedule}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-2 text-xs">
                    {row.assignee}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-2 text-xs font-medium">
                    {row.status}
                  </td>
                  <td className="px-3 py-1">
                    <div className="flex items-center justify-between gap-2">
                      <button
                        type="button"
                        className={`h-7 rounded px-2 text-xs font-semibold ${actionButtonClass(
                          row.actionTone,
                        )}`}
                      >
                        {row.action}
                      </button>
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
                        aria-label="Work actions"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="currentColor"
                        >
                          <circle cx="12" cy="5" r="1.8" />
                          <circle cx="12" cy="12" r="1.8" />
                          <circle cx="12" cy="19" r="1.8" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button className="h-9 w-full rounded-md bg-slate-900 text-sm font-semibold uppercase tracking-wide text-white hover:bg-slate-800">
          + Add Work
        </Button>
      </div>
    </div>
  );
}
