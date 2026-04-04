"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { type Task } from "@/app/(dashboard)/tasks/page";
import { Button } from "@/components/ui/button";
import { ProjectInvalidDeadlineWindow } from "./ProjectAlerts";
import ProjectNullValuesWindow from "./ProjectAlerts";

// Match your real Prisma shape
interface Tag {
    tag_id: number;
    tag_name: string;
    color_hex: string;
}

interface EditTaskModalProps {
    task: Task | null;
    onClose: () => void;
    onSave: (updatedTask: Task) => void;
}

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

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

// Generate years from the current year up to 2100
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 2100 - CURRENT_YEAR + 1 }, (_, i) => CURRENT_YEAR + i);

export function EditTaskModal({ task, onClose, onSave }: EditTaskModalProps) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [allTags, setAllTags] = useState<Tag[]>([]);
    const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    // State for teammate's modals
    const [isInvalidDateModalOpen, setIsInvalidDateModalOpen] = useState(false);
    const [isNullModalOpen, setIsNullModalOpen] = useState(false);

    // --- Dynamic Days Logic ---
    const monthIndex = MONTHS.indexOf(month);
    // Fallback to current year if year isn't selected so leap year math doesn't break
    const selectedYear = year ? parseInt(year) : CURRENT_YEAR;

    // JavaScript date trick: getting the 0th day of the NEXT month gives the last day of the CURRENT month
    const daysInMonth = monthIndex !== -1
        ? new Date(selectedYear, monthIndex + 1, 0).getDate()
        : 31;

    const validDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // If the user switches to a month with fewer days (e.g., Jan 31 -> Feb), clear the day
    useEffect(() => {
        if (day && parseInt(day) > daysInMonth) {
            setDay("");
        }
    }, [month, year, daysInMonth, day]);
    // --------------------------

    // Fetch all available tags and populate existing task data on mount
    useEffect(() => {
        if (!task) return;

        // Populate text fields
        setTitle(task.name);
        setDesc(task.description ?? "");

        if (task.dueDate) {
            const d = new Date(task.dueDate);
            setMonth(MONTHS[d.getMonth()]);
            setDay(d.getDate().toString());
            setYear(d.getFullYear().toString());
        }

        // Fetch tags AND pre-select in one shot
        fetch("/api/tags")
            .then((r) => r.json())
            .then((fetchedTags: { tag_id: number; tag_name: string; color_hex: string }[]) => {
                setAllTags(fetchedTags);
                const matched = fetchedTags
                    .filter((t) => task.tags.includes(t.tag_name))
                    .map((t) => t.tag_id);
                setSelectedTagIds(matched);
            })
            .catch(console.error);
    }, [task]);

    if (!task) return null;

    const toggleTag = (id: number) => {
        setSelectedTagIds((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const handleConfirm = async () => {
        // Check for empty fields and trigger the null values window
        if (!title.trim() || !month || !day || !year) {
            setIsNullModalOpen(true);
            return;
        }

        const mIndex = MONTHS.indexOf(month);

        // Check if the selected date is in the past
        const selectedDate = new Date(Number(year), mIndex, Number(day));
        const midnightToday = new Date();
        midnightToday.setHours(0, 0, 0, 0);

        if (selectedDate < midnightToday) {
            setIsInvalidDateModalOpen(true);
            return;
        }

        setIsSaving(true);
        try {
            const isoDate = `${year}-${String(mIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            const res = await fetch(`/api/tasks/${task.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    task_title: title,
                    task_desc: desc,
                    due_date: isoDate,
                    tagIds: selectedTagIds,
                }),
            });

            if (!res.ok) throw new Error("Failed to save task");

            // Map the API response back to your page's Task shape
            const data = await res.json();
            const updatedTask: Task = {
                ...task,
                name: data.task_title,
                description: data.task_desc ?? "",
                dueDate: new Date(data.due_date).toLocaleDateString("en-US", {
                    month: "long", day: "numeric", year: "numeric"
                }),
                dueDateBadge: new Date(data.due_date).toLocaleDateString("en-US", {
                    month: "long", day: "numeric", year: "numeric"
                }),
                tags: data.tasktag.map((tt: any) => tt.tag.tag_name),
            };

            onSave(updatedTask);
            onClose();
        } catch (err) {
            console.error(err);
            alert("Something went wrong saving the task.");
        } finally {
            setIsSaving(false);
        }
    };

    return createPortal(
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" role="dialog">
                <div
                    className="w-full max-w-[500px] rounded-xl bg-white shadow-2xl flex flex-col p-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h3 className="text-xl font-medium text-slate-800 tracking-tight mb-5">
                        Edit Task
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
                                    className={`flex-1 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all ${
                                        month === "" ? "text-slate-400" : "text-slate-700"
                                    }`}
                                >
                                    <option value="" disabled>Month</option>
                                    {MONTHS.map((m) => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                                <select
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    className={`w-20 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all text-center ${
                                        day === "" ? "text-slate-400" : "text-slate-700"
                                    }`}
                                >
                                    <option value="" disabled>Day</option>
                                    {validDays.map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                                <select
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className={`w-24 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all text-center ${
                                        year === "" ? "text-slate-400" : "text-slate-700"
                                    }`}
                                >
                                    <option value="" disabled>Year</option>
                                    {YEARS.map((y) => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-slate-800 mb-2">Description</label>
                            <textarea
                                placeholder="Enter Description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="w-full h-32 resize-none rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 px-4 py-3 text-sm text-slate-700 outline-none transition-all"
                            />
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-sm font-medium text-slate-800 mb-2">Tags</label>
                            <div className="flex flex-wrap gap-2">
                                {allTags.map((tag) => {
                                    const isSelected = selectedTagIds.includes(tag.tag_id);
                                    const tagIndex = AVAILABLE_TAGS.indexOf(tag.tag_name);

                                    // Map to the correct pastel color, or use a fallback for unknown tags
                                    const activeColorClass = tagIndex !== -1
                                        ? PASTEL_COLORS[tagIndex % PASTEL_COLORS.length]
                                        : "bg-slate-700 text-white";

                                    return (
                                        <button
                                            key={tag.tag_id}
                                            onClick={() => toggleTag(tag.tag_id)}
                                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                                isSelected
                                                    ? activeColorClass
                                                    : "bg-slate-300 text-white hover:bg-slate-400"
                                            }`}
                                        >
                                            {tag.tag_name}
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
                            disabled={isSaving}
                            className="px-6 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleConfirm}
                            disabled={isSaving}
                            className="bg-[#2a3f54] hover:bg-[#1e2d3d] text-white px-6 font-medium disabled:opacity-50"
                        >
                            {isSaving ? "Saving..." : "Confirm"}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Teammate's Windows */}
            <ProjectInvalidDeadlineWindow
                open={isInvalidDateModalOpen}
                onClose={() => setIsInvalidDateModalOpen(false)}
            />
            <ProjectNullValuesWindow
                open={isNullModalOpen}
                onClose={() => setIsNullModalOpen(false)}
            />
        </>,
        document.body
    );
}