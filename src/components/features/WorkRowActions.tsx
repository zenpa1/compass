"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toISODate from "@/app/(dashboard)/projects/projectMiscOps";
import DatePicker from "react-datepicker";
import {
  editWork,
  isWorkActive,
  deleteWork,
  isValidWorkDeadline,
  isValidRoleEdit
} from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import { clearAssignee
} from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";

interface WorkRowActionsProps {
  projectId: number;
  workId: number;
  workRole: string;
  workStatus: string;
  oldDescription: string;
  oldDate: Date;
  oldSalary: number;
  oldStartTime: Date | null;
  oldEndTime: Date | null;
  oldSetToTba: boolean;
  oldPublishToOpenPool: boolean;
  openNullWindow: () => void;
  openActiveWindow: () => void;
  openDeadlineWindow: () => void;
  openRoleWindow: () => void;
  refresh: () => void;
}

export function WorkRowActions({
  projectId,
  workId,
  workRole,
  workStatus,
  oldDescription,
  oldDate,
  oldSalary,
  oldStartTime,
  oldEndTime,
  oldSetToTba,
  oldPublishToOpenPool,
  openNullWindow,
  openActiveWindow,
  openDeadlineWindow,
  openRoleWindow,
  refresh,
}: WorkRowActionsProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [description, setDescription] = useState(oldDescription);
  const [date, setDate] = useState(oldDate);
  const [salary, setSalary] = useState(oldSalary);
  const [startTime, setStartTime] = useState(oldStartTime);
  const [endTime, setEndTime] = useState(oldEndTime);
  const [setToTba, setSetToTba] = useState(oldSetToTba);
  const [publishToOpenPool, setPublishToOpenPool] =
    useState(oldPublishToOpenPool);

  const openEditModal = () => {
    setMenuOpen(false);
    setShowEditModal(true);
  };

  const handleEdit = async () => {
    if (description == "" || date == null) {
      // Notifies the user of unfilled form values via a new window
      openNullWindow();
    } else {
      const deadlineCheck = await isValidWorkDeadline(projectId, date);

      if(deadlineCheck == 1) {
        openDeadlineWindow();
      }
      else {
        const roleCheck = await isValidRoleEdit(workId, date, projectId, workRole);

        if(roleCheck != 0) {
          openRoleWindow();
        }
        else {
          editWork(
          workId,
          projectId,
          salary,
          publishToOpenPool,
          description,
          date,
          startTime,
          endTime,
          );

          refresh();
          closeEditModal();
        }
      }
    }
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const openDeleteConfirm = () => {
    setMenuOpen(false);
    setShowDeleteConfirm(true);
  };

  const closeDeleteConfirm = () => {
    setShowDeleteConfirm(false);
  };

  const handleDeleteConfirm = async () => {
    const isActive = await isWorkActive(workId);
    if (isActive) {
      openActiveWindow();
    } else {
      deleteWork(workId);

      refresh();
      setShowDeleteConfirm(false);
    }
  };

  const handleStartDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {
      setDate(new Date(dateString));
    }
  };

  const handleClearAssignee = async () => {
    clearAssignee(workId);
    setShowClearConfirm(false);
    setMenuOpen(false);
    refresh();
  }

  const positionMenu = () => {
    const trigger = triggerRef.current;
    if (!trigger) {
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const menuWidth = 144;
    const menuHeight = 86;
    const gutter = 8;

    let left = rect.right + gutter;
    if (left + menuWidth > window.innerWidth - gutter) {
      left = rect.left - menuWidth - gutter;
    }
    if (left < gutter) {
      left = gutter;
    }

    let top = rect.top;
    if (top + menuHeight > window.innerHeight - gutter) {
      top = window.innerHeight - menuHeight - gutter;
    }
    if (top < gutter) {
      top = gutter;
    }

    setMenuPosition({ top, left });
  };

  useEffect(() => {
    const onMenuOpenEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ workId: number }>).detail;
      if (detail?.workId !== workId) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "work-row-menu-open",
      onMenuOpenEvent as EventListener,
    );
    return () => {
      window.removeEventListener(
        "work-row-menu-open",
        onMenuOpenEvent as EventListener,
      );
    };
  }, [workId]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setMenuOpen(false);
    };

    const handleReposition = () => {
      positionMenu();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="relative">
        <button
          ref={triggerRef}
          type="button"
          className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          aria-label="Open work row menu"
          aria-expanded={menuOpen}
          onClick={() => {
            if (menuOpen) {
              setMenuOpen(false);
              return;
            }

            positionMenu();
            window.dispatchEvent(
              new CustomEvent("work-row-menu-open", { detail: { workId } }),
            );
            setMenuOpen(true);
          }}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <circle cx="12" cy="5" r="1.8" />
            <circle cx="12" cy="12" r="1.8" />
            <circle cx="12" cy="19" r="1.8" />
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div
          ref={menuRef}
          className="fixed z-40 w-36 rounded-md border border-slate-200 bg-white p-1 text-sm shadow-md"
          style={{ top: menuPosition.top, left: menuPosition.left }}
        >
          {!(workStatus == "COMPLETED") ? (
            <div>
              {(workStatus == "ASSIGNED") ? (
                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
                  onClick={() => setShowClearConfirm(true)}
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Clear Assignees
                </button>
              ) : null}

              {(workStatus == "PENDING" || workStatus == "OPEN") ? (
                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
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
                  Edit
                </button>
              ) : null}
          </div>
          ) : null}
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
      ) : null}

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
                    type="date"
                    value={toISODate(date)}
                    onChange={handleStartDateChange}
                    placeholder="dd/mm/yy"
                    className="h-8 border-slate-300 px-2 text-xs"
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
                    className="h-8 border-slate-300 px-2 text-xs"
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
                    className="border p-2 rounded-md w-full"
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
                    className="border p-2 rounded-md w-full"
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
                  onClick={handleEdit}
                  className="min-w-28 bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Continue
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

      {showClearConfirm ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Clear assignees confirmation"
          >
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Clear Assignee on Work?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                The current user will be unassigned from the work.
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <button
                  type="button"
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setShowClearConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md bg-slate-700 px-3 py-2 text-sm text-white hover:bg-slate-500"
                 onClick={handleClearAssignee}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}
    </>
  );
}
