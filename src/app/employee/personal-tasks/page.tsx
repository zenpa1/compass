"use client";

import { useState } from "react";
import { AddTaskButton } from "@/components/features/AddTaskButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PersonalTask = {
  id: number;
  title: string;
  dueDate: string;
  description: string;
  tags: string[];
};

const allTags = [
  "Consultation",
  "Gear Prep",
  "Review",
  "Editing",
  "Invoicing",
  "Delivery",
  "Culling",
  "Shooting",
];

const sortOptions = [
  { id: "alpha", label: "Alphabetically" },
  { id: "deadline", label: "Deadline" },
];

const progressOptions = [
  { id: "completed", label: "Completed" },
  { id: "not-completed", label: "Not completed" },
];

const taskFilterTagOptions = ["Weddings", "Corporate", "Birthday", "Festivals"];

const personalTasks: PersonalTask[] = [
  {
    id: 1,
    title: "Help Jose edit Photos",
    dueDate: "March 17 2025",
    description: "Prepare initial culling and draft edits for client approval.",
    tags: ["Editing", "Culling"],
  },
  {
    id: 2,
    title: "Ask client about photos",
    dueDate: "April 10 2025",
    description: "Confirm preferred style and special shot requests.",
    tags: ["Consultation"],
  },
  {
    id: 3,
    title: "Pay Stephon",
    dueDate: "December 10 2025",
    description: "Send balance for second-shooter compensation.",
    tags: ["Invoicing"],
  },
  {
    id: 4,
    title: "Pay Stephon",
    dueDate: "December 10 2025",
    description: "Send balance for second-shooter compensation.",
    tags: ["Invoicing"],
  },
  {
    id: 5,
    title: "Pay Stephon",
    dueDate: "December 10 2025",
    description: "Send balance for second-shooter compensation.",
    tags: ["Invoicing"],
  },
  {
    id: 6,
    title: "Pay Stephon",
    dueDate: "December 10 2025",
    description: "Send balance for second-shooter compensation.",
    tags: ["Invoicing"],
  },
  {
    id: 7,
    title: "Pay Stephon",
    dueDate: "December 10 2025",
    description: "Send balance for second-shooter compensation.",
    tags: ["Invoicing"],
  },
];

