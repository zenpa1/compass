"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createWork } from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import toISODate from "@/app/(dashboard)/projects/projectMiscOps";
import DatePicker from "react-datepicker";

interface AddWorkButtonProps {
  projectId: number;
  refresh: () => void;
  openNullWindow: () => void;
}

const roleOptions = [
  "Main Photographer",
  "Main Videographer",
  "2nd Videographer",
  "2nd Photographer",
  "Booth Operator",
  "Same Day Video Editor",
  "Photoman",
];

export function AddWorkButton({
  projectId,
  refresh,
  openNullWindow,
}: AddWorkButtonProps) {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(roleOptions[0]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [salary, setSalary] = useState(0.0);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [setToTba, setSetToTba] = useState(false);
  const [publishToOpenPool, setPublishToOpenPool] = useState(false);

  const closeModal = () => {
    resetValues();
    setOpen(false);
  };

  const resetValues = () => {
    setRole(roleOptions[0]);
    setDescription("");
    setDate(new Date());
    setSalary(0.0);
    setStartTime(new Date());
    setEndTime(new Date());
    setPublishToOpenPool(false);
    setSetToTba(false);
  };

  const handleConfirm = () => {
    if (description == "" || date == null) {
      // Notifies the user of unfilled form values via a new window
      openNullWindow();
    } else {
      createWork(
        projectId,
        role,
        getCategory(),
        salary,
        publishToOpenPool,
        description,
        date,
        startTime,
        endTime,
        publishToOpenPool ? "OPEN" : "PENDING",
      );

      //Resets the values in the form so that they are empty when the user
      //opens it again
      resetValues();

      refresh();
      closeModal();
    }
  };

  const handleStartDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {
      setDate(new Date(dateString));
    }
  };

  const getCategory = () => {
    if (role == roleOptions[0] || role == roleOptions[6]) return "PHOTO";
    else if (role == roleOptions[1]) return "VIDEO";
    else if (
      role == roleOptions[2] ||
      role == roleOptions[3] ||
      role == roleOptions[4]
    )
      return "ASSISTANT";
    else if (role == roleOptions[5]) return "EDITOR";
    return "ANY";
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
                    type="date"
                    value={toISODate(date)}
                    onChange={handleStartDateChange}
                    placeholder="dd/mm/yy"
                    className="h-9 border-slate-300 px-3 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Salary:
                  </span>
                  <Input
                    type="number"
                    min="0"
                    step=".01"
                    value={salary}
                    onChange={(event) =>
                      setSalary(parseFloat(event.target.value))
                    }
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
                  <DatePicker
                    selected={startTime}
                    onChange={(e: Date | null) => setStartTime(e!)}
                    showTimeSelectOnly
                    showPopperArrow={false}
                    showTimeCaption={false}
                    dateFormat="h:mm aa" // This enforces the "00:00 AM/PM" format
                    className="border p-2 rounded-md"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    End Time:
                  </span>
                  <DatePicker
                    selected={endTime}
                    onChange={(e: Date | null) => setEndTime(e!)}
                    showTimeSelectOnly
                    showPopperArrow={false}
                    showTimeCaption={false}
                    dateFormat="h:mm aa" // This enforces the "00:00 AM/PM" format
                    className="border p-2 rounded-md"
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
