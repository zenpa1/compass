"use client";

import { useMemo, useState, useEffect } from "react";
import { SimpleDialogProps, getReportProjects } from "@/app/(dashboard)/projects/projectDataOps";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toISODate from "@/app/(dashboard)/projects/projectMiscOps";
import { usePDF } from "@react-pdf/renderer";
import { ProjectPdfTemplate } from "@/app/(dashboard)/projects/[projectId]/projectReport";
import { Project } from "@/app/(dashboard)/projects/projectDataOps";
import { Work } from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import {
  UserProfile,
  User,
  Assignment,
} from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";
import { cn } from "@/lib/utils";

interface PrintReportButtonProps {
  openNullWindow: () => void;
}

type enrichedWorks = {
  work: Work;
  printedAssignee: string;
  printedStatus: string;
  availableAssignees: Assignee[];
  recommendedAssignees: Assignee[];
  applications: Assignee[];
  assignment: Assignment;
};

type Assignee = {
  userProfile: UserProfile;
  user: User;
};

type pdfWorks = {
    project: Project,
    works: enrichedWorks[]
}

export default function PrintReportButton({
  openNullWindow,
}: PrintReportButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showErrorProjects, setShowErrorProjectsModal] = useState(false);

  const [projects, setProjects] = useState<pdfWorks[]>([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [instance, updateInstance] = usePDF({
    document: (
      <ProjectPdfTemplate 
        projects={projects} 
        printStartDate={startDate}
        printEndDate={endDate}
      />
    ),
  });

  useEffect(() => {
    if (projects.length > 0) {
      updateInstance(
        <ProjectPdfTemplate 
          projects={projects} 
          printStartDate={startDate}
          printEndDate={endDate}
        />
      );
    }
  }, [projects, updateInstance]);

  useEffect(() => {
    if (instance.blob && projects.length > 0) {
      if (instance.blob) {
        const url = URL.createObjectURL(instance.blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `NorthStudiosReport_${startDate.toLocaleDateString().replaceAll("/", "-")}_${endDate.toLocaleDateString().replaceAll("/", "-")}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        resetValues();
      }
    }
  }, [instance.blob]);

  const handleDownload = async () => {
    const reportProjects = await getReportProjects(startDate, endDate);
    setProjects(() => reportProjects);
  };

  const resetValues = () => {
    setStartDate(new Date());
    setEndDate(new Date());
  };

  //Occurs when the user confirms their inputs
  const handleConfirm = async () => {
    if (
      startDate == null ||
      endDate == null
    ) {
      openNullWindow();
    } else {
        startDate.setHours(0,0,0,0);
        endDate.setHours(0,0,0,0)

        if (startDate > endDate) {
            setShowErrorModal(true);
        } else {
            const reports = await getReportProjects(startDate, endDate);

            if(reports.length == 0) {
              setShowErrorProjectsModal(true);
            }
            else {
              handleDownload();
              setShowModal(false);
            }
        }
      }
  }

  //Handles the date changes because they are of a different input type
  const handleStartDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {
      setStartDate(new Date(dateString));
    }
  };

  const handleEndDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {
      setEndDate(new Date(dateString));
    }
  };

  return (
    <>
      <Button
        size="sm"
        className={cn(
                  "rounded-full border px-4",
                  showModal
                    ? "border-slate-200 bg-white text-slate-900 shadow-[0_0_22px_rgba(245,158,11,0.55)] ring-2 ring-amber-300/70 hover:bg-white"
                    : "border-transparent bg-slate-900 text-white hover:bg-slate-800",
        )}
        aria-label="Print project report"
        aria-expanded={showModal}
        onClick={() => setShowModal(true)}
      >
        Print Report
      </Button>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Create project"
        >
          <div className="w-full max-w-lg rounded-xl bg-white p-4 shadow-lg sm:p-5">
              <div className="space-y-2">
                <Label>Date Range</Label>
                <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[1fr_auto_1fr]">
                  <Input
                    placeholder="Start"
                    type="Date"
                    value={toISODate(startDate)}
                    onChange={handleStartDateChange}
                  />
                  <span className="hidden text-xs text-slate-500 sm:block">
                    to
                  </span>
                  <Input
                    placeholder="End"
                    type="Date"
                    value={toISODate(endDate)}
                    onChange={handleEndDateChange}
                  />
                </div>
              </div>
            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  resetValues();
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleConfirm}>
                Print
              </Button>
            </div>
          </div>

          <InvalidDatesWindow 
            onClose={() => setShowErrorModal(false)}
            open={showErrorModal}
          />

          <NoProjectsWindow 
            onClose={() => setShowErrorProjectsModal(false)}
            open={showErrorProjects}
          />
        </div>
      ) : null}
    </>
  );
}

function InvalidDatesWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Invalid Dates</DialogTitle>
      <DialogContent>
        <p>The end date cannot be earlier than the start date.</p>
      </DialogContent>
    </Dialog>
  );
}

function NoProjectsWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>No Projects</DialogTitle>
      <DialogContent>
        <p>There are no projects in the selected date range.</p>
      </DialogContent>
    </Dialog>
  );
}