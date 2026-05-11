"use client";

import { useState } from "react";
import { type Task } from "@/app/(dashboard)/tasks/page";

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (filtered: Task[]) => void;
    allTasks: Task[];
}

type SortOption = "alphabetical" | "deadline" | null;

const AVAILABLE_TAGS = [
    "Weddings", "Corporate", "Birthdays", "Concerts",
    "Christenings", "Anniversary", "Sports", "Festivals"
];

const TAG_COLORS: Record<string, string> = {
    Weddings: "#9e9e9e",
    Corporate: "#c8a84b",
    Birthdays: "#c8a84b",
    Concerts: "#9e9e9e",
    Christenings: "#9e9e9e",
    Anniversary: "#9e9e9e",
    Sports: "#9e9e9e",
    Festivals: "#9e9e9e",
};

export function FilterModal({ isOpen, onClose, onConfirm, allTasks }: FilterModalProps) {
    const [sortBy, setSortBy] = useState<SortOption>(null);
    const [showCompleted, setShowCompleted] = useState(false);
    const [showNotCompleted, setShowNotCompleted] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    if (!isOpen) return null;

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handleConfirm = () => {
        let result = [...allTasks];

        // Filter by progress
        if (showCompleted || showNotCompleted) {
            result = result.filter((task) => {
                if (showCompleted && task.isCompleted) return true;
                if (showNotCompleted && !task.isCompleted) return true;
                return false;
            });
        }

        // Filter by tags
        if (selectedTags.length > 0) {
            result = result.filter((task) =>
                selectedTags.some((tag) => task.tags.includes(tag))
            );
        }

        // Sort
        if (sortBy === "alphabetical") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "deadline") {
            result.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
        }

        onConfirm(result);
        onClose();
    };

    const handleCancel = () => {
        setSortBy(null);
        setShowCompleted(false);
        setShowNotCompleted(false);
        setSelectedTags([]);
        onClose();
    };

    const CheckBox = ({ active }: { active: boolean }) => (
        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${active ? "bg-[#c8a84b] border-[#c8a84b]" : "bg-slate-100 border-slate-300"
            }`}>
            {active && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            )}
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div
                className="w-full max-w-sm rounded-xl bg-white shadow-2xl p-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* SORT */}
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Sort Projects</h3>
                <div className="space-y-2 mb-5">
                    <button
                        className="flex items-center gap-3 w-full text-sm text-slate-700"
                        onClick={() => setSortBy(sortBy === "alphabetical" ? null : "alphabetical")}
                    >
                        <CheckBox active={sortBy === "alphabetical"} />
                        Alphabetically ↓
                    </button>
                    <button
                        className="flex items-center gap-3 w-full text-sm text-slate-700"
                        onClick={() => setSortBy(sortBy === "deadline" ? null : "deadline")}
                    >
                        <CheckBox active={sortBy === "deadline"} />
                        Deadline ↓
                    </button>
                </div>

                <hr className="border-slate-200 mb-5" />

                {/* FILTER */}
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Filter Projects</h3>

                {/* Progress */}
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Progress</p>
                <div className="space-y-2 mb-4">
                    <button
                        className="flex items-center gap-3 w-full text-sm text-slate-700"
                        onClick={() => {
                            const nextState = !showCompleted;
                            setShowCompleted(nextState);
                            if (nextState) setShowNotCompleted(false);
                        }}
                    >
                        <CheckBox active={showCompleted} />
                        Completed
                    </button>
                    <button
                        className="flex items-center gap-3 w-full text-sm text-slate-700"
                        onClick={() => {
                            const nextState = !showNotCompleted;
                            setShowNotCompleted(nextState);
                            if (nextState) setShowCompleted(false);
                        }}
                    >
                        <CheckBox active={showNotCompleted} />
                        Not completed
                    </button>
                </div>

                {/* Tags */}
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Tags</p>
                <div className="space-y-2 mb-6">
                    {AVAILABLE_TAGS.map((tag) => (
                        <button
                            key={tag}
                            className="flex items-center gap-3 w-full text-sm text-slate-700"
                            onClick={() => toggleTag(tag)}
                        >
                            <div
                                className="w-5 h-5 rounded border border-slate-300 transition-colors"
                                style={{ backgroundColor: selectedTags.includes(tag) ? "#c8a84b" : "#f1f5f9" }}
                            />
                            {tag}
                        </button>
                    ))}
                </div>

                {/* FOOTER */}
                <div className="flex gap-3">
                    <button
                        onClick={handleConfirm}
                        className="flex-1 py-2 rounded-lg bg-[#2a3f54] hover:bg-[#1e2d3d] text-white text-sm font-medium transition-colors"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={handleCancel}
                        className="flex-1 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}