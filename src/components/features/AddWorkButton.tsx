"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const roleOptions = [
  "Main Photographer",
  "Main Videographer",
  "2nd Videographer",
  "2nd Photographer",
  "Booth Operator",
  "Same Day Video Editor",
  "Photoman",
];

export function AddWorkButton() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(roleOptions[0]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [salary, setSalary] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [setToTba, setSetToTba] = useState(false);
  const [publishToOpenPool, setPublishToOpenPool] = useState(false);

  const closeModal = () => setOpen(false);

  const handleConfirm = () => {
    // Frontend-only interaction for now; backend wiring will be added later.
    closeModal();
  };

  return (
    <>
      <Button
        type="button"
        className="h-9 w-full rounded-md bg-slate-900 text-sm font-semibold uppercase tracking-wide text-white hover:bg-slate-800"
        onClick={() => setOpen(true)}
      >
        + Add Work
      </Button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
          <div className="w-full max-w-lg rounded-md border border-slate-300 bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-semibold leading-none text-slate-900">
                Enter Work Details
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close add work modal"
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
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-slate-900">
                  Select Role:
                </label>
                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="h-9 flex-1 rounded-md border border-slate-300 px-3 text-sm text-slate-800 focus:border-slate-500 focus:outline-none"
                >
                  {roleOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Enter work description here."
                className="h-24 w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none"
              />

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Date:
                  </span>
                  <Input
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    placeholder="dd/mm/yy"
                    className="h-9 border-slate-300 px-3 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Salary:
                  </span>
                  <Input
                    value={salary}
                    onChange={(event) => setSalary(event.target.value)}
                    placeholder="Enter salary in pesos"
                    className="h-9 border-slate-300 px-3 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Start Time:
                  </span>
                  <Input
                    value={startTime}
                    onChange={(event) => setStartTime(event.target.value)}
                    placeholder="00:00 AM/PM"
                    className="h-9 border-slate-300 px-3 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    End Time:
                  </span>
                  <Input
                    value={endTime}
                    onChange={(event) => setEndTime(event.target.value)}
                    placeholder="00:00 AM/PM"
                    className="h-9 border-slate-300 px-3 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-sm font-medium text-slate-800">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={setToTba}
                    onChange={(event) => setSetToTba(event.target.checked)}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Set Time to TBA
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={publishToOpenPool}
                    onChange={(event) =>
                      setPublishToOpenPool(event.target.checked)
                    }
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Publish to Open Pool?
                </label>
              </div>

              <div className="pt-1 text-center">
                <Button
                  type="button"
                  size="sm"
                  onClick={handleConfirm}
                  className="min-w-28 bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  CONFIRM
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
