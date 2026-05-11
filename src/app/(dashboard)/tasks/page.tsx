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
  const [openMenuKey, setOpenMenuKey] = useState<string | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [displayedTasks, setDisplayedTasks] = useState<Task[]>([]);

  useEffect(() => {
    setDisplayedTasks(tasks);
  }, [tasks]);

  const handleDeleteConfirm = async () => {
    if (!taskToDelete) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/tasks/${taskToDelete}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete task");
      setTaskToDelete(null);
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Something went wrong deleting the task.");
    } finally {
      setIsDeleting(false);
    }
  };

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      setTasks(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const toggleTask = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const newValue = !task.isCompleted;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, isCompleted: newValue } : t)));
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_completed: newValue }),
      });
      if (!res.ok) throw new Error("Failed to update task");
    } catch (error) {
      console.error(error);
      setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, isCompleted: task.isCompleted } : t)));
    }
  };

  const openTaskModal = (task: Task) => setEditingTask(task);

  const saveTaskFromModal = (updatedTask: Task) => {
    setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  // Returns { label, color } or null if overdue/no date
  const daysLeftBadge = (deadLine: string): { label: string; className: string } | null => {
    const cleaned = deadLine.replace(/\s+at\s+[\d:]+\s*(AM|PM)/i, "").trim();
    const dueDate = new Date(cleaned);
    const today = new Date();

    if (isNaN(dueDate.getTime())) return null;

    dueDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) return null;

    const label = `${diffDays} day${diffDays > 1 ? "s" : ""} left`;

    if (diffDays >= 5) {
      return { label, className: "bg-green-500 text-white" };
    } else if (diffDays >= 2) {
      return { label, className: "bg-yellow-400 text-yellow-900" };
    } else {
      return { label, className: "bg-red-500 text-white" };
    }
  };

  const getMenuKey = (layout: "table" | "card", taskId: number) => `${layout}-${taskId}`;

  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4 sm:p-6">
      {/* HEADER */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-normal text-slate-900 tracking-tight">Personal Tasks</h2>
        <div className="h-px flex-1 bg-slate-300 mt-1"></div>
      </div>

      {/* TASKS CONTAINER */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
        <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between md:hidden">
          <h3 className="text-sm font-medium text-slate-700">Tasks</h3>
          <Filter
            className="size-4 text-slate-500 cursor-pointer hover:text-slate-800"
            onClick={() => setIsFilterOpen(true)}
          />
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[80px_1fr_240px_40px] items-center px-4 py-3 border-b border-slate-200 text-sm font-medium text-slate-700">
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

          <div className="flex flex-col max-h-[500px] overflow-y-auto">
            {loading ? (
              <div className="p-8 text-center text-slate-500">Loading tasks...</div>
            ) : displayedTasks.length === 0 ? (
              <div className="p-8 text-center text-slate-500">No personal tasks found.</div>
            ) : (
              displayedTasks.map((task) => {
                const menuKey = getMenuKey("table", task.id);
                const badge = daysLeftBadge(task.dueDate);
                return (
                  <div
                    key={task.id}
                    className="grid grid-cols-[80px_1fr_240px_40px] items-center px-4 py-3 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors group cursor-pointer"
                    onClick={() => openTaskModal(task)}
                  >
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

                    <div className={`text-sm ${task.isCompleted ? "text-slate-400 line-through" : "text-slate-800"}`}>
                      {task.name}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span>{task.dueDate}</span>
                      {badge && (
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${badge.className}`}>
                          {badge.label}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                      <button
                        id={`trigger-${menuKey}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenuKey(openMenuKey === menuKey ? null : menuKey);
                        }}
                        className={`p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors ${openMenuKey === menuKey ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                      >
                        <MoreVertical className="size-4" />
                      </button>
                      {openMenuKey === menuKey && (
                        <TaskActionDropdown
                          anchorId={`trigger-${menuKey}`}
                          onClose={() => setOpenMenuKey(null)}
                          onEdit={() => { setTaskToEdit(task); setOpenMenuKey(null); }}
                          onDelete={() => { setTaskToDelete(task.id); setOpenMenuKey(null); }}
                        />
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          <div className="max-h-[500px] overflow-y-auto p-3 space-y-3">
            {loading ? (
              <div className="p-5 text-center text-slate-500">Loading tasks...</div>
            ) : displayedTasks.length === 0 ? (
              <div className="p-5 text-center text-slate-500">No personal tasks found.</div>
            ) : (
              displayedTasks.map((task) => {
                const menuKey = getMenuKey("card", task.id);
                const badge = daysLeftBadge(task.dueDate);
                return (
                  <article
                    key={task.id}
                    className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
                    onClick={() => openTaskModal(task)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className={`text-sm font-medium break-words ${task.isCompleted ? "text-slate-400 line-through" : "text-slate-900"}`}>
                          {task.name}
                        </p>
                        <div className="mt-1 flex items-center gap-2 flex-wrap">
                          <span className="text-xs text-slate-600">Due {task.dueDate}</span>
                          {badge && (
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${badge.className}`}>
                              {badge.label}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                        <label className="flex items-center justify-center p-1 rounded-md transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => toggleTask(task.id)}
                            className="size-5 rounded border-slate-300 text-slate-800 focus:ring-slate-800 cursor-pointer"
                          />
                        </label>
                        <button
                          id={`trigger-${menuKey}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuKey(openMenuKey === menuKey ? null : menuKey);
                          }}
                          className="p-1 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <MoreVertical className="size-4" />
                        </button>
                        {openMenuKey === menuKey && (
                          <TaskActionDropdown
                            anchorId={`trigger-${menuKey}`}
                            onClose={() => setOpenMenuKey(null)}
                            onEdit={() => { setTaskToEdit(task); setOpenMenuKey(null); }}
                            onDelete={() => { setTaskToDelete(task.id); setOpenMenuKey(null); }}
                          />
                        )}
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>

        <button
          className="w-full bg-[#2a3f54] hover:bg-[#1e2d3d] text-white py-3.5 flex items-center justify-center gap-2 text-sm font-medium transition-colors border-t border-[#1e2d3d] shadow-md z-10"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus className="size-5" />
          Add Task
        </button>
      </div>

      <TaskModal task={editingTask} onClose={() => setEditingTask(null)} onSave={saveTaskFromModal} />

      <EditTaskModal
        task={taskToEdit}
        onClose={() => setTaskToEdit(null)}
        onSave={(updatedTask) => {
          setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
        }}
      />

      <AddTaskModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={() => { setIsAddModalOpen(false); fetchTasks(); }}
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