"use client";
import { useState, useEffect } from "react";
import WorkTabs, { WorkStatus } from "@/components/features/WorkTabs";
import { WorkCard } from "@/components/features/WorkCard";
import type { Work } from "@/type/work";
import { 
  employeeMarkDone,
  employeeWithdraw,
  employeeMarkNotDone,
  employeeRemoveWork
 } from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";
import { Button } from "@/components/ui/button";
import ProjectNullValuesWindow from "@/components/features/ProjectAlerts";
import { SimpleDialogProps } from "@/app/(dashboard)/projects/projectDataOps";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { isValidWithdraw } from "@/app/(dashboard)/projects/[projectId]/workDataOps";

//console.log("params.id:", params.id)

export default function WorksPage() {
  const [selectedTab, setSelectedTab] = useState<WorkStatus>("OPEN");
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(false);

  const [withdrawModal, setWithdrawModal] = useState(false);
  const [currentWork, setCurrentWork] = useState(1);

  const [ confirmMarkDone, setConfirmMarkDone ] = useState(false);
  const [ confirmMarkNotDone, setConfirmMarkNotDone ] = useState(false);
  const [ confirmRemoveWork, setConfirmRemoveWork ] = useState(false);
  const [ hideCompleted, setHideCompleted ] = useState(false);
  const [withdrawReason, setWithdrawReason] = useState("");

  const pageTitle = (selectedTab == "OPEN") ? "Open Works" :
    (selectedTab == "PENDING") ? "Pending Works" :
    "Active Works"

  const fetchWorks = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/work?tab=${selectedTab}&active=${hideCompleted}`);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error: error", errorText);
        throw new Error("Failed to fetch works");
      }

      const data = await res.json();
      setWorks(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setWorks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (workId: number) => {
    console.log("Applying workId:", workId);
    try {
      const res = await fetch(`/api/work/${workId}/apply`, {
        method: "POST",
      });
      console.log("Fetch response status:", res.status);
      const text = await res.text();
      console.log("Fetch response body:", text);
      if (!res.ok) throw new Error("Failed to apply");
    } catch (err) {
      console.error(err);
    }
    fetchWorks();
  };

  const handleAccept = async (workId: number) => {
    await fetch(`/api/work/${workId}/accept`, { method: "POST" });
    fetchWorks();
  };

  const handleDecline = async (workId: number) => {
    await fetch(`/api/work/${workId}/decline`, { method: "POST" });
    fetchWorks();
  };

  const openWithdraw = async (workId: number) => {
    setCurrentWork(workId);
    setWithdrawModal(true);
  }

  const openMarkDone = async (workId: number) => {
    setCurrentWork(workId);
    setConfirmMarkDone(true);
  }

  const openMarkNotDone = async (workId: number) => {
    setCurrentWork(workId);
    setConfirmMarkNotDone(true);
  }

  const openRemoveWork = async (workId: number) => {
    setCurrentWork(workId);
    setConfirmRemoveWork(true);
  }

  const handleWithdraw = async () => {
    employeeWithdraw(currentWork);
    setWithdrawModal(false);
    setSelectedTab("ACTIVE");
    setTimeout(() => {fetchWorks();}, 500)
  };

  const handleMarkDone = async () => {
    await employeeMarkDone(currentWork);
    setSelectedTab("ACTIVE");
    setConfirmMarkDone(false);
    setTimeout(() => {fetchWorks();}, 500)
  }

  useEffect(() => {
    fetchWorks();
  }, [selectedTab]);

  const handleMarkNotDone = async () => {
    await employeeMarkNotDone(currentWork);
    setSelectedTab("ACTIVE");
    setConfirmMarkNotDone(false);
    setTimeout(() => {fetchWorks();}, 500)
  }

  const handleRemoveWork = async () => {
    await employeeRemoveWork(currentWork);
    setSelectedTab("ACTIVE");
    setConfirmRemoveWork(false);
    setTimeout(() => {fetchWorks();}, 500)
  }

  useEffect(() => {
    fetchWorks();
  }, [selectedTab, hideCompleted]);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {pageTitle}
          </h2>
          <div className="h-px flex-1 bg-gray-700 sm:min-w-[120px]"></div>
          {(selectedTab == "ACTIVE") ? (
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={hideCompleted}
                onChange={(event) => setHideCompleted(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300"
              />
                Hide Completed Works
            </label>
          ) : null}
        </div>
        <WorkTabs selected={selectedTab} onChange={setSelectedTab} />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p className="text-slate-500 col-span-full">Loading works...</p>
        ) : works.length === 0 ? (
          <p className="text-slate-500 col-span-full">No works found</p>
        ) : (
          works.map((work) => (
            <WorkCard
              key={work.work_id}
              work={work}
              status={selectedTab}
              onApply={handleApply}
              onAccept={handleAccept}
              onDecline={handleDecline}
              onWithdraw={openWithdraw}
              onMarkDone={openMarkDone}
              onMarkNotDone={openMarkNotDone}
              onRemoveWork={openRemoveWork}
            />
          ))
        )}
      </div>

      {withdrawModal ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Withdraw confirmation"
          >
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Withdraw from Work?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Are you sure you want to withdraw? You can still be applied to this work.
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <button
                  type="button"
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setWithdrawModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md bg-slate-700 px-3 py-2 text-sm text-white hover:bg-slate-500"
                  onClick={handleWithdraw}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null
      }

      {confirmMarkDone ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Mark work as done confirmation"
          >
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Mark as Done?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Confirm work as done? It will be reviewed by the owner.
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <button
                  type="button"
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setConfirmMarkDone(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md bg-slate-700 px-3 py-2 text-sm text-white hover:bg-slate-500"
                  onClick={handleMarkDone}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {confirmMarkNotDone ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Mark work as not done confirmation"
          >
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Mark Work as Not Done?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Owner will not be able to review work anymore.
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <button
                  type="button"
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setConfirmMarkNotDone(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md bg-slate-700 px-3 py-2 text-sm text-white hover:bg-slate-500"
                 onClick={handleMarkNotDone}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}

      {confirmRemoveWork ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Remove work confirmation"
          >
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Remove Work?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                You will not be able to view this work anymore.
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <button
                  type="button"
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setConfirmRemoveWork(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md bg-slate-700 px-3 py-2 text-sm text-white hover:bg-slate-500"
                  onClick={handleRemoveWork}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}
    </div>
  );
}

export function ProjectInvalidDeadlineWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Cannot Withdraw</DialogTitle>
      <DialogContent>
        <p>Unable to withdraw due to the work being close to its deadline.</p>
      </DialogContent>
    </Dialog>
  );
}