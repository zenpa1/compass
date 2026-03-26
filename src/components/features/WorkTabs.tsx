"use client";

import { Button } from "@/components/ui/button";

export type WorkStatus = "OPEN" | "PENDING" | "ACTIVE";

const workStatuses: WorkStatus[] = ["OPEN", "PENDING", "ACTIVE"];

type WorkTabsProps = {
  selected: WorkStatus;
  onChange: (status: WorkStatus) => void;
};

export default function WorkTabs({ selected, onChange }: WorkTabsProps) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
      {workStatuses.map((status) => (
        <Button
          key={status}
          variant={selected === status ? "default" : "outline"}
          onClick={() => onChange(status)}
          className="h-8 px-3 text-xs capitalize sm:h-9 sm:text-sm"
        >
          {status.toLowerCase()}
        </Button>
      ))}
    </div>
  );
}