export default function PersonalTasksPage() {
  const [showOrganizeModal, setShowOrganizeModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string[]>([]);
  const [selectedProgressFilters, setSelectedProgressFilters] = useState<
    string[]
  >([]);
  const [selectedTaskFilterTags, setSelectedTaskFilterTags] = useState<
    string[]
  >([]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<PersonalTask | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editMonth, setEditMonth] = useState("");
  const [editDay, setEditDay] = useState("");
  const [editYear, setEditYear] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const openEditModal = (task: PersonalTask) => {
    const [month = "", day = "", year = ""] = task.dueDate.split(" ");

    setEditTitle(task.title);
    setEditMonth(month);
    setEditDay(day);
    setEditYear(year);
    setEditDescription(task.description);
    setSelectedTags(task.tags);
    setShowEditModal(true);
  };

  const openDeleteModal = (task: PersonalTask) => {
    setTaskToDelete(task);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setTaskToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDeleteConfirm = () => {
    // Frontend-only interaction for now; backend delete wiring will be added later.
    closeDeleteModal();
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const toggleSelection = (
    id: string,
    setFn: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setFn((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Personal Tasks
          </h1>
        </div>
        <Button
          type="button"
          size="sm"
          className={cn(
            "rounded-full border px-4",
            showOrganizeModal
              ? "border-slate-200 bg-white text-slate-900 shadow-[0_0_22px_rgba(245,158,11,0.55)] ring-2 ring-amber-300/70 hover:bg-white"
              : "border-transparent bg-slate-900 text-white hover:bg-slate-800",
          )}
          aria-label="Organize tasks"
          aria-expanded={showOrganizeModal}
          onClick={() => setShowOrganizeModal(true)}
        >
          Organize
        </Button>
      </div>

      <div className="overflow-x-auto rounded-md border border-slate-300 bg-white shadow-sm">
        <table className="min-w-[640px] w-full border-collapse text-left text-sm">
          <thead className="bg-white text-slate-900">
            <tr>
              <th className="w-16 border-r border-slate-200 px-3 py-2 text-sm font-medium">
                Status
              </th>
              <th className="border-r border-slate-200 px-4 py-2 text-sm font-medium">
                Task name
              </th>
              <th className="w-48 border-r border-slate-200 px-3 py-2 text-sm font-medium">
                Due date
              </th>
              <th className="w-12 px-2 py-2" />
            </tr>
          </thead>

          <tbody>
            {personalTasks.map((task) => (
              <tr
                key={task.id}
                className="border-t border-slate-200 text-slate-800"
              >
                <td className="border-r border-slate-200 px-3 py-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-md border-slate-300"
                    aria-label={`Mark ${task.title} complete`}
                  />
                </td>
                <td className="border-r border-slate-200 px-4 py-2 text-sm">
                  {task.title}
                </td>
                <td className="border-r border-slate-200 px-3 py-2 text-sm">
                  {task.dueDate}
                </td>
                <td className="px-2 py-2">
                  <details className="group relative">
                    <summary
                      className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                      aria-label="Task actions"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <circle cx="12" cy="5" r="1.7" />
                        <circle cx="12" cy="12" r="1.7" />
                        <circle cx="12" cy="19" r="1.7" />
                      </svg>
                    </summary>
                    <div className="absolute right-0 top-9 z-20 w-32 rounded-md border border-slate-200 bg-white p-1 text-sm shadow-md">
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
                        aria-label={`Edit ${task.title}`}
                        onClick={(event) => {
                          (
                            event.currentTarget.closest(
                              "details",
                            ) as HTMLDetailsElement | null
                          )?.removeAttribute("open");
                          openEditModal(task);
                        }}
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
                        aria-label={`Delete ${task.title}`}
                        onClick={(event) => {
                          (
                            event.currentTarget.closest(
                              "details",
                            ) as HTMLDetailsElement | null
                          )?.removeAttribute("open");
                          openDeleteModal(task);
                        }}
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <AddTaskButton />
      </div>

      {showEditModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Edit task"
        >
          <div className="w-full max-w-2xl rounded-xl bg-white p-4 shadow-lg sm:p-5">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Edit Task
            </h3>

            <div className="mt-4 space-y-4 text-sm text-slate-800">
              <input
                value={editTitle}
                onChange={(event) => setEditTitle(event.target.value)}
                className="h-12 w-full rounded-md border border-slate-200 bg-slate-100 px-3 text-base text-slate-700 outline-none focus-visible:border-slate-400"
                placeholder="Task name"
              />

              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-900">Deadline</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <input
                    value={editMonth}
                    onChange={(event) => setEditMonth(event.target.value)}
                    className="h-10 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus-visible:border-slate-400"
                    placeholder="Month"
                  />
                  <input
                    value={editDay}
                    onChange={(event) => setEditDay(event.target.value)}
                    className="h-10 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus-visible:border-slate-400"
                    placeholder="Day"
                  />
                  <input
                    value={editYear}
                    onChange={(event) => setEditYear(event.target.value)}
                    className="h-10 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm outline-none focus-visible:border-slate-400"
                    placeholder="Year"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-900">
                  Description
                </p>
                <textarea
                  value={editDescription}
                  onChange={(event) => setEditDescription(event.target.value)}
                  className="h-32 w-full resize-none rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-700 outline-none focus-visible:border-slate-400"
                  placeholder="Enter Description"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-900">Tags</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {allTags.map((tag) => {
                    const isActive = selectedTags.includes(tag);

                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`h-8 rounded-full px-3 text-sm ${
                          isActive
                            ? "bg-green-500 text-white"
                            : "bg-slate-300 text-white"
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => setShowEditModal(false)}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showOrganizeModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Organize personal tasks"
        >
          <div className="w-full max-w-xs rounded-xl bg-white p-4 shadow-lg">
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-base font-semibold text-slate-900">
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
                        onClick={() =>
                          toggleSelection(option.id, setSelectedSort)
                        }
                      >
                        <span
                          className={`h-4 w-4 rounded-sm border ${
                            isActive
                              ? "border-amber-600 bg-amber-600"
                              : "border-slate-300 bg-slate-400"
                          }`}
                        />
                        {option.label}
                        <span className="text-xs text-slate-600">&#8595;</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-400" />

              <div>
                <p className="text-base font-semibold text-slate-900">
                  Filter Projects
                </p>
                <p className="mt-2 text-xs font-semibold text-slate-500">
                  Progress
                </p>
                <div className="mt-2 space-y-2">
                  {progressOptions.map((option) => {
                    const isActive = selectedProgressFilters.includes(
                      option.id,
                    );

                    return (
                      <button
                        key={option.id}
                        type="button"
                        className="flex w-full items-center gap-2 text-left text-slate-700"
                        onClick={() =>
                          toggleSelection(option.id, setSelectedProgressFilters)
                        }
                      >
                        <span
                          className={`h-4 w-4 rounded-sm border ${
                            isActive
                              ? "border-amber-600 bg-amber-600"
                              : "border-slate-300 bg-slate-400"
                          }`}
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
                  {taskFilterTagOptions.map((tag) => {
                    const isActive = selectedTaskFilterTags.includes(tag);

                    return (
                      <button
                        key={tag}
                        type="button"
                        className="flex w-full items-center gap-2 text-left text-slate-700"
                        onClick={() =>
                          toggleSelection(tag, setSelectedTaskFilterTags)
                        }
                      >
                        <span
                          className={`h-4 w-4 rounded-sm border ${
                            isActive
                              ? "border-amber-600 bg-amber-600"
                              : "border-slate-300 bg-slate-400"
                          }`}
                        />
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <Button
                type="button"
                size="sm"
                className="flex-1"
                onClick={() => setShowOrganizeModal(false)}
              >
                Confirm
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex-1 border-slate-400 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowOrganizeModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {showDeleteModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Delete personal task confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Delete task?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {taskToDelete
                ? `Do you want to delete "${taskToDelete.title}"?`
                : "This action cannot be undone."}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              This action cannot be undone.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                type="button"
                className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={closeDeleteModal}
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
    </div>
  );
}
