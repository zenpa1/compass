"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sortOptions = [
  { id: "alpha", label: "Alphabetically" },
  { id: "deadline", label: "Deadline" },
];

const progressOptions = [
  { id: "completed", label: "Completed" },
  { id: "not-completed", label: "Not completed" },
];

const tagOptions = ["Weddings", "Corporate", "Birthday", "Festivals"];

export function OrganizeButton() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string[]>([]);
  const [selectedProgress, setSelectedProgress] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleItem = (
    id: string,
    setFn: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setFn((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
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
        aria-label="Organize projects"
        aria-expanded={showModal}
        onClick={() => setShowModal(true)}
      >
        Organize
      </Button>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Organize projects"
        >
          <div className="w-full max-w-xs rounded-xl bg-white p-4 shadow-lg">
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Sort Projects
                </p>
                <div className="mt-2 space-y-2">
                  {sortOptions.map((option) => {
                    const isActive = selectedSort.includes(option.id);

                    return (
                      <button
                        key={option.id}
                        type="button"
                        className="flex w-full items-center gap-2 text-left text-slate-700"
                        onClick={() => toggleItem(option.id, setSelectedSort)}
                      >
                        <span
                          className={cn(
                            "h-4 w-4 rounded-sm border",
                            isActive
                              ? "border-amber-500 bg-amber-500"
                              : "border-slate-300 bg-slate-200",
                          )}
                        />
                        {option.label}
                        <span className="text-xs text-slate-500">&#8595;</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-200" />

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Filter Projects
                </p>
                <p className="mt-2 text-xs font-semibold text-slate-500">
                  Progress
                </p>
                <div className="mt-2 space-y-2">
                  {progressOptions.map((option) => {
                    const isActive = selectedProgress.includes(option.id);

                    return (
                      <button
                        key={option.id}
                        type="button"
                        className="flex w-full items-center gap-2 text-left text-slate-700"
                        onClick={() =>
                          toggleItem(option.id, setSelectedProgress)
                        }
                      >
                        <span
                          className={cn(
                            "h-4 w-4 rounded-sm border",
                            isActive
                              ? "border-amber-500 bg-amber-500"
                              : "border-slate-300 bg-slate-200",
                          )}
                        />
                        {option.label}
                      </button>
                    );
                  })}
                </div>

                <p className="mt-3 text-xs font-semibold text-slate-500">
                  Tags
                </p>
                <div className="mt-2 space-y-2">
                  {tagOptions.map((tag) => {
                    const isActive = selectedTags.includes(tag);

                    return (
                      <button
                        key={tag}
                        type="button"
                        className="flex w-full items-center gap-2 text-left text-slate-700"
                        onClick={() => toggleItem(tag, setSelectedTags)}
                      >
                        <span
                          className={cn(
                            "h-4 w-4 rounded-sm border",
                            isActive
                              ? "border-amber-500 bg-amber-500"
                              : "border-slate-300 bg-slate-200",
                          )}
                        />
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
