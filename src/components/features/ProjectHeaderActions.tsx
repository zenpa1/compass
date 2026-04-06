"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Project, 
  deleteProjectHeader, 
  getProjectWorks, 
  archiveProject, 
  getProjectActiveWorks,
  activateProject,
  refreshProjectHeader } 
  from "@/app/(dashboard)/projects/projectDataOps";
import { useRouter } from "next/navigation";

interface ProjectHeaderActionsProps {
  project: Project;
  refresh: () => void;
  openWorkConflictWindow: () => void;
}

export function ProjectHeaderActions({
  project,
  refresh,
  openWorkConflictWindow
}: ProjectHeaderActionsProps) {
  const router = useRouter();

  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [showMarkCompleteConfirm, setShowMarkCompleteConfirm] = useState(false);
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);
  const [showActiveConfirm, setShowActiveConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const openMarkCompleteConfirm = () => {
    detailsRef.current?.removeAttribute("open");
    setShowMarkCompleteConfirm(true);
  };

  const openArchiveConfirm = () => {
    detailsRef.current?.removeAttribute("open");
    setShowArchiveConfirm(true);
  };

  const openActiveConfirm = (e: any) => {
    detailsRef.current?.removeAttribute("open");
    setShowActiveConfirm(true);
  };

  const openDeleteConfirm = () => {
    detailsRef.current?.removeAttribute("open");
    setShowDeleteConfirm(true);
  };

  const handleMarkCompleteConfirm = () => {
    // Frontend-only interaction for now; backend status update will be added later.
    setShowMarkCompleteConfirm(false);
  };

  const handleArchiveConfirm = async () => {
    const check = await getProjectActiveWorks(project.project_id);
    
    if (check != null) {
      openWorkConflictWindow();
    } else {
      archiveProject(project.project_id);
      refreshProjectHeader(project.project_id);
      setShowArchiveConfirm(false);
    }
  };

  const handleActiveConfirm = async () => {
      activateProject(project.project_id);
      refreshProjectHeader(project.project_id);
      setShowActiveConfirm(false);
  };

  const handleDeleteConfirm = async () => {
    const works = await getProjectActiveWorks(project.project_id);
    
    //Cannot delete project if it has active works
    if (works != null) {
      openWorkConflictWindow();
      console.log(works);
    } else {
      deleteProjectHeader(project.project_id);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <>
      <details ref={detailsRef} className="group relative">
        <summary
          className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          aria-label="Project actions"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <circle cx="12" cy="5" r="1.8" />
            <circle cx="12" cy="12" r="1.8" />
            <circle cx="12" cy="19" r="1.8" />
          </svg>
        </summary>

        <div className="absolute right-0 top-9 z-20 w-44 rounded-md border border-slate-200 bg-white p-1 text-sm shadow-md">
          {/*<button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-slate-700 hover:bg-slate-100"
            onClick={openMarkCompleteConfirm}
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
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Mark Complete
          </button>*/}

          {(project.project_status == "ACTIVE") ? (
            <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-slate-700 hover:bg-slate-100"
            onClick={openArchiveConfirm}
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
              <rect x="3" y="4" width="18" height="6" rx="1" />
              <path d="M7 14h10" />
              <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
            </svg>
            Archive
          </button>
          ) : (
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-slate-700 hover:bg-slate-100"
              aria-label={`Activate ${name}`}
              onClick={openActiveConfirm}
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
                <rect x="3" y="4" width="18" height="6" rx="1" />
                <path d="M7 14h10" />
                <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
              </svg>
              Activate
            </button>
          )}

          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-rose-600 hover:bg-rose-50"
            onClick={openDeleteConfirm}
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
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
            </svg>
            Delete
          </button>
        </div>
      </details>

      {showMarkCompleteConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Mark project complete confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Mark Complete
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Do you want to mark "{project.project_name}" as complete?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowMarkCompleteConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={handleMarkCompleteConfirm}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {showArchiveConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Archive project confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Archive Project
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Do you want to archive "{project.project_name}"?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowArchiveConfirm(false)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleArchiveConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {showActiveConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Activate project confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Activate Project
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Do you want to reactivate project "{project.project_name}"?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowActiveConfirm(false)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleActiveConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {showDeleteConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Delete project confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Delete project?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              This action cannot be undone.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                type="button"
                className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white hover:bg-rose-500"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
