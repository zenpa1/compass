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
    <div className="flex items-center gap-2">
      {workStatuses.map((status) => (
        <Button
          key={status}
          variant={selected === status ? "default" : "outline"}
          onClick={() => onChange(status)}
          className="capitalize"
        >
          {status.toLowerCase()}
        </Button>
      ))}
    </div>
  );
}
