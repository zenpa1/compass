"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MarkCompleteWorkButtonProps {
  label: string;
  tone: "amber" | "blue" | "red" | "green";
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

export function MarkCompleteWorkButton({
  label,
  tone,
}: MarkCompleteWorkButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirm = () => {
    // Frontend-only interaction for now; backend completion update will be added later.
    setShowConfirm(false);
  };

  return (
    <>
      <button
        type="button"
        className={`h-7 rounded px-2 text-xs font-semibold ${triggerClassByTone(tone)}`}
        onClick={() => setShowConfirm(true)}
        aria-haspopup="dialog"
        aria-expanded={showConfirm}
      >
        {label}
      </button>

      {showConfirm ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Mark work complete confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Mark Complete
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Do you want to mark this work as complete?
            </p>

            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setShowConfirm(false)}
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
