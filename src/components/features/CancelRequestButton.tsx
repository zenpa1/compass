"use client";

import { useState } from "react";
import { AssignPersonButton } from "@/components/features/AssignPersonButton";

interface CancelRequestButtonProps {
  initialLabel?: string;
}

export function CancelRequestButton({
  initialLabel = "Cancel Request",
}: CancelRequestButtonProps) {
  const [isCancelled, setIsCancelled] = useState(false);

  if (isCancelled) {
    return <AssignPersonButton label="Assign Employee" tone="red" />;
  }

  return (
    <button
      type="button"
      className="h-7 rounded bg-amber-300 px-2 text-xs font-semibold text-slate-900 hover:bg-amber-400"
      onClick={() => setIsCancelled(true)}
    >
      {initialLabel}
    </button>
  );
}
