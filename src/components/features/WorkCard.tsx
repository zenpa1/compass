"use client";

import { WorkStatus } from "./WorkTabs";
import type { Work } from "@/type/work";

interface WorkCardProps {
  work: Work;
  status: WorkStatus;
  onApply?: (id: number) => void;
  onAccept?: (id: number) => void;
  onDecline?: (id: number) => void;
  onWithdraw?: (id: number) => void;
  onMarkDone?: (id: number) => void;
}

export function WorkCard({
  work,
  status,
  onApply,
  onAccept,
  onDecline,
  onWithdraw,
  onMarkDone
}: WorkCardProps) {
  const deadline = new Date(work.project.project_end_date).toLocaleDateString();
  const start_date = new Date(work.work_start_date).toLocaleDateString();
  const start_time = new Date(work.work_start_date).toLocaleTimeString();

  console.log("status:", status);
  console.log("applications:", work.workapplication);
  console.log("first application:", work.workapplication?.[0]);
  console.log(
    "application_status:",
    work.workapplication?.[0]?.application_status,
  );

  console.log(
    "REAL STATUS VALUE:",
    work.workapplication?.[0]?.application_status,
    typeof work.workapplication?.[0]?.application_status,
  );
  return (
    <div className="border rounded-xl p-4 shadow">
      <h3 className="text-lg font-semibold">{work.project.project_name}</h3>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
        <div>
          <p className="text-sm mt-1">
            Client Name: {work.project.client_name}
          </p>
          <p className="text-sm mt-1">Role: {work.role_category}</p>
          <p className="text-sm mt-1">{work.work_description}</p>
        </div>
        <div>
          <p className="text-sm mt-1">Date: {start_date}</p>
          <p className="text-sm mt-1">Time: {start_time}</p>
          <p className="text-sm mt-1">Loc: {work.project.project_location}</p>
          <p className="text-sm mt-1">Salary: {work.expected_salary} PHP</p>
        </div>
      </div>
      <div className="mt-2">
        {status === "OPEN" && (
          <button
            onClick={() => onApply?.(work.work_id)}
            className="w-full rounded-xl border-2 border-green-500 bg-green-500 p-2 font-semibold text-white sm:w-1/2"
          >
            Apply
          </button>
        )}

        {status === "PENDING" &&
          work.workapplication?.[0]?.application_status === "PENDING" && (
            <div className="flex gap-2">
              <button
                onClick={() => onAccept?.(work.work_id)}
                className="border-2 flex-1 border-green-500 rounded-xl p-2 text-green-500 font-semibold"
              >
                Accept
              </button>
              <button
                onClick={() => onDecline?.(work.work_id)}
                className="border-2 flex-1 border-red-500 rounded-xl p-2 text-red-500 font-semibold"
              >
                Decline
              </button>
            </div>
          )}

        {status === "PENDING" &&
          work.workapplication?.[0]?.application_status === "APPROVAL" && (
            <p className="w-full rounded-xl border-2 border-gray-400 p-2 text-center text-gray-400 sm:w-1/2">
              Awaiting Approval
            </p>
          )}

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
            className="border-2 flex-1 border-green-500 rounded-xl p-2 text-green-500 font-semibold"
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
      </div>
    </div>
  );
}
