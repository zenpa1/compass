"use client";

import { useMemo, useState } from "react";
import { 
  UserProfile, 
  User, 
  Assignment, 
  assignPerson, 
  removeWithdrawal, 
  reassignPerson, 
  getAvailableAssignees, 
  getRecommendedAssignees } 
  from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";
import { Work } from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import { Button } from "@/components/ui/button";
import { userAgent } from "next/server";

type Assignee = {
  userProfile: UserProfile;
  user: User;
}

interface AssignPersonButtonProps {
  label: string;
  tone: "amber" | "blue" | "red" | "green";
  availableAssignees: Assignee[],
  recommendedAssignees: Assignee[],
  assignment: Assignment,
  refresh: () => void,
  withdrawn: boolean
  work: Work;
}

function triggerClassByTone(tone: "amber" | "blue" | "red" | "green") {
  if (tone === "amber") {
    return "bg-amber-300 text-slate-900 hover:bg-amber-400";
  }

  if (tone === "blue") {
    return "bg-sky-300 text-slate-900 hover:bg-sky-400";
  }

  if (tone === "green") {
    return "bg-emerald-400 text-slate-900 hover:bg-emerald-500";
  }

  return "bg-red-500 text-white hover:bg-red-600";
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
}

export function AssignPersonButton({ 
  label, 
  tone,
  availableAssignees,
  recommendedAssignees,
  assignment,
  refresh,
  withdrawn,
  work
}: AssignPersonButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [isManualMode, setIsManualMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [hiredFreelancer, setHiredFreelancer] = useState(false);
  const [withdrawnModal, setWithdrawnModal] = useState(false);

  const [updatedAvailableAssignees, setUpdatedAvailableAssignees] = 
    useState<Assignee[]>(availableAssignees);
  const [updatedRecommendedAssignees, setUpdatedRecommendedAssignees] = 
    useState<Assignee[]>(recommendedAssignees);

  const [selectedUser, setSelectedUser] = useState<User>();
  const [showChangeAssigneeConfirm, setShowChangeAssigneeConfirm] = useState(false);

  const filteredManualCandidates = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    const baseCandidates = updatedAvailableAssignees;

    if (!query) {
      return baseCandidates;
    }

    const filtered = baseCandidates.filter((candidate) =>
      candidate.user.full_name!.toLowerCase().includes(query),
    );

    return filtered;
  }, [hiredFreelancer, searchTerm]);

  const displayedCandidates = !hiredFreelancer ? 
    (isManualMode
      ? filteredManualCandidates
      : updatedRecommendedAssignees) :
    null

  async function refreshAssignees() {
    const temp1 = await getAvailableAssignees(work);
    const temp2 = await getRecommendedAssignees(work, work.project_role);

    setUpdatedAvailableAssignees(() => temp1);
    setUpdatedRecommendedAssignees(() => temp2);
  }

  async function handleAssign(user: User) {
    setSelectedUser(user);

    if(assignment.user_id != null) {
      setShowChangeAssigneeConfirm(true);
    }
    else {
      assignPerson(assignment.assignment_id, user);
      setShowModal(false);
      refresh();
    }
  }

  async function handleReassign() {
    reassignPerson(assignment.assignment_id, selectedUser!);
    setShowChangeAssigneeConfirm(false);
    setShowModal(false);
    refresh();
  }

  async function handleOpen() {
    if(withdrawn) setWithdrawnModal(true);
    else {
      await refreshAssignees();
      setShowModal(true)
    }
  }

  async function handleWithdrawClose() {
    await removeWithdrawal(assignment.assignment_id);
    setWithdrawnModal(false);
    refresh();

    refreshAssignees();
    setTimeout(() => {setShowModal(true)}, 500);
  }

  return (
    <>
      <button
        type="button"
        className={`h-7 rounded px-2 text-xs font-semibold ${triggerClassByTone(tone)}`}
        onClick={handleOpen}
        aria-haspopup="dialog"
        aria-expanded={showModal}
      >
        {label}
      </button>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Assign a person"
        >
          <div className="w-full max-w-2xl rounded-xl border border-slate-300 bg-white p-4 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-900 hover:bg-slate-100"
                  aria-label="Close assign person modal"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Assign a Person
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsManualMode(false)}
                  className={`h-9 min-w-20 rounded-md border px-3 text-xs font-semibold ${
                    !isManualMode
                      ? "border-[#2b4665] bg-[#2b4665] text-white"
                      : "border-slate-700 bg-white text-slate-900"
                  }`}
                >
                  Auto
                </button>
                <button
                  type="button"
                  onClick={() => setIsManualMode(true)}
                  className={`h-9 min-w-20 rounded-md border px-3 text-xs font-semibold ${
                    isManualMode
                      ? "border-[#2b4665] bg-[#2b4665] text-white"
                      : "border-slate-700 bg-white text-slate-900"
                  }`}
                >
                  Manual
                </button>
              </div>
            </div>

            {isManualMode ? (
              <div className="mt-4 grid gap-2.5 md:grid-cols-[1fr_auto] md:items-center">
                <label className="flex h-10 items-center gap-2 rounded-lg border border-slate-400 bg-slate-50 px-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3-3" />
                  </svg>
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    type="text"
                    placeholder="Enter name here"
                    className="h-full w-full bg-transparent text-xs text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </label>

                <label className="inline-flex items-center gap-2 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={hiredFreelancer}
                    onChange={(event) =>
                      setHiredFreelancer(event.target.checked)
                    }
                    className="h-4 w-4 rounded border-slate-300 accent-[#2b4665]"
                  />
                  Hired a Freelancer?
                </label>
              </div>
            ) : null}

            <p className="mt-3 text-xs font-medium text-slate-400">
              {isManualMode
                ? hiredFreelancer
                  ? "Showing Available Freelancers"
                  : "Showing Available Employees"
                : "Showing Recommended Employees"}
            </p>

            <div className="mt-2.5 max-h-[250px] overflow-y-auto pr-1">
              <div className="space-y-2.5">
                {(displayedCandidates) ? displayedCandidates.map((candidate) => (
                  <div
                    key={candidate.user.user_id}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-xs font-bold text-slate-800">
                      {initialsOf(candidate.user.full_name!)}
                    </div>

                    <div>
                      <p className="text-lg font-semibold leading-none text-slate-900">
                        {candidate.user.full_name!}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <span
                            key={candidate.userProfile.primary_role}
                            className="inline-flex items-center rounded-full bg-black px-2 py-0.5 text-[11px] font-medium text-white"
                          >
                          {candidate.userProfile.primary_role}
                        </span>
                        {(candidate.userProfile.secondary_role) ? (
                          <span
                            key={candidate.userProfile.secondary_role}
                            className="inline-flex items-center rounded-full bg-black px-2 py-0.5 text-[11px] font-medium text-white"
                          >
                            {candidate.userProfile.secondary_role}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="h-8 min-w-24 rounded-md bg-[#2b4665] px-4 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#243a54]"
                      onClick={() => {handleAssign(candidate.user)}}
                    >
                      Select
                    </button>
                  </div>
                )) : null}

                {(displayedCandidates) ? (displayedCandidates.length === 0 ? (
                  <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-center text-xs text-slate-500">
                    No employees found.
                  </p>
                ) : null) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {withdrawnModal ? 
        (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Cancel work request confirmation"
          >
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Withdrawal Reason
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {assignment.withdrawal_reason}
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <Button
                  type="button" size="sm" 
                  onClick={handleWithdrawClose}
                >
                  Reassign
                </Button>
              </div>
            </div>
          </div>
        )
      : null}

      {showChangeAssigneeConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Reassign work confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Reassign Work
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Do you want to reassign this work?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowChangeAssigneeConfirm(false)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleReassign}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
