"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SidebarLogoutButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="w-full h-12 hover:bg-slate-800 hover:text-white"
        aria-label="Log out"
        aria-expanded={showModal}
        onClick={() => setShowModal(true)}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <path d="M10 17l5-5-5-5" />
          <path d="M15 12H3" />
        </svg>
      </Button>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Logout confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">Log out</h3>
            <p className="mt-2 text-sm text-slate-600">
              Are you sure you want to log out?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
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
