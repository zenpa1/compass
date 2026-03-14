"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AssignPersonButton } from "@/components/features/AssignPersonButton";
import { Work, cancelRequest } from "@/app/(dashboard)/projects/[projectId]/workDataOps";

interface CancelRequestButtonProps {
  work: Work;
  initialLabel?: string;
  refresh: () => void;
}

export function CancelRequestButton({
  initialLabel = "Cancel Request", refresh, work
}: CancelRequestButtonProps) {
  const [confirmCancel, setConfirmCancel] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="h-7 rounded bg-amber-300 px-2 text-xs font-semibold text-slate-900 hover:bg-amber-400"
        onClick={() => setConfirmCancel(true)}
      >
        {initialLabel}
      </button>

      {confirmCancel ? (<div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Cancel work request confirmation"
      >
        <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
          <h3 className="text-base font-semibold text-slate-900">
            Cancel Request?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Do you want to cancel this assignment request?
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-slate-300 text-slate-700 hover:bg-slate-50"
              onClick={() => setConfirmCancel(false)}
            >
              Cancel
            </Button>
            <Button
              type="button" size="sm" 
            onClick={() => {cancelRequest(work.work_id); setConfirmCancel(false); refresh(); }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>) : null}
    </div>
  );
}
