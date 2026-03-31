"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AddTaskButton() {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [deadlineMonth, setDeadlineMonth] = useState("");
  const [deadlineDay, setDeadlineDay] = useState("");
  const [deadlineYear, setDeadlineYear] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tagOptions = [
    "Weddings",
    "Corporate",
    "Birthdays",
    "Concerts",
    "Christenings",
    "Anniversary",
    "Sports",
    "Festivals",
  ];

  const closeModal = () => setOpen(false);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

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
        + Add Task
      </Button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
          <div className="w-full max-w-lg rounded-md border border-slate-300 bg-white p-4 shadow-xl sm:p-5">
            <h3 className="text-xl font-semibold leading-none text-slate-900">
              Create Task
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-800">
              <Input
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                placeholder="Enter Project Name ..."
                className="h-9 border-slate-200 bg-slate-100 px-3 text-sm text-slate-700 placeholder:text-slate-400"
              />

              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-900">Deadline</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <Input
                    value={deadlineMonth}
                    onChange={(event) => setDeadlineMonth(event.target.value)}
                    placeholder="Month"
                    className="h-9 border-slate-200 bg-slate-100 px-3 text-sm"
                  />
                  <Input
                    value={deadlineDay}
                    onChange={(event) => setDeadlineDay(event.target.value)}
                    placeholder="Day"
                    className="h-9 border-slate-200 bg-slate-100 px-3 text-sm"
                  />
                  <Input
                    value={deadlineYear}
                    onChange={(event) => setDeadlineYear(event.target.value)}
                    placeholder="Year"
                    className="h-9 border-slate-200 bg-slate-100 px-3 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-900">
                  Description
                </p>
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Enter Description"
                  className="h-24 w-full resize-none rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-900">Tags</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {tagOptions.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`h-8 rounded-full px-3 text-sm ${
                        selectedTags.includes(tag)
                          ? "bg-slate-800 text-white"
                          : "bg-slate-300 text-white"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-2 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                  onClick={closeModal}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  size="sm"
                  onClick={handleConfirm}
                  className="min-w-28 bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
