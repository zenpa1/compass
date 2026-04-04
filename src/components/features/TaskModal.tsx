"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Task } from "@/app/(dashboard)/tasks/page";

// Bringing these over to keep colors perfectly synced!
const AVAILABLE_TAGS = [
  "Weddings", "Corporate", "Birthdays", "Concerts",
  "Christenings", "Anniversary", "Sports", "Festivals"
];

const PASTEL_COLORS = [
  "bg-[#fcd5ce] text-[#2a3f54]", // Pastel Pink
  "bg-[#cddafd] text-[#2a3f54]", // Pastel Blue
  "bg-[#ffecd1] text-[#2a3f54]", // Pastel Orange
  "bg-[#d8e2dc] text-[#2a3f54]", // Pastel Green
  "bg-[#e9edc9] text-[#2a3f54]", // Pastel Yellow-Green
  "bg-[#f8edeb] text-[#2a3f54]", // Pastel Rose
  "bg-[#e8e8e4] text-[#2a3f54]", // Pastel Gray
  "bg-[#ffcad4] text-[#2a3f54]", // Pastel Red/Pink
];

interface TaskModalProps {
  task: Task | null;
  onClose: () => void;
  onSave: (updatedTask: Task) => Promise<void> | void;
}

export function TaskModal({ task, onClose, onSave }: TaskModalProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setIsCompleted(task.isCompleted);
    }
  }, [task]);

  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-3xl rounded-lg bg-white shadow-2xl flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="text-xl font-semibold text-slate-800">{task.name}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="size-6" />
          </button>
        </div>

        {/* SUB-HEADER ROW */}
        <div className="flex items-center gap-4 px-6 py-4 bg-slate-50/50">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-default whitespace-nowrap">
            <input
              type="checkbox"
              checked={isCompleted}
              readOnly
              className="size-5 rounded border-slate-300 text-[#2a3f54] cursor-default pointer-events-none"
            />
            {isCompleted ? "Completed" : "In Progress"}
          </label>

          <div className="bg-[#2a3f54] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm whitespace-nowrap">
            DUE on {new Date(task.dueDateBadge).toLocaleDateString("en-US", {
              month: "long", day: "numeric", year: "numeric"
            })}
          </div>

          {/* 👇 ADDED flex-wrap HERE 👇 */}
          <div className="flex-1 flex flex-wrap justify-end gap-2">
            {task.tags.map((tagName: string) => {
              // Find the index of the tag to match the color from AddTaskModal
              const tagIndex = AVAILABLE_TAGS.indexOf(tagName);
              
              // Map to the correct pastel color, or use a fallback for unknown tags
              const colorClass = tagIndex !== -1 
                ? PASTEL_COLORS[tagIndex % PASTEL_COLORS.length]
                : "bg-slate-200 text-slate-700";

              return (
                <span key={tagName} className={`px-4 py-1 rounded-full text-xs font-bold ${colorClass}`}>
                  {tagName}
                </span>
              );
            })}
          </div>
        </div>

        {/* DESCRIPTION AREA */}
        <div className="px-6 py-4">
          <textarea
            value={task.description || "No description provided."}
            readOnly
            className="w-full h-64 p-4 border border-slate-200 rounded-md bg-slate-50/10 outline-none resize-none text-slate-600 text-sm italic cursor-default"
          />
        </div>

      </div>
    </div>
  );
}