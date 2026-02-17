"use client";

import { WorkStatus } from "./WorkTabs";
import type { Work } from "@/type/work";

interface WorkCardProps {
  work: Work
  status: WorkStatus
  onApply?: (id: number) => void
  onAccept?: (id: number) => void
  onDecline?: (id: number) => void
  onWithdraw?: (id: number) => void
}


export function WorkCard({
  work,
  status,
  onApply,
  onAccept,
  onDecline,
  onWithdraw
  }: WorkCardProps)
  {
  const deadline = new Date(work.project.project_end_date).toLocaleDateString();
  const start_date = new Date(work.work_start_date).toLocaleDateString();
  const start_time = new Date(work.work_start_date).toLocaleTimeString();

  return (
    <div className="border rounded-xl p-4 shadow">
      <h3 className="text-lg font-semibold">{work.project.project_name}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm mt-1">Client Name: {work.project.client_name}</p>
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
          <button onClick={() => onApply?.(work.work_id)} className="rounded-xl p-2 border-2 border-green-500 bg-green-500 text-white font-semibold w-1/2">Apply {work.work_id}</button>
        )}

        {status === "PENDING" && (
          <div className="flex gap-2">
            <button onClick={() => onAccept?.(work.work_id)} className="border-2 flex-1 border-green-500 rounded-xl p-2 text-green-500 font-semibold">Accept</button>
            <button onClick={() => onDecline?.(work.work_id)} className="border-2 flex-1 border-red-500 rounded-xl p-2 text-red-500 font-semibold">Decline</button>
          </div>
        )}

        {status === "ACTIVE" && work.work_status === "ASSIGNED" && (
          <button onClick={() => onWithdraw?.(work.work_id)} className="border-2 border-black rounded-xl p-2 w-1/2">
            Withdraw
          </button>
        )}

        {status === "ACTIVE" && work.work_status === "REVIEW" && (
          <p className="border-2 border-white rounded-xl p-2 w-1/2">For review</p>
        )}

        {status === "ACTIVE" && work.work_status === "COMPLETED" && (
          <p className="border-2 border-white rounded-xl p-2 w-1/2">Completed</p>
        )}
      </div>
    </div>
  );
}
