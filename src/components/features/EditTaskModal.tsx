"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { type Task } from "@/app/(dashboard)/tasks/page";
import { Button } from "@/components/ui/button";
import { ProjectInvalidDeadlineWindow } from "./ProjectAlerts";
import ProjectNullValuesWindow from "./ProjectAlerts";
import { Listbox } from '@headlessui/react'

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
    "bg-[#fcd5ce] text-[#2a3f54] border-2", // Pastel Pink
    "bg-[#cddafd] text-[#2a3f54] border-2", // Pastel Blue
    "bg-[#ffecd1] text-[#2a3f54] border-2", // Pastel Orange
    "bg-[#d8e2dc] text-[#2a3f54] border-2", // Pastel Green
    "bg-[#e9edc9] text-[#2a3f54] border-2", // Pastel Yellow-Green
    "bg-[#f8edeb] text-[#2a3f54] border-2", // Pastel Rose
    "bg-[#e8e8e4] text-[#2a3f54] border-2", // Pastel Gray
    "bg-[#ffcad4] text-[#2a3f54] border-2", // Pastel Red/Pink
];

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 2100 - CURRENT_YEAR + 1 }, (_, i) => CURRENT_YEAR + i);

export function EditTaskModal({ task, onClose, onSave }: EditTaskModalProps) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [period, setPeriod] = useState("");

    const [isInvalidDateModalOpen, setIsInvalidDateModalOpen] = useState(false);
    const [isNullModalOpen, setIsNullModalOpen] = useState(false);

    // --- Dynamic Days Logic ---
    const monthIndex = MONTHS.indexOf(month);
    const selectedYear = year ? parseInt(year) : CURRENT_YEAR;
    const daysInMonth = monthIndex !== -1
        ? new Date(selectedYear, monthIndex + 1, 0).getDate()
        : 31;
    const validDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
    const MINUTES = ["00", "15", "30", "45"];

    // Reset when task is null
    useEffect(() => {
        if (!task) {
            setTitle("");
            setDesc("");
            setMonth("");
            setDay("");
            setYear("");
            setHour("");
            setMinute("");
            setPeriod("");
            setSelectedTags([]);
        }
    }, [task]);

    // Clear day if month changes and day is now invalid
    useEffect(() => {
        if (day && parseInt(day) > daysInMonth) {
            setDay("");
        }
    }, [month, year, daysInMonth, day]);

    // Populate fields when task loads
    useEffect(() => {
        if (!task) return;

        setTitle(task.name);
        setDesc(task.description ?? "");
        setSelectedTags(task.tags ?? []);

        // Use dueDateBadge (MM/DD/YYYY) for reliable date parsing
        if (task.dueDateBadge && task.dueDateBadge !== "N/A") {
            const [m, d, y] = task.dueDateBadge.split("/");
            setMonth(MONTHS[parseInt(m) - 1]);
            setDay(String(parseInt(d)));
            setYear(y);
        }

        // Parse time from dueDate string e.g. "May 3, 2026 at 2:00 PM"
        if (task.dueDate && task.dueDate.includes(" at ")) {
            const timePart = task.dueDate.split(" at ")[1]; // "2:00 PM"
            const [rawTime, p] = timePart.split(" ");        // "2:00", "PM"
            const [h, min] = rawTime.split(":");
            setHour(h);
            setMinute(min);
            setPeriod(p);
        } else {
            setHour("");
            setMinute("");
            setPeriod("");
        }
    }, [task]);

    if (!task) return null;

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handleConfirm = async () => {
        if (!title.trim() || !month || !day || !year) {
            setIsNullModalOpen(true);
            return;
        }

        const mIndex = MONTHS.indexOf(month);
        const selectedDate = new Date(Number(year), mIndex, Number(day));
        const midnightToday = new Date();
        midnightToday.setHours(0, 0, 0, 0);

        if (selectedDate < midnightToday) {
            setIsInvalidDateModalOpen(true);
            return;
        }

        setIsSaving(true);
        try {
            const isoDate = `${year}-${String(mIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}${
                hour && minute && period
                    ? `T${String(period === "PM" ? (parseInt(hour) === 12 ? 12 : parseInt(hour) + 12) : (parseInt(hour) === 12 ? 0 : parseInt(hour))).padStart(2, "0")}:${minute}:00`
                    : ""
            }`;

            const res = await fetch(`/api/tasks/${task.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    task_title: title,
                    task_desc: desc,
                    due_date: isoDate,
                    tags: selectedTags,
                }),
            });

            if (!res.ok) throw new Error("Failed to save task");

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
                tags: selectedTags,
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
                                placeholder="Enter Task Name ..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 px-4 py-3 text-sm text-slate-700 outline-none transition-all"
                            />
                        </div>

                        {/* Deadline */}
                        <div>
                            <label className="block text-sm font-medium text-slate-800 mb-2">Deadline</label>
                            <div className="flex gap-2">
                                <div className="relative basis-128">
                                    <Listbox value={month} onChange={setMonth}>
                                        <Listbox.Button className={`flex-1 w-full px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all ${month === "" ? "text-slate-400" : "text-slate-700"}`}>
                                            {month || "Month"}
                                        </Listbox.Button>
                                        <Listbox.Options className="z-1 absolute w-full max-h-100 overflow-y-auto mt-1 bg-white border rounded-md shadow-lg">
                                            {MONTHS.map((m) => (
                                                <Listbox.Option key={m} value={m}
                                                    className={({ active }) =>
                                                        `cursor-pointer px-4 py-2 ${active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'}`
                                                    }
                                                >
                                                    {m}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Listbox>
                                </div>

                                <div className="relative basis-64">
                                    <Listbox value={day} onChange={setDay}>
                                        <Listbox.Button className={`w-full px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all text-center ${day === "" ? "text-slate-400" : "text-slate-700"}`}>
                                            {day || "Day"}
                                        </Listbox.Button>
                                        <Listbox.Options className="z-1 absolute w-full max-h-100 overflow-y-auto mt-1 bg-white border rounded-md shadow-lg">
                                            {validDays.map((d) => (
                                                <Listbox.Option key={d} value={d}
                                                    className={({ active }) =>
                                                        `cursor-pointer px-4 py-2 ${active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'}`
                                                    }
                                                >
                                                    {d}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Listbox>
                                </div>

                                <div className="relative basis-64">
                                    <Listbox value={year} onChange={setYear}>
                                        <Listbox.Button className={`w-full px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all text-center ${year === "" ? "text-slate-400" : "text-slate-700"}`}>
                                            {year || "Year"}
                                        </Listbox.Button>
                                        <Listbox.Options className="absolute w-full max-h-100 overflow-y-auto mt-1 bg-white border rounded-md shadow-lg">
                                            {YEARS.map((y) => (
                                                <Listbox.Option key={y} value={y}
                                                    className={({ active }) =>
                                                        `cursor-pointer px-4 py-2 ${active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'}`
                                                    }
                                                >
                                                    {y}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Listbox>
                                </div>
                            </div>

                            {/* Time row */}
                            <div className="flex gap-2 mt-2">
                                <div className="relative">
                                    <Listbox value={hour} onChange={setHour}>
                                        <Listbox.Button className={`w-20 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all text-center ${hour === "" ? "text-slate-400" : "text-slate-700"}`}>
                                            {hour || "Hour"}
                                        </Listbox.Button>
                                        <Listbox.Options className="absolute w-20 max-h-100 overflow-y-auto mt-1 bg-white border rounded-md shadow-lg">
                                            {HOURS.map((h) => (
                                                <Listbox.Option key={h} value={h}
                                                    className={({ active }) =>
                                                        `cursor-pointer px-4 py-2 ${active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'}`
                                                    }
                                                >
                                                    {h}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Listbox>
                                </div>

                                <div className="relative">
                                    <Listbox value={minute} onChange={setMinute}>
                                        <Listbox.Button className={`w-20 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all text-center ${minute === "" ? "text-slate-400" : "text-slate-700"}`}>
                                            {minute || "Minute"}
                                        </Listbox.Button>
                                        <Listbox.Options className="absolute w-20 max-h-100 overflow-y-auto mt-1 bg-white border rounded-md shadow-lg">
                                            {MINUTES.map((m) => (
                                                <Listbox.Option key={m} value={m}
                                                    className={({ active }) =>
                                                        `cursor-pointer px-4 py-2 ${active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'}`
                                                    }
                                                >
                                                    {m}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Listbox>
                                </div>

                                <div className="relative">
                                    <Listbox value={period} onChange={setPeriod}>
                                        <Listbox.Button className={`w-20 px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all text-center ${period === "" ? "text-slate-400" : "text-slate-700"}`}>
                                            {period || "Period"}
                                        </Listbox.Button>
                                        <Listbox.Options className="absolute w-20 max-h-100 overflow-y-auto mt-1 bg-white border rounded-md shadow-lg">
                                            <Listbox.Option value="AM"
                                                className={({ active }) =>
                                                    `cursor-pointer px-4 py-2 ${active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'}`
                                                }
                                            >
                                                AM
                                            </Listbox.Option>
                                            <Listbox.Option value="PM"
                                                className={({ active }) =>
                                                    `cursor-pointer px-4 py-2 ${active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'}`
                                                }
                                            >
                                                PM
                                            </Listbox.Option>
                                        </Listbox.Options>
                                    </Listbox>
                                </div>

                                <span className="flex items-center text-xs text-slate-400">(optional)</span>
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
                                {AVAILABLE_TAGS.map((tag, index) => {
                                    const isSelected = selectedTags.includes(tag);
                                    const activeColorClass = PASTEL_COLORS[index % PASTEL_COLORS.length];
                                    return (
                                        <button
                                            key={tag}
                                            onClick={() => toggleTag(tag)}
                                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                                isSelected
                                                    ? activeColorClass
                                                    : "bg-white text-black border-2 hover:bg-slate-400"
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