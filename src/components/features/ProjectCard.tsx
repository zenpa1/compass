"use client";

// A "dumb" reusable UI component wherein it handles no logic, just takes data and displays it
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define the props (The inputs for this component)
interface ProjectCardProps {
  projectId: string | number;
  name: string;
  client: string;
  deadline: string;
  status: "ACTIVE" | "ARCHIVED";
}

// Destructure props ({name, client... }) to use them directly
export function ProjectCard({
  projectId,
  name,
  client,
  deadline,
  status,
}: ProjectCardProps) {
  const headerTone = status === "ARCHIVED" ? "bg-rose-300" : "bg-slate-800";
  const router = useRouter();
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editStartDate, setEditStartDate] = useState("");
  const [editEndDate, setEditEndDate] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(["Weddings"]);

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

  const openDeleteConfirm = () => {
    detailsRef.current?.removeAttribute("open");
    setShowDeleteConfirm(true);
  };

  const openEditModal = () => {
    detailsRef.current?.removeAttribute("open");
    setEditName(name);
    setShowEditModal(true);
  };

  const openArchiveConfirm = () => {
    detailsRef.current?.removeAttribute("open");
    setShowArchiveConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);

    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed.");
      }

      setShowDeleteConfirm(false);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const handleEditConfirm = () => {
    setShowEditModal(false);
  };

  const handleArchiveConfirm = () => {
    setShowArchiveConfirm(false);
  };

  return (
    <Card className="relative overflow-hidden border border-slate-200 bg-white p-0 shadow-sm transition-shadow hover:shadow-md">
      <div className={`h-32 ${headerTone}`} />
      <details ref={detailsRef} className="group absolute right-2 top-2">
        <summary
          className="flex h-7 w-7 cursor-pointer list-none items-center justify-center rounded-full text-amber-500 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Open project menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </summary>
        <div className="absolute right-0 top-9 w-44 rounded-md border border-slate-200 bg-white p-1 text-sm shadow-md">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-slate-700 hover:bg-slate-100"
            aria-label={`Edit ${name}`}
            onClick={openEditModal}
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
            Edit Project
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-rose-600 hover:bg-rose-50"
            aria-label={`Delete ${name}`}
            onClick={openDeleteConfirm}
            disabled={isDeleting}
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
            {isDeleting ? "Deleting..." : "Delete Project"}
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-slate-700 hover:bg-slate-100"
            aria-label={`Archive ${name}`}
            onClick={openArchiveConfirm}
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
              <rect x="3" y="4" width="18" height="6" rx="1" />
              <path d="M7 14h10" />
              <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
            </svg>
            Archive Project
          </button>
        </div>
      </details>
      <CardContent className="px-4 pb-4">
        <CardTitle className="text-base font-semibold text-slate-900">
          {name}
        </CardTitle>
        <div className="sr-only">
          <span>{client}</span>
          <span>{deadline}</span>
        </div>
      </CardContent>
      {showDeleteConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Delete project confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Delete project?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              This action cannot be undone.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                type="button"
                className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setShowDeleteConfirm(false)}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white hover:bg-rose-500"
                onClick={handleDeleteConfirm}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {showArchiveConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Archive project confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Archive Project
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Do you want to archive "{name}"?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowArchiveConfirm(false)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleArchiveConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
      {showEditModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Edit project"
        >
          <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Edit Project
            </h3>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`project-name-${projectId}`}>
                  Project Name
                </Label>
                <Input
                  id={`project-name-${projectId}`}
                  placeholder="Enter Project Name ..."
                  value={editName}
                  onChange={(event) => setEditName(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <Input
                    placeholder="Start"
                    value={editStartDate}
                    onChange={(event) => setEditStartDate(event.target.value)}
                  />
                  <span className="text-xs text-slate-500">to</span>
                  <Input
                    placeholder="End"
                    value={editEndDate}
                    onChange={(event) => setEditEndDate(event.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`project-description-${projectId}`}>
                  Description
                </Label>
                <textarea
                  id={`project-description-${projectId}`}
                  className="min-h-[100px] w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus-visible:border-slate-400"
                  placeholder="Add a short description..."
                  value={editDescription}
                  onChange={(event) => setEditDescription(event.target.value)}
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
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                          isActive
                            ? "bg-rose-300 text-rose-900"
                            : "bg-slate-200 text-slate-600"
                        }`}
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
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleEditConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
}
