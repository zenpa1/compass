"use client";

// A "dumb" reusable UI component wherein it handles no logic, just takes data and displays it
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editProject, deleteProject, archiveProject, checkProjectWorks,
  checkEditProjectConflict, checkProjectActiveWorks, activateProject }
  from "@/app/(dashboard)/projects/projectDataOps";
import toISODate from "@/app/(dashboard)/projects/projectMiscOps";
import { ProjectOverrideWindow } from "@/components/features/ProjectAlerts";

// Define the props (The inputs for this component)
interface ProjectCardProps {
  projectId: string | number;
  name: string;
  client: string;
  startDate: Date;
  endDate: Date;
  location: string;
  description: string;
  status: "ACTIVE" | "ARCHIVED";
  openNullWindow: () => void;
  openWorkConflictWindow: () => void;
  refresh: () => void;
}

// Destructure props ({name, client... }) to use them directly
export function ProjectCard({
  projectId,
  name,
  client,
  startDate,
  endDate,
  location,
  description,
  status,
  openNullWindow,
  openWorkConflictWindow,
  refresh
}: ProjectCardProps) {
  const headerTone = status === "ARCHIVED" ? "bg-rose-300" : "bg-slate-800";
  const router = useRouter();
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);
  const [showActiveConfirm, setShowActiveConfirm] = useState(false);
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editClient, setEditClient] = useState(client);
  const [editStartDate, setEditStartDate] = useState(startDate);
  const [editEndDate, setEditEndDate] = useState(endDate);
  const [editLocation, setEditLocation] = useState(location);
  const [editDescription, setEditDescription] = useState(description);

  const [overrideWindow, setOverrideWindow] = useState(false);

  const handleViewProject = () => {
    router.push(`/projects/viewProject?id=${projectId}`);
  };

  const handleStartDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {setEditStartDate(new Date(dateString));}
  };

  const handleEndDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {setEditEndDate(new Date(dateString));}
  };

  const openDeleteConfirm = (e: any) => {
    detailsRef.current?.removeAttribute("open");
    setShowDeleteConfirm(true);
  };

  const openEditModal = (e: any) => {
    detailsRef.current?.removeAttribute("open");
    setEditName(name);
    setShowEditModal(true);
  };

  const openArchiveConfirm = (e: any) => {
    detailsRef.current?.removeAttribute("open");
    setShowArchiveConfirm(true);
  };

  const openActiveConfirm = (e: any) => {
    detailsRef.current?.removeAttribute("open");
    setShowActiveConfirm(true);
  };

  //Occurs when project gets deleted
  const handleDeleteConfirm = async () => {
    setIsDeleting(true);

    const project = await checkProjectWorks(name);

    //Cannot delete project if it has active works
    if(project != null) {
      openWorkConflictWindow();
    }
    else {
      deleteProject(projectId as number);
      refresh();
      setShowEditModal(false);
    }
    setIsDeleting(false);
  };

  //Occurs when the user tries to save their edit changes
  const handleEditConfirm = async () => {
    if(
      editName == "" ||
      editClient == "" ||
      editStartDate == null ||
      editEndDate == null ||
      editLocation == ""
    ) {
      // Notifies the user of unfilled form values via a new window
      openNullWindow();
    }
    else {
      //Opens the override window if the inputted name already exists in the database
      //(and that name is not the original name of the project)
      const name_conflict = await checkEditProjectConflict(projectId as number, editName);

      if(name_conflict != null) {
        setOverrideWindow(true);
      }
      else {
        editProject(
          projectId as number,
          editName,
          editClient,
          editStartDate,
          editEndDate,
          editLocation,
          editDescription
        );

        refresh();
        setShowEditModal(false);
      }    
    }
  };

  //Occurs when the user chooses to override the conflicting project with their current
  //project
  async function overrideProject() {
    const existingWorks = await checkProjectWorks(editName);
    if(existingWorks != null) {
      openWorkConflictWindow();
    }
    else {
      //Deletes old project
      deleteProject(projectId as number);

      //Changes details based on user's inputs
      editProject(
          projectId as number,
          editName,
          editClient,
          editStartDate,
          editEndDate,
          editLocation,
          editDescription
        );

      refresh();
      setOverrideWindow(false);
      setShowEditModal(false);
    }
  }

  //Occurs when the user wants to archive a project
  const handleArchiveConfirm = async () => {
    const project = await checkProjectActiveWorks(projectId as number);
    
    //Project cannot be archived if it has active works
    if(project != null) {
      openWorkConflictWindow();
    }
    else {
      archiveProject(projectId as number);
      refresh();
      setShowArchiveConfirm(false);
    } 
  };

  //Un-archives a project
  const handleActiveConfirm = async () => {
    activateProject(projectId as number);
    refresh();
    setShowActiveConfirm(false);
  };

  return (
    <Card className="relative overflow-hidden border border-slate-200 bg-white p-0 shadow-sm transition-shadow hover:shadow-md">
      <div className={`h-32 ${headerTone}`} onClick={handleViewProject}/>
      <details ref={detailsRef} className="group absolute right-2 top-2">
        <summary
          className="flex h-7 w-7 cursor-pointer list-none items-center justify-center rounded-full text-amber-500 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Open project menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </summary>
        <div className="absolute right-0 top-9 w-44 rounded-md border border-slate-200 bg-white p-1 text-sm shadow-md">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-slate-700 hover:bg-slate-100"
            aria-label={`Edit ${name}`}
            onClick={openEditModal}
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
              style={{ pointerEvents: 'none' }}
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            Edit Project
          </button>
    
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-rose-600 hover:bg-rose-50"
            aria-label={`Delete ${name}`}
            onClick={openDeleteConfirm}
            disabled={isDeleting}
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
              style={{ pointerEvents: 'none' }}
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
            </svg>
            {isDeleting ? "Deleting..." : "Delete Project"}
          </button>

          { (status == "ACTIVE") ?
            <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-slate-700 hover:bg-slate-100"
            aria-label={`Archive ${name}`}
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
            Archive Project
            </button> :

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
            Activate Project
            </button>
          }
          
        </div>
      </details>
      <CardContent className="px-4 pb-4" onClick={handleViewProject}>
        <CardTitle className="text-base font-semibold text-slate-900">
          {name}
        </CardTitle>
        <div className="sr-only">
          <span>{client}</span>
          <span>{endDate.toLocaleDateString()}</span>
        </div>
      </CardContent>

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
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white hover:bg-rose-500"
                onClick={handleDeleteConfirm}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
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
              Do you want to archive "{name}"?
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
              Do you want to reactivate project "{name}"?
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

      {showEditModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Edit project"
        >
          <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Edit Project
            </h3>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`project-name-${projectId}`}>
                  Project Name
                </Label>
                <Input
                  id={`project-name-${projectId}`}
                  placeholder="Enter Project Name ..."
                  value={editName}
                  onChange={(event) => setEditName(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`client-name-${projectId}`}>
                  Customer Name
                </Label>
                <Input
                  id={`client-name-${projectId}`}
                  placeholder="Enter Customer Name ..."
                  value={editClient}
                  onChange={(event) => setEditClient(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <Input
                    placeholder="Start"
                    type="Date"
                    value={toISODate(editStartDate)}
                    onChange={handleStartDateChange}
                  />
                  <span className="text-xs text-slate-500">to</span>
                  <Input
                    placeholder="End"
                    type="Date"
                    value={toISODate(editEndDate)}
                    onChange={handleEndDateChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`location-name-${projectId}`}>
                  Location
                </Label>
                <Input
                  id={`location-name-${projectId}`}
                  placeholder="Enter Location ..."
                  value={editLocation}
                  onChange={(event) => setEditLocation(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`project-description-${projectId}`}>
                  Description
                </Label>
                <textarea
                  id={`project-description-${projectId}`}
                  className="min-h-[100px] w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus-visible:border-slate-400"
                  placeholder="Add a short description..."
                  value={editDescription}
                  onChange={(event) => setEditDescription(event.target.value)}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleEditConfirm}>
                Confirm
              </Button>
            </div>
          </div>

          {/*Override window for if there are conflicting names during editProject*/}
          <ProjectOverrideWindow
                      onClose = {() => setOverrideWindow(false)}
                      open = {overrideWindow}
                      override = {overrideProject}
          />
        </div>
      ) : null}
    </Card>
  );
}
