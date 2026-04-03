"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type AddTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const AVAILABLE_TAGS = [
  "Weddings", "Corporate", "Birthdays", "Concerts",
  "Christenings", "Anniversary", "Sports", "Festivals"
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function AddTaskModal({ isOpen, onClose, onSuccess }: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("January");
  const [day, setDay] = useState("1");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleConfirm = async () => {
    if (!title.trim()) return;

    const monthIndex = MONTHS.indexOf(month) + 1;
    const isoDate = `${year}-${String(monthIndex).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          dueDate: isoDate,
          tags: selectedTags,
        }),
      });

      if (!res.ok) throw new Error("Failed to save task");

      setTitle("");
      setMonth("January");
      setDay("1");
      setYear(new Date().getFullYear().toString());
      setDescription("");
      setSelectedTags([]);

      onSuccess();
    } catch (error) {
      console.error(error);
      alert("Something went wrong saving the task.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog">
      <div
        className="w-full max-w-[500px] rounded-xl bg-white shadow-2xl flex flex-col p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-medium text-slate-800 tracking-tight mb-5">
          Create Task
        </h3>

        <div className="space-y-4">

          {/* Title */}
          <div>
            <input
              type="text"
              placeholder="Enter Project Name ..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 px-4 py-3 text-sm text-slate-700 outline-none transition-all"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">Deadline</label>
            <div className="flex gap-2">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="flex-1 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm text-slate-700 outline-none transition-all"
              >
                {MONTHS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <input
                type="number"
                value={day}
                min={1}
                max={31}
                onChange={(e) => setDay(e.target.value)}
                className="w-16 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm text-slate-700 outline-none transition-all text-center"
              />
              <input
                type="number"
                value={year}
                min={2024}
                max={2100}
                onChange={(e) => setYear(e.target.value)}
                className="w-24 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm text-slate-700 outline-none transition-all text-center"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">Description</label>
            <textarea
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-32 resize-none rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 px-4 py-3 text-sm text-slate-700 outline-none transition-all"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_TAGS.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${isSelected
                        ? "bg-[#b0c4b1] text-[#2a3f54]"
                        : "bg-slate-300 text-white hover:bg-slate-400"
                      }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-6 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isSubmitting || !title.trim()}
            className="bg-[#2a3f54] hover:bg-[#1e2d3d] text-white px-6 font-medium"
          >
            {isSubmitting ? "Saving..." : "Confirm"}
          </Button>
        </div>

      </div>
    </div>
  );
}