"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Applicant = {
  id: number;
  name: string;
  specialties: string[];
};

interface ViewApplicationsButtonProps {
  label?: string;
}

const mockApplicants: Applicant[] = [
  {
    id: 1,
    name: "Ariety",
    specialties: ["Photo", "Video"],
  },
  {
    id: 2,
    name: "Jules",
    specialties: ["Photo"],
  },
  {
    id: 3,
    name: "Mika",
    specialties: ["Video", "Editing"],
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
}

export function ViewApplicationsButton({ label }: ViewApplicationsButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const buttonText = label ?? `View Application [${mockApplicants.length}]`;

  return (
    <>
      <button
        type="button"
        className="h-7 rounded bg-red-500 px-2 text-xs font-semibold text-white hover:bg-red-600"
        onClick={() => setShowModal(true)}
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
                onClick={() => setShowModal(false)}
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
            </div>

            <div className="mt-4 max-h-[280px] overflow-y-auto pr-1">
              <div className="space-y-2.5">
                {mockApplicants.map((applicant) => (
                  <div
                    key={applicant.id}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-xs font-bold text-slate-800">
                      {getInitials(applicant.name)}
                    </div>

                    <div>
                      <p className="text-lg font-semibold leading-none text-slate-900">
                        {applicant.name}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        {applicant.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-white"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="button"
                      className="h-8 min-w-24 rounded-md bg-slate-800 px-4 text-xs font-semibold uppercase tracking-wide text-white hover:bg-slate-700"
                      onClick={() => setShowModal(false)}
                    >
                      Select
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
