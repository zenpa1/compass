"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AddProjectButtonProps {
  variant?: "floating" | "empty";
}

export function AddProjectButton({
  variant = "floating",
}: AddProjectButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tagOptions = useMemo(
    () => [
      "Weddings",
      "Corporate",
      "Birthdays",
      "Concerts",
      "Christenings",
      "Anniversary",
      "Sports",
      "Festivals",
    ],
    [],
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const handleConfirm = () => {
    setShowModal(false);
  };

  const buttonClasses = cn(
    "relative rounded-full border",
    variant === "floating"
      ? "fixed bottom-8 right-8 h-12 w-12 shadow-lg"
      : "mt-4 h-16 w-16 shadow-md",
    showModal
      ? "border-slate-200 bg-white text-slate-900 ring-2 ring-amber-300/70 shadow-[0_0_22px_rgba(245,158,11,0.55)]"
      : "border-transparent bg-slate-900 text-white hover:bg-slate-800 hover:shadow-[0_0_16px_rgba(15,23,42,0.35)]",
  );

  return (
    <>
      <Button
        size="icon"
        className={buttonClasses}
        aria-label="Create new project"
        aria-expanded={showModal}
        onClick={() => setShowModal(true)}
      >
        <span className="text-2xl leading-none">+</span>
      </Button>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Create project"
        >
          <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Create Project
            </h3>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="create-project-name">Project Name</Label>
                <Input
                  id="create-project-name"
                  placeholder="Enter Project Name ..."
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <Input
                    placeholder="Start"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                  />
                  <span className="text-xs text-slate-500">to</span>
                  <Input
                    placeholder="End"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="create-project-description">Description</Label>
                <textarea
                  id="create-project-description"
                  className="min-h-[100px] w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus-visible:border-slate-400"
                  placeholder="Add a short description..."
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2">
                  {tagOptions.map((tag) => {
                    const isActive = selectedTags.includes(tag);

                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                          isActive
                            ? "bg-rose-300 text-rose-900"
                            : "bg-slate-200 text-slate-600",
                        )}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
