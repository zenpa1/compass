"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Filter, MoreVertical, Plus, Trash2 } from "lucide-react";
import { TaskModal } from "@/components/features/TaskModal";
import { AddTaskModal } from "@/components/features/AddTaskModal";
import { DeleteTaskModal } from "@/components/features/DeleteTaskModal";
import { TaskActionDropdown } from "@/components/features/TaskActionDropdown";
import { EditTaskModal } from "@/components/features/EditTaskModal";
import { FilterModal } from "@/components/features/FilterModal";

export type Task = {
    id: number;
    name: string;
    dueDate: string;
    isCompleted: boolean;
    inProgress: boolean;
    dueDateBadge: string;
    tags: string[];
    description: string;
};

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [displayedTasks, setDisplayedTasks] = useState<Task[]>([]);

    // Keep displayedTasks in sync when tasks load
    useEffect(() => {
        setDisplayedTasks(tasks);
    }, [tasks]);


    //delete function
    const handleDeleteConfirm = async () => {
        if (!taskToDelete) return;

        setIsDeleting(true);
        try {
            const res = await fetch(`/api/tasks/${taskToDelete}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error("Failed to delete task");

            // Close the modal and refresh the list!
            setTaskToDelete(null);
            fetchTasks();
        } catch (error) {
            console.error(error);
            alert("Something went wrong deleting the task.");
        } finally {
            setIsDeleting(false);
        }
    };

    // 3. The fully functional fetchTasks routine!
    const fetchTasks = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/tasks');
            if (!res.ok) throw new Error("Failed to fetch tasks");

            const data = await res.json();

            // The backend API is already doing all the hard work of formatting the dates 
            // and extracting the tags, so we can just set the data directly!
            setTasks(data);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Handle checkbox toggle (Optimistic update)
    const toggleTask = async (id: number) => {
        const task = tasks.find((t) => t.id === id);
        if (!task) return;

        const newValue = !task.isCompleted;

        // Optimistic update
        setTasks((prev) =>
            prev.map((t) => t.id === id ? { ...t, isCompleted: newValue } : t)
        );

        try {
            const res = await fetch(`/api/tasks/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ is_completed: newValue }),
            });
            if (!res.ok) throw new Error("Failed to update task");
        } catch (error) {
            console.error(error);
            // Roll back on failure
            setTasks((prev) =>
                prev.map((t) => t.id === id ? { ...t, isCompleted: task.isCompleted } : t)
            );
        }
    };

    // Functions for opening and saving tasks from the modal
    const openTaskModal = (task: Task) => {
        setEditingTask(task);
    };

    const saveTaskFromModal = (updatedTask: Task) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        );
    };

    return (
        <div className="space-y-6 max-w-5xl mx-auto p-4 sm:p-6">

            {/* HEADER */}
            <div className="flex items-center gap-4">
                <h2 className="text-2xl font-normal text-slate-900 tracking-tight">
                    Personal Tasks
                </h2>
                <div className="h-px flex-1 bg-slate-300 mt-1"></div>
            </div>

            {/* TABLE CONTAINER */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">

                {/* Table Header */}
                <div className="grid grid-cols-[80px_1fr_200px_40px] items-center px-4 py-3 border-b border-slate-200 text-sm font-medium text-slate-700">
                    <div className="text-center">Status</div>
                    <div className="flex items-center gap-2">
                        Task name
                        <Filter
                            className="size-4 text-slate-500 cursor-pointer hover:text-slate-800"
                            onClick={() => setIsFilterOpen(true)}
                        />
                    </div>
                    <div>Due date</div>
                    <div></div>
                </div>

                {/* Table Body (Scrollable!) */}
                <div className="flex flex-col max-h-[500px] overflow-y-auto">
                    {loading ? (
                        <div className="p-8 text-center text-slate-500">Loading tasks...</div>
                    ) : displayedTasks.length === 0 ? (
                        <div className="p-8 text-center text-slate-500">No personal tasks found.</div>
                    ) : (
                        displayedTasks.map((task) => (
                            <div
                                key={task.id}
                                className="grid grid-cols-[80px_1fr_200px_40px] items-center px-4 py-3 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors group cursor-pointer"
                                onClick={() => openTaskModal(task)}
                            >
                                {/* Status Checkbox */}
                                <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                                    <label className="flex items-center justify-center p-2 rounded-md transition-colors cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={task.isCompleted}
                                            onChange={() => toggleTask(task.id)}
                                            className="size-6 rounded border-slate-300 text-slate-800 focus:ring-slate-800 cursor-pointer"
                                        />
                                    </label>
                                </div>

                                {/* Task Name */}
                                <div className={`text-sm ${task.isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                                    {task.name}
                                </div>

                                {/* Due Date */}
                                <div className="text-sm text-slate-600">
                                    {task.dueDate}
                                </div>

                                {/* Actions Menu */}
                                <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        id={`trigger-${task.id}`} // Add an ID so we can find its position
                                        onClick={(e) => {
                                            // Prevent the row click from firing
                                            e.stopPropagation();
                                            setOpenMenuId(openMenuId === task.id ? null : task.id);
                                        }}
                                        className={`p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors ${openMenuId === task.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                    >
                                        <MoreVertical className="size-4" />
                                    </button>

                                    {/* THE FIX: Move the menu logic here or use a Portal */}
                                    {openMenuId === task.id && (
                                        <TaskActionDropdown
                                            anchorId={`trigger-${task.id}`}
                                            onClose={() => setOpenMenuId(null)}
                                            onEdit={() => {
                                                setTaskToEdit(task);  // was setEditingTask
                                                setOpenMenuId(null);
                                            }}
                                            onDelete={() => {
                                                setTaskToDelete(task.id);
                                                setOpenMenuId(null);
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* ADD TASK BUTTON */}
                <button
                    className="w-full bg-[#2a3f54] hover:bg-[#1e2d3d] text-white py-3.5 flex items-center justify-center gap-2 text-sm font-medium transition-colors border-t border-[#1e2d3d] shadow-md z-10"
                    onClick={() => setIsAddModalOpen(true)}
                >
                    <Plus className="size-5" />
                    Add Task
                </button>

            </div>

            <TaskModal
                task={editingTask}
                onClose={() => setEditingTask(null)}
                onSave={saveTaskFromModal}
            />

            <EditTaskModal
                task={taskToEdit}
                onClose={() => setTaskToEdit(null)}
                onSave={(updatedTask) => {
                    setTasks((prev) =>
                        prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
                    );
                }}
            />

            <AddTaskModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSuccess={() => {
                    setIsAddModalOpen(false); // Close modal
                    fetchTasks(); // Refresh the list from the database!
                }}
            />

            <FilterModal
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onConfirm={(filtered) => setDisplayedTasks(filtered)}
                allTasks={tasks}
            />

            <DeleteTaskModal
                isOpen={taskToDelete !== null}
                onClose={() => setTaskToDelete(null)}
                onConfirm={handleDeleteConfirm}
                isDeleting={isDeleting}
            />

        </div>
    );
}