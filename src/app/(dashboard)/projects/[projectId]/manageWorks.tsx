"use client"

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AddWorkButton } from "@/components/features/AddWorkButton";
import { ProjectHeaderActions } from "@/components/features/ProjectHeaderActions";
import { Project } from "@/app/(dashboard)/projects/projectDataOps";
import { Work, getEnrichedWorks, cancelRequest, markWorkAsComplete } 
  from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import toShortHours, { printAction, printActionTone } 
  from "@/app/(dashboard)/projects/[projectId]/workMiscOps";
import ProjectNullValuesWindow, { IsActiveWorkWindow, ProjectWorksExistWindow }
  from "@/components/features/ProjectAlerts";
import { WorkRowActions } from "@/components/features/WorkRowActions";
import WorkCancelRequest, { WorkMarkComplete } from "@/components/features/WorkActions";
import { RotateCcwKey } from "lucide-react";
import router from "@/app/(auth)/routes/auth";

interface ManageWorksProps {
    project: Project,
    enrichedWorks: enrichedWorks[],
    remainingDays: number,
    missingWorks: number
}

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

type enrichedWorks = {
  work: Work;
  printedAssignee: string;
  printedStatus: string;
};

export default function ManageWorksPage({
  project,
  enrichedWorks,
  remainingDays,
  missingWorks
}: ManageWorksProps) {
  
  const printActionButton = (work: Work, status: string) => {
    const actionTone = printActionTone(status);
    const actions = returnAction(work, status)

    return (<div key={work.work_id} className="flex items-center justify-between gap-2">
      {(status != "🎉 COMPLETED") ?
      (<button
        type="button"
        className={`h-7 rounded px-2 text-xs font-semibold ${actionButtonClass(
          actionTone,
        )}`}
        onClick={actions!}
      >
        {printAction(status)}
      </button>
      ) : null}
    </div>);
  }

  const returnAction = (work: Work, status: string) => {
  switch(status) {
      case "⚠ UNASSIGNED":
        //return assign employee
      case "⚠ WITHDRAWN":
        //return view withdraw reason, then assign employee
      case "🌐 OPEN POOL":
        //return view open requests
      case "⌛ REQUEST SENT":
        return () => { setActiveWork(work); setCancelRequestWindow(true); } 
      case "✅ ASSIGNED":
        //return ;
      case "🔍 FOR REVIEW":
        return () => { setActiveWork(work); setMarkCompleteWindow(true); } 
      case "🎉 COMPLETED":
        //return ;
      default:
        //return ;
    }
  }

  async function refresh(filters: string[] = []) {
      const newWorks = await getEnrichedWorks(project.project_id);
      setWorks(() => newWorks);
  }

  const [works, setWorks] = useState<enrichedWorks[]>(enrichedWorks)
  const [nullWindow, setNullWindow] = useState(false);
  const [activeWindow, setActiveWindow] = useState(false);
  const [worksWindow, setWorksWindow] = useState(false);

  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const [cancelRequestWindow, setCancelRequestWindow] = useState(false);
  const [markCompleteWindow, setMarkCompleteWindow] = useState(false);

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
          <ProjectHeaderActions 
            project={project} 
            refresh={refresh} 
            openWorkConflictWindow={() => setWorksWindow(true)}
          />
        </div>

        <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
          <div className="w-full space-y-2 lg:w-auto lg:min-w-[170px]">
            <span className="flex h-8 items-center justify-center rounded-full bg-red-600 px-3 text-sm font-bold text-white">
              {remainingDays} DAY{(remainingDays==1) ? " " : "S "}LEFT
            </span>
            <span className="flex h-8 items-center justify-center rounded-full bg-amber-500 px-3 text-sm font-bold text-white">
              {enrichedWorks.length - missingWorks}/{enrichedWorks.length} ROLES
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
                {project.client_name}
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
                {project.project_location}
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
                {project.project_end_date.toLocaleString()}
              </span>
            </div>
            <p className="max-w-5xl text-sm leading-relaxed text-slate-700">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-px bg-slate-300" />

        <div className="rounded-md border border-slate-300 bg-white shadow-sm">
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
              {works.map((row) => (
                <tr
                  key={row.work.work_id}
                  className="border-t border-slate-200 text-slate-800"
                >
                  <td className="border-r border-slate-200 px-3 py-2 text-xs font-medium">
                    {row.work.project_role}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-2 text-xs">
                    {((row.work.work_start_time == null || row.work.work_end_time == null) ?
                    "TBA" :
                    (toShortHours(row.work.work_start_time?.getHours() ?? 0) + "-" + toShortHours(row.work.work_end_time?.getHours() ?? 0))
                    ) + ", " + row.work.work_start_date?.toLocaleDateString()}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-2 text-xs">
                    {row.printedAssignee}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-2 text-xs font-medium">
                    {row.printedStatus}
                  </td>
                  <td className="px-3 py-1">
                    <div className="flex items-center justify-between w-full">
                    {printActionButton(row.work, row.printedStatus)}
                    <WorkRowActions
                      workId={row.work.work_id}
                      projectId={row.work.project_id}
                      oldDescription={row.work.work_description}
                      oldDate={row.work.work_start_date!}
                      oldSalary={row.work.expected_salary}
                      oldStartTime={row.work.work_start_time}
                      oldEndTime={row.work.work_end_time}
                      oldSetToTba={(row.work.work_end_time == null) && 
                        (row.work.work_start_time == null)}
                      oldPublishToOpenPool={row.work.is_open_pool}
                      openNullWindow={() => setNullWindow(true)}
                      openActiveWindow={() => setActiveWindow(true)}
                      refresh={refresh}
                    />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AddWorkButton 
          projectId={project.project_id}
          refresh={refresh}
          openNullWindow={() => setNullWindow(true)}
        />

        <ProjectNullValuesWindow 
          open={nullWindow}
          onClose={() => setNullWindow(false)}
        />

        <IsActiveWorkWindow 
          open={activeWindow}
          onClose={() => setActiveWindow(false)}
        />

        <WorkCancelRequest
            open={cancelRequestWindow} 
            onClose={() => setCancelRequestWindow(false)}
            refresh={refresh}
            cancelRequest={async () => {
              if (activeWork) await cancelRequest(activeWork.work_id);
            }}
          />

          <WorkMarkComplete
            open={markCompleteWindow} 
            onClose={() => setMarkCompleteWindow(false)}
            refresh={refresh}
            markComplete={async () => {
              if (activeWork) await markWorkAsComplete(activeWork.work_id);
            }}
          />

          <ProjectWorksExistWindow 
            open={worksWindow}
            onClose={() => setWorksWindow(false)}
          />
      </div>
    </div>
  );
}
