"use client";

import { useState } from "react";
import { WorkStatus } from "./WorkTabs";
import type { Work } from "@/type/work";

interface WorkCardProps {
  work: Work;
  status: WorkStatus;
  onApply: (workId: number) => Promise<void>;
  onAccept: (workId: number) => Promise<void>;
  onDecline: (workId: number) => Promise<void>;
  onWithdraw: (workId: number) => Promise<void>;
  onMarkDone?: (workId: number) => Promise<void>;
  onMarkNotDone?: (workId: number) => Promise<void>;
  onRemoveWork?: (workId: number) => Promise<void>;
}

function activeBadgeClass(workStatus: string) {
  if (workStatus === "REVIEW") return "bg-amber-600 text-white";
  if (workStatus === "COMPLETED") return "bg-green-600 text-white";
  return "bg-slate-300 text-slate-700";
}

function activeProgressLabel(workStatus: string) {
  if (workStatus === "REVIEW") return "PENDING";
  if (workStatus === "COMPLETED") return "COMPLETED";
  return "ONGOING";
}

/*function activeMarkerIcon(workStatus: string) {
  if (workStatus === "COMPLETED") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-slate-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    );
  }
  if (workStatus === "REVIEW") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 animate-spin text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-9-9" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-slate-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}*/

export function WorkCard({
  work,
  status,
  onApply,
  onAccept,
  onDecline,
  onWithdraw,
  onMarkDone,
  onMarkNotDone,
  onRemoveWork
}: WorkCardProps) {
  const start_date = new Date(work.work_start_date).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );
  const start_time = new Date(work.work_start_date).toLocaleTimeString(
    "en-US",
    { hour: "numeric", minute: "2-digit", hour12: true }
  );

  const applicationStatus = work.workapplication?.[0]?.application_status;

  if (status === "ACTIVE") {
    return (
      <article className="rounded-md border border-slate-300 bg-white p-3 shadow-sm sm:p-4">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2 className="text-xl font-semibold leading-tight text-slate-900 sm:text-2xl">
              {work.project.project_name}
            </h2>
            <div className="flex items-center gap-3">
              {/*activeMarkerIcon(work.work_status)*/}
              {(work.work_status != "COMPLETED") ? (
                <button
                  type="button"
                  onClick={() => onWithdraw?.(work.work_id)}
                  className="h-8 rounded-md bg-slate-800 px-3 text-xs text-white hover:bg-slate-700 disabled:opacity-50"
                  disabled={work.work_status !== "ASSIGNED"}
                >
                  Withdraw
                </button>
              ) : null}
              
              {(work.work_status == "ASSIGNED") ? (
                <button
                  type="button"
                  onClick={() => onMarkDone?.(work.work_id)}
                  className="h-8 rounded-md bg-green-500 px-3 text-xs text-white hover:bg-green-700 disabled:opacity-50"
                  disabled={work.work_status !== "ASSIGNED"}
                >
                  Mark as Done
                </button>
              ) : null}

              {(work.work_status == "REVIEW") ? (
                <button
                  type="button"
                  onClick={() => onMarkNotDone?.(work.work_id)}
                  className="h-8 rounded-md bg-green-500 px-3 text-xs text-white hover:bg-green-700 disabled:opacity-50"
                >
                  Mark as Not Done
                </button>
              ) : null}

              {(work.work_status == "COMPLETED") ? (
                <button
                  type="button"
                  onClick={() => onRemoveWork?.(work.work_id)}
                  className="h-8 rounded-md bg-slate-800 px-3 text-xs text-white hover:bg-slate-700 disabled:opacity-50"
                >
                  Remove Work
                </button>
              ) : null}
            </div>
          </div>

          {/* Badge + Role */}
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${activeBadgeClass(work.work_status)}`}
            >
              {activeProgressLabel(work.work_status)}
            </span>
            <span className="text-sm text-slate-700">{work.role_category}</span>
          </div>

          <div className="h-px bg-slate-300" />

          {/* Rate + Meta */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_180px]">
            <div>
              <p className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                ₱{work.expected_salary}
              </p>
              <p className="mt-1 text-sm text-slate-500">Expected Salary</p>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              {/* Date */}
              <p className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {start_date}
              </p>
              {/* Time */}
              <p className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                </svg>
                {start_time}
              </p>
              {/* Location */}
              <p className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>{work.project.project_location}</span>
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-700">
            {work.work_description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-md border border-slate-300 bg-white p-3 shadow-sm sm:p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px]">
        {/* Left column */}
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-semibold leading-tight text-slate-900">
              {work.project.project_name}
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              Customer Name: {work.project.client_name}
            </p>
            <p className="mt-1 text-sm text-slate-800">
              ROLE:{" "}
              <span className="font-semibold">{work.role_category}</span>
            </p>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-700">
            {work.work_description}
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-between">
          <div className="space-y-2 text-sm text-slate-700">
            {/* Date */}
            <p className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {start_date}
            </p>
            {/* Time */}
            <p className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
              {start_time}
            </p>
            {/* Location */}
            <p className="flex items-start gap-2">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>{work.project.project_location}</span>
            </p>
            {/* Rate */}
            <p className="flex items-center gap-2 font-medium text-slate-900">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
              Expected Rate: {work.expected_salary} PHP
            </p>
          </div>

          {/* Action buttons */}
          {status === "OPEN" && (
            <div className="mt-3 flex flex-wrap justify-start gap-2 md:justify-end">
              {/*<button
                type="button"
                onClick={() => onDecline?.(work.work_id)}
                className="h-8 min-w-24 rounded-md border border-rose-300 px-4 text-xs text-rose-600 hover:bg-rose-50 sm:text-sm"
              >
                Decline
              </button>*/}
              <button
                type="button"
                onClick={() => onApply?.(work.work_id)}
                className="h-8 min-w-24 rounded-md bg-green-600 px-5 text-xs text-white hover:bg-green-500 sm:text-sm"
              >
                Apply
              </button>
            </div>
          )}

          {status === "PENDING" && applicationStatus === "PENDING" && (
            <div className="mt-3 flex flex-wrap justify-start gap-2 md:justify-end">
              <button
                type="button"
                onClick={() => onAccept?.(work.work_id)}
                className="h-8 min-w-24 rounded-md border border-green-500 px-4 text-xs text-green-600 hover:bg-green-50 sm:text-sm"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => onDecline?.(work.work_id)}
                className="h-8 min-w-24 rounded-md border border-rose-300 px-4 text-xs text-rose-600 hover:bg-rose-50 sm:text-sm"
              >
                Decline
              </button>
            </div>
          )}

          {status === "PENDING" && applicationStatus === "APPROVAL" && (
            <p className="mt-3 h-8 min-w-24 self-start rounded-md border border-slate-300 px-4 py-1 text-center text-xs text-slate-500 sm:self-end sm:text-sm">
              Awaiting Approval
            </p>
          )}
        </div>
{/* 
        {status === "ACTIVE" && work.work_status === "ASSIGNED" && (
          <button
            onClick={() => onWithdraw?.(work.work_id)}
            className="w-full rounded-xl border-2 border-black p-2 sm:w-1/2"
          >
            Withdraw
          </button>
        )}

        {status === "ACTIVE" && work.work_status === "ASSIGNED" && (
          <button
            onClick={() => onMarkDone?.(work.work_id)}
            className="border-2 flex-1 border-green-500 rounded-xl p-2 text-green-500 font-semibold ml-[7.5px]"
          >
            Mark As Done
          </button>
        )}

        {status === "ACTIVE" && work.work_status === "REVIEW" && (
          <p className="w-full rounded-xl border-2 border-white p-2 sm:w-1/2">
            For review
          </p>
        )}

        {status === "ACTIVE" && work.work_status === "COMPLETED" && (
          <p className="w-full rounded-xl border-2 border-white p-2 sm:w-1/2">
            Completed
          </p>
        )} 
*/}
      </div>
    </article>
  );
}