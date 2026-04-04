"use client";
import { useState, useEffect } from "react";
import WorkTabs, { WorkStatus } from "@/components/features/WorkTabs";
import { WorkCard } from "@/components/features/WorkCard";
import type { Work } from "@/type/work";
import { 
  employeeMarkDone,
  employeeWithdraw
 } from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";
import { Button } from "@/components/ui/button";

//console.log("params.id:", params.id)

export default function WorksPage() {
  const [selectedTab, setSelectedTab] = useState<WorkStatus>("OPEN");
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(false);

  const [withdrawModal, setWithdrawModal] = useState(false);
  const [withdrawDescription, setWithdrawDescription] = useState("");
  const [currentWork, setCurrentWork] = useState(1);

  const fetchWorks = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/work?tab=${selectedTab}`);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error: uhhh", errorText);
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

  const handleWithdraw = async () => {
    employeeWithdraw(currentWork, withdrawDescription);
    setWithdrawModal(false);
    setSelectedTab("ACTIVE");
    setTimeout(() => {fetchWorks();}, 500)
  };

  const handleMarkDone = async (workId: number) => {
    await employeeMarkDone(workId);
    fetchWorks();
  }

  useEffect(() => {
    fetchWorks();
  }, [selectedTab]);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Works
          </h2>
          <div className="h-px flex-1 bg-gray-700 sm:min-w-[120px]"></div>
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
              onMarkDone={handleMarkDone}
            />
          ))
        )}
      </div>

      {withdrawModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
          <div className="w-full max-w-md rounded-md border border-slate-300 bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-xl font-semibold leading-none text-slate-900">
                Enter Withdrawal Reason
              </h3>
              <button
                type="button"
                onClick={() => {setWithdrawModal(false)}}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close edit work modal"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-800">
              <textarea
                value={withdrawDescription}
                onChange={(event) => setWithdrawDescription(event.target.value)}
                placeholder="Enter reason for withdrawal here."
                className="h-24 w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none"
              />

              <div className="pt-1 text-center">
                <Button
                  type="button"
                  size="sm"
                  onClick={handleWithdraw}
                  className="min-w-28 bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null

      }
    </div>
  );
}
