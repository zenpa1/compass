"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AddWorkButton } from "@/components/features/AddWorkButton";
import { ProjectHeaderActions } from "@/components/features/ProjectHeaderActions";
import { ViewApplicationsButton } from "@/components/features/ViewApplicationsButton";
import { AssignPersonButton } from "@/components/features/AssignPersonButton";
import { MarkCompleteWorkButton } from "@/components/features/MarkCompleteWorkButton";
import { UndoMarkCompleteButton } from "@/components/features/UndoMarkCompleteButton";
import { CancelRequestButton } from "@/components/features/CancelRequestButton";
import { Project, 
  refreshProjectHeader, 
  isCompleteProjectTone } 
  from "@/app/(dashboard)/projects/projectDataOps";
import {
  Work,
  getEnrichedWorks,
} from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import toShortHours, {
  printAction,
  printActionTone,
} from "@/app/(dashboard)/projects/[projectId]/workMiscOps";
import ProjectNullValuesWindow, {
  IsActiveWorkWindow,
  ProjectWorksExistWindow,
  ProjectInvalidRoleWindow,
} from "@/components/features/ProjectAlerts";
import { WorkRowActions } from "@/components/features/WorkRowActions";
import {
  UserProfile,
  User,
  Assignment,
} from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";
import {
  getRemainingDays,
  getProjectMissingWorks,
} from "@/app/(dashboard)/projects/projectDataOps";
import { 
  ProjectInvalidDeadlineWindow,
  ProjectInvalidWorkDateWindow
} from "@/components/features/ProjectAlerts";

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

interface ManageWorksProps {
  project: Project;
  enrichedWorks: enrichedWorks[];
  initialRemainingDays: number;
  initialMissingWorks: number;
  isComplete: number;
}

type Assignee = {
  userProfile: UserProfile;
  user: User;
};

type enrichedWorks = {
  work: Work;
  printedAssignee: string;
  printedStatus: string;
  availableAssignees: Assignee[];
  recommendedAssignees: Assignee[];
  applications: Assignee[];
  assignment: Assignment;
};

export default function ManageWorksPage({
  project,
  enrichedWorks,
  initialRemainingDays,
  initialMissingWorks,
  isComplete,
}: ManageWorksProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.refresh();
      router.back();
      return;
    }

    router.push("/projects");
  };

  const printActionButton = (
    work: Work,
    status: string,
    available: Assignee[],
    recommended: Assignee[],
    applications: Assignee[],
    assignment: Assignment,
  ) => {
    const actionTone = printActionTone(status);
    const printedAction = printAction(status);

    return (
      <div className="flex items-center justify-between gap-2">
        {status.startsWith("🌐 OPEN POOL") ? (
          <ViewApplicationsButton
            workId={work.work_id}
            refresh={refresh}
            applications={applications}
            tone={actionTone}
            availableAssignees={available}
            recommendedAssignees={recommended}
            assignment={assignment}
            withdrawn={status.startsWith("⚠ WITHDRAWN") ? true : false}
            work={work}
            openNullWindow={() => setNullWindow(true)}
          />
        ) : status.startsWith("⌛ REQUEST SENT") ? (
          <CancelRequestButton
            initialLabel={printedAction}
            refresh={refresh}
            work={work}
          />
        ) : status.startsWith("⚠ WITHDRAWN") ||
          status.startsWith("✅ ASSIGNED") ||
          status.startsWith("⚠ UNASSIGNED") ? (
          <AssignPersonButton
            label={printedAction}
            tone={actionTone}
            availableAssignees={available}
            recommendedAssignees={recommended}
            assignment={assignment}
            refresh={refresh}
            withdrawn={status.startsWith("⚠ WITHDRAWN") ? true : false}
            work={work}
            openNullWindow={() => setNullWindow(true)}
          />
        ) : status.startsWith("🔍 FOR REVIEW") ? (
          <MarkCompleteWorkButton
            label={printedAction}
            tone={actionTone}
            work={work}
            refresh={refresh}
          />
        ) : (
          <UndoMarkCompleteButton
            label={printedAction}
            tone={actionTone}
            work={work}
            refresh={refresh}
          />
        )}
      </div>
    );
  };

  const formatWorkSchedule = (work: Work) => {
    if (work.work_start_time == null || work.work_end_time == null) {
      return `${work.work_start_date?.toLocaleDateString()}, TBA`;
    }

    return (
      `${work.work_start_date?.toLocaleDateString()}, ` +
      `${toShortHours(work.work_start_time?.getHours() ?? 0)}-` +
      `${toShortHours(work.work_end_time?.getHours() ?? 0)}`
    );
  };

  async function refresh(filters: string[] = []) {
    const newWorks = await getEnrichedWorks(project.project_id);
    const newRemainingDays = await getRemainingDays(project.project_id);
    const newMissingWorks = await getProjectMissingWorks(project.project_id);
    const newIsComplete = await isCompleteProjectTone(project.project_id);
    
    const timeStatusMarkStart = newRemainingDays == 1 ? " " : "S ";
    const timeStatusStart =
      remainingDays >= 1
        ? newRemainingDays + " DAY" + timeStatusMarkStart + "LEFT"
        : (newIsComplete == 0)
          ? "COMPLETED"
          : (newRemainingDays == 0)
            ? "ONGOING"
            : "OVERDUE";

    setWorks(() => newWorks);
    setRemainingDays(newRemainingDays);
    setMissingWorks(newMissingWorks);
    setTimeStatus(timeStatusStart);
  }

  const [works, setWorks] = useState<enrichedWorks[]>(enrichedWorks);
  const [nullWindow, setNullWindow] = useState(false);
  const [activeWindow, setActiveWindow] = useState(false);
  const [worksWindow, setWorksWindow] = useState(false);
  const [deadlineWindow, setDeadlineWindow] = useState(false);
  const [roleWindow, setRoleWindow] = useState(false);
  const [workDateWindow, setWorkDateWindow] = useState(false);

  const [remainingDays, setRemainingDays] = useState(initialRemainingDays);
  const [missingWorks, setMissingWorks] = useState(initialMissingWorks);

  const title = project?.project_name ?? "AdHoc Co. Christmas Party";
  const description =
    project?.project_description ??
    "Coverage for AdHoc Co.'s Annual Christmas Party at The Blue Leaf. Focus on candid moments, the awards ceremony, and the SDE presentation. Client wants a fun, energetic vibe. Call time is 4 PM for setup. Formal attire required for all crew members.";

  const timeStatusMarkStart = remainingDays == 1 ? " " : "S ";
  const timeStatusStart =
      remainingDays >= 1
        ? remainingDays + " DAY" + timeStatusMarkStart + "LEFT"
        : (isComplete == 0)
          ? "COMPLETED"
          : (remainingDays == 0)
            ? "ONGOING"
            : "OVERDUE";

  /*const timeStatusToneStart = 
    isComplete
      ? "flex h-8 items-center justify-center rounded-full px-3 text-sm font-bold text-white bg-red-600"
      : "flex h-8 items-center justify-center rounded-full px-3 text-sm font-bold text-white bg-green-500"*/

  const [timeStatus, setTimeStatus] = useState(timeStatusStart)

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          aria-label="Go back to projects"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back
        </button>

        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <h2 className="min-w-0 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {title}
          </h2>
          <div className="hidden h-px flex-1 bg-slate-300 sm:block" />
          <div className="shrink-0">
            <ProjectHeaderActions
              project={project}
              refresh={refresh}
              openWorkConflictWindow={() => setWorksWindow(true)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
          <div className="w-full space-y-2 lg:w-auto lg:min-w-[170px]">
            <span
              className="flex h-8 items-center justify-center rounded-full px-3 text-sm font-bold text-white bg-red-600"
            >
              {timeStatus}
            </span>
            <span className="flex h-8 items-center justify-center rounded-full bg-amber-500 px-3 text-sm font-bold text-white">
              {works.length - missingWorks}/{works.length} ASSIGNMENTS
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
                {project.project_start_date.toLocaleDateString() +
                  " - " +
                  project.project_end_date.toLocaleDateString()}
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

        <div className="hidden overflow-x-auto rounded-md border border-slate-300 bg-white shadow-sm min-[1040px]:block">
          <table className="min-w-[860px] w-full border-collapse text-left text-sm">
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
                    {formatWorkSchedule(row.work)}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-2 text-xs">
                    {row.printedAssignee}
                  </td>
                  <td className="border-r border-slate-200 px-3 py-2 text-xs font-medium">
                    {row.printedStatus}
                  </td>
                  <td className="px-3 py-1">
                    <div className="flex w-full items-center justify-between gap-2">
                      {printActionButton(
                        row.work,
                        row.printedStatus,
                        row.availableAssignees,
                        row.recommendedAssignees,
                        row.applications,
                        row.assignment,
                      )}
                      <WorkRowActions
                        projectId={row.work.project_id}
                        workId={row.work.work_id}
                        workRole={row.work.project_role}
                        workStatus={row.work.work_status}
                        oldDescription={row.work.work_description}
                        oldDate={row.work.work_start_date!}
                        oldSalary={row.work.expected_salary}
                        oldStartTime={row.work.work_start_time}
                        oldEndTime={row.work.work_end_time}
                        oldSetToTba={
                          row.work.work_end_time == null &&
                          row.work.work_start_time == null
                        }
                        oldPublishToOpenPool={row.work.is_open_pool}
                        openNullWindow={() => setNullWindow(true)}
                        openActiveWindow={() => setActiveWindow(true)}
                        openDeadlineWindow={() => setDeadlineWindow(true)}
                        openRoleWindow={() => setRoleWindow(true)}
                        openWorkDateWindow={() => setWorkDateWindow(true)}
                        refresh={refresh}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 min-[1040px]:hidden">
          {works.map((row) => (
            <article
              key={row.work.work_id}
              className="rounded-md border border-slate-300 bg-white p-3 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  {row.work.project_role}
                </h3>
                <WorkRowActions
                  projectId={row.work.project_id}
                  workId={row.work.work_id}
                  workRole={row.work.project_role}
                  workStatus={row.work.work_status}
                  oldDescription={row.work.work_description}
                  oldDate={row.work.work_start_date!}
                  oldSalary={row.work.expected_salary}
                  oldStartTime={row.work.work_start_time}
                  oldEndTime={row.work.work_end_time}
                  oldSetToTba={
                    row.work.work_end_time == null &&
                    row.work.work_start_time == null
                  }
                  oldPublishToOpenPool={row.work.is_open_pool}
                  openNullWindow={() => setNullWindow(true)}
                  openActiveWindow={() => setActiveWindow(true)}
                  openDeadlineWindow={() => setDeadlineWindow(true)}
                  openRoleWindow={() => setRoleWindow(true)}
                  openWorkDateWindow={() => setWorkDateWindow(true)}
                  refresh={refresh}
                />
              </div>

              <div className="mt-3 space-y-1 text-xs text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">
                    Schedule:{" "}
                  </span>
                  {formatWorkSchedule(row.work)}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Assignee:{" "}
                  </span>
                  {row.printedAssignee}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Status: </span>
                  {row.printedStatus}
                </p>
              </div>

              <div className="mt-3 border-t border-slate-200 pt-3">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Action
                </p>
                {printActionButton(
                  row.work,
                  row.printedStatus,
                  row.availableAssignees,
                  row.recommendedAssignees,
                  row.applications,
                  row.assignment,
                )}
              </div>
            </article>
          ))}
        </div>

        <AddWorkButton
          project={project}
          refresh={refresh}
          openNullWindow={() => setNullWindow(true)}
          openDeadlineWindow={() => setDeadlineWindow(true)}
          openRoleWindow={() => setRoleWindow(true)}
          openWorkDateWindow={() => setWorkDateWindow(true)}
        />

        <ProjectNullValuesWindow
          open={nullWindow}
          onClose={() => setNullWindow(false)}
        />

        <IsActiveWorkWindow
          open={activeWindow}
          onClose={() => setActiveWindow(false)}
        />

        <ProjectWorksExistWindow
          open={worksWindow}
          onClose={() => setWorksWindow(false)}
        />

        <ProjectInvalidDeadlineWindow
          open={deadlineWindow}
          onClose={() => setDeadlineWindow(false)}
        />

        <ProjectInvalidRoleWindow
          open={roleWindow}
          onClose={() => setRoleWindow(false)}
        />

        <ProjectInvalidWorkDateWindow
          open={workDateWindow}
          onClose={() => setWorkDateWindow(false)}
        />
      </div>
    </div>
  );
}
