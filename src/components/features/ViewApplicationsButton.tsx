"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserProfile, User, Assignment, acceptApplication } 
  from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";
import { workapplication_application_status } from "@/generated/client";
import { AssignPersonButton } from "@/components/features/AssignPersonButton";
import { Work } from "@/app/(dashboard)/projects/[projectId]/workDataOps";

type Assignee = {
  userProfile: UserProfile;
  user: User;
}

interface ViewApplicationsButtonProps {
  workId: number;
  refresh: () => void;
  applications: Assignee[];
  tone: "amber" | "blue" | "red" | "green";
  availableAssignees: Assignee[],
  recommendedAssignees: Assignee[],
  assignment: Assignment,
  withdrawn: boolean
  work: Work;
  openNullWindow: () => void;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
}

export function ViewApplicationsButton({ 
  workId,
  refresh,
  applications,
  tone,
  availableAssignees,
  recommendedAssignees,
  assignment,
  withdrawn,
  work,
  openNullWindow
}: ViewApplicationsButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const buttonText = `View Application [${applications.length}]`;

  async function handleAccept(user: User) {
    acceptApplication(workId, user.user_id);
    setShowModal(false);
    refresh();
  }

  return (
    <>
      <button
        type="button"
        className="h-7 rounded bg-red-500 px-2 text-xs font-semibold text-white hover:bg-red-600"
        onClick={() => { setShowModal(true); }}
        aria-haspopup="dialog"
        aria-expanded={showModal}
      >
        {buttonText}
      </button>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Select employee from applications"
        >
          <div className="w-full max-w-xl rounded-xl border border-slate-300 bg-white p-4 shadow-lg">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-900 hover:bg-slate-100"
                aria-label="Close applications modal"
                onClick={() => {setShowModal(false); console.log(applications)}}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Select Employee
              </h3>
              <AssignPersonButton
                label="Manually Assign"
                tone={tone}
                availableAssignees={availableAssignees}
                recommendedAssignees={recommendedAssignees}
                assignment={assignment}
                refresh={refresh}
                withdrawn={false}
                work={work}
                openNullWindow={() => openNullWindow()}
                closeApplications={() => setShowModal(false)}
              />
            </div>

            <div className="mt-4 max-h-[280px] overflow-y-auto pr-1">
              <div className="space-y-2.5">
                {applications.map((applicant) => (
                  <div
                    key={applicant.user.user_id}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-xs font-bold text-slate-800">
                      {getInitials(applicant.user.full_name!)}
                    </div>

                    <div>
                      <p className="text-lg font-semibold leading-none text-slate-900">
                        {applicant.user.full_name}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <span
                          key={applicant.userProfile.primary_role}
                          className="inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-white"
                        >
                          {applicant.userProfile.primary_role}
                        </span>
                        {(applicant.userProfile.secondary_role) ?
                          (
                            <span
                              key={applicant.userProfile.secondary_role}
                              className="inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-white"
                            >
                              {applicant.userProfile.secondary_role}
                            </span>
                          )
                        : null}
                      </div>
                    </div>

                    <Button
                      type="button"
                      className="h-8 min-w-24 rounded-md bg-slate-800 px-4 text-xs font-semibold uppercase tracking-wide text-white hover:bg-slate-700"
                      onClick={() => handleAccept(applicant.user)}
                    >
                      Select
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {(applications.length == 0) ? (
              <div className="mb-3">
                <p className="text-base leading-none text-slate-900 text-center">
                  No applicants yet
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
