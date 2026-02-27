"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProjectOverrideWindow } from "@/components/features/ProjectAlerts";
import checkCreateProjectConflict, { createProject, checkProjectWorks, getProjectId,
  deleteProject } from "@/app/(dashboard)/projects/projectDataOps";
import toISODate from "@/app/(dashboard)/projects/projectMiscOps";
import { cn } from "@/lib/utils";

interface AddProjectButtonProps {
  variant?: "floating" | "empty";
  refresh: () => void;
  openNullWindow: () => void;
  openWorkConflictWindow: () => void;
}

export function AddProjectButton({
  variant = "floating",
  refresh,
  openNullWindow,
  openWorkConflictWindow
}: AddProjectButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [overrideWindow, setOverrideWindow] = useState(false);

  const resetValues = () => {
    setProjectName("");
    setCustomerName("");
    setStartDate(new Date());
    setEndDate(new Date());
    setLocation("");
    setDescription("");
  }

  //Occurs when the user confirms their inputs
  const handleConfirm = async () => {
    if(
      projectName == "" ||
      customerName == "" ||
      startDate == null ||
      endDate == null ||
      location == ""
    ) {
      // Notifies the user of unfilled form values via a new window
      openNullWindow();
    }
    else {
      const name_conflict = await checkCreateProjectConflict(projectName);

      //Checks if the name the user inputted is already in the database
      if(name_conflict != null) {
        //If the name exists, it opens a window that asks the user if they want to
        //override the project with the new one
        setOverrideWindow(true);
      }
      else {
        createProject(
          projectName,
          customerName,
          startDate,
          endDate,
          location,
          description
        );

        //Resets the values in the form so that they are empty when the user
        //opens it again
        resetValues();
        
        refresh();
        setShowModal(false);
      }    
    }
  };

  //Occurs when the user chooses to override their old project with the new one because of
  //a conflict in project name
  async function overrideProject() {
    const existingWorks = await checkProjectWorks(projectName);

    //Will not allow the old project to be overrided if it still has active works
    if(existingWorks != null) {
      openWorkConflictWindow;
    }
    else {
      //Overrides the project by deleting the old one and creating the new project with
      //the user's inputs
      const projectId = await getProjectId(projectName);
      deleteProject(projectId!);

      createProject(
          projectName,
          customerName,
          startDate,
          endDate,
          location,
          description
        );
      
      resetValues();
      refresh();
      setOverrideWindow(false);
      setShowModal(false);
    }
  }

  //Handles the date changes because they are of a different input type
  const handleStartDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {setStartDate(new Date(dateString));}
  };

  const handleEndDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {setEndDate(new Date(dateString));}
  };

  const buttonClasses = cn(
    "relative rounded-full border",
    variant === "floating"
      ? "fixed bottom-8 right-8 h-12 w-12 shadow-lg"
      : "mt-4 h-16 w-16 shadow-md",
    showModal
      ? "border-slate-200 bg-white text-slate-900 ring-2 ring-amber-300/70 shadow-[0_0_22px_rgba(245,158,11,0.55)]"
      : "border-transparent bg-slate-900 text-white hover:bg-slate-800 hover:shadow-[0_0_16px_rgba(15,23,42,0.35)]",
  );

  return (
    <>
      <Button
        size="icon"
        className={buttonClasses}
        aria-label="Create new project"
        aria-expanded={showModal}
        onClick={() => setShowModal(true)}
      >
        <span className="text-2xl leading-none">+</span>
      </Button>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Create project"
        >
          <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Create Project
            </h3>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="create-project-name">Project Name</Label>
                <Input
                  id="create-project-name"
                  placeholder="Enter Project Name ..."
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="create-customer-name">Customer Name</Label>
                <Input
                  id="create-customer-name"
                  placeholder="Enter Customer Name ..."
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <Input
                    placeholder="Start"
                    type="Date"
                    value={toISODate(startDate)}
                    onChange={handleStartDateChange}
                  />
                  <span className="text-xs text-slate-500">to</span>
                  <Input
                    placeholder="End"
                    type="Date"
                    value={toISODate(endDate)}
                    onChange={handleEndDateChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="create-location-name">Location</Label>
                <Input
                  id="create-location-name"
                  placeholder="Enter Location ..."
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="create-project-description">Description</Label>
                <textarea
                  id="create-project-description"
                  className="min-h-[100px] w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus-visible:border-slate-400"
                  placeholder="Add a short description..."
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleConfirm}>
                Confirm
              </Button>
            </div>
          </div>

          {/* Override window that shows up when the inputted project name already
          exists the database */}
          <ProjectOverrideWindow
            onClose = {() => setOverrideWindow(false)}
            open = {overrideWindow}
            override = {overrideProject}
          />
        </div>
      ) : null}
    </>
  );
}