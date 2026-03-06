"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WorkRowActions() {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [salary, setSalary] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [setToTba, setSetToTba] = useState(false);
  const [publishToOpenPool, setPublishToOpenPool] = useState(false);

  const openEditModal = (event?: React.MouseEvent<HTMLButtonElement>) => {
    (
      event?.currentTarget?.closest("details") as HTMLDetailsElement | null
    )?.removeAttribute("open");
    detailsRef.current?.removeAttribute("open");
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const openDeleteConfirm = () => {
    detailsRef.current?.removeAttribute("open");
    setShowDeleteConfirm(true);
  };

  const closeDeleteConfirm = () => {
    setShowDeleteConfirm(false);
  };

  const handleDeleteConfirm = () => {
    // Frontend-only interaction for now; backend delete wiring will be added later.
    setShowDeleteConfirm(false);
  };

  return (
    <>
      <details ref={detailsRef} className="group relative">
        <summary
          className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          aria-label="Open work row menu"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <circle cx="12" cy="5" r="1.8" />
            <circle cx="12" cy="12" r="1.8" />
            <circle cx="12" cy="19" r="1.8" />
          </svg>
        </summary>
        <div className="absolute right-0 top-9 z-20 w-36 rounded-md border border-slate-200 bg-white p-1 text-sm shadow-md">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
            onClick={(event) => openEditModal(event)}
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
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            Edit
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-rose-600 hover:bg-rose-50"
            onClick={openDeleteConfirm}
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
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
            </svg>
            Delete
          </button>
        </div>
      </details>

      {showEditModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
          <div className="w-full max-w-md rounded-md border border-slate-300 bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-xl font-semibold leading-none text-slate-900">
                Edit Work Details
              </h3>
              <button
                type="button"
                onClick={closeEditModal}
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
                    className="h-8 border-slate-300 px-2 text-xs"
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
                    className="h-8 border-slate-300 px-2 text-xs"
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
                    className="h-8 border-slate-300 px-2 text-xs"
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
                    className="h-8 border-slate-300 px-2 text-xs"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-800">
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
                  onClick={closeEditModal}
                  className="min-w-28 bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  CONTINUE
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showDeleteConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Delete work confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Delete work?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              This action cannot be undone.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                type="button"
                className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={closeDeleteConfirm}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white hover:bg-rose-500"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
