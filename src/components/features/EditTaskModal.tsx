"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { type Task } from "@/app/(dashboard)/tasks/page";

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

export function EditTaskModal({ task, onClose, onSave }: EditTaskModalProps) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [month, setMonth] = useState("January");
    const [day, setDay] = useState("1");
    const [year, setYear] = useState(new Date().getFullYear().toString());
    const [allTags, setAllTags] = useState<Tag[]>([]);
    const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    // Fetch all available tags on mount
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
        if (!task) return;
        setIsSaving(true);
        try {
            const monthIndex = MONTHS.indexOf(month) + 1;
            const isoDate = `${year}-${String(monthIndex).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

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
        } finally {
            setIsSaving(false);
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-lg rounded-xl bg-white shadow-2xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* HEADER */}
                <div className="px-6 pt-6 pb-4">
                    <h3 className="text-lg font-semibold text-slate-800">Edit Task</h3>
                </div>

                <div className="px-6 flex flex-col gap-5 pb-6">
                    {/* TASK NAME */}
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Task name"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm outline-none focus:ring-2 focus:ring-[#2a3f54]/30"
                    />

                    {/* DEADLINE */}
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Deadline</label>
                        <div className="flex gap-2">
                            <select
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm outline-none focus:ring-2 focus:ring-[#2a3f54]/30"
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
                                className="w-16 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm outline-none focus:ring-2 focus:ring-[#2a3f54]/30 text-center"
                            />
                            <input
                                type="number"
                                value={year}
                                min={2024}
                                max={2100}
                                onChange={(e) => setYear(e.target.value)}
                                className="w-24 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm outline-none focus:ring-2 focus:ring-[#2a3f54]/30 text-center"
                            />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Description</label>
                        <textarea
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Enter Description"
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm outline-none resize-none focus:ring-2 focus:ring-[#2a3f54]/30"
                        />
                    </div>

                    {/* TAGS — rendered with each tag's real color_hex */}
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Tags</label>
                        <div className="flex flex-wrap gap-2">
                            {allTags.map((tag) => {
                                const active = selectedTagIds.includes(tag.tag_id);
                                return (
                                    <button
                                        key={tag.tag_id}
                                        onClick={() => toggleTag(tag.tag_id)}
                                        style={active ? { backgroundColor: tag.color_hex, color: "#fff" } : {}}
                                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${active ? "" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                            }`}
                                    >
                                        {tag.tag_name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={isSaving || !title.trim()}
                        className="px-6 py-2 rounded-lg text-sm font-medium bg-[#2a3f54] hover:bg-[#1e2d3d] text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSaving ? "Saving..." : "Confirm"}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}