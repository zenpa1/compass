"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { LoadingOverlay } from "@/components/ui/loading-overlay";

type Permission = "Admin" | "Employee";
type FilterPermission = "All" | "Owner" | "Admin" | "Employee";
type SortBy = "name" | "email";

interface User {
  user_id: number;
  full_name: string | null;
  email: string;
  user_type: "OWNER" | "ADMIN" | "EMPLOYEE";
  inactive: boolean;
}

type FilterStatus = "all" | "active" | "inactive";

const toPermission = (user_type: "OWNER" | "ADMIN" | "EMPLOYEE"): string => {
  if (user_type === "OWNER") return "Owner";
  if (user_type === "ADMIN") return "Admin";
  return "Employee";
};

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<FilterPermission>("All");
  const [sortBy, setSortBy] = useState<SortBy>("name");
  const [pendingFilter, setPendingFilter] = useState<FilterPermission>("All");
  const [pendingSortBy, setPendingSortBy] = useState<SortBy>("name");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("active");
  const [pendingFilterStatus, setPendingFilterStatus] = useState<FilterStatus>("active");

  const [filterOpen, setFilterOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [editPermission, setEditPermission] = useState<Permission>("Employee");
  const [deleteUser, setDeleteUser] = useState<User | null>(null);
  const [restoreUser, setRestoreUser] = useState<User | null>(null);

  const [newUser, setNewUser] = useState({ name: "", email: "", permission: "Admin" as Permission });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(false);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (filter !== "All") params.set("permission", filter);
      params.set("sortBy", sortBy);
      if (filterStatus !== "all") params.set("status", filterStatus);
      const res = await fetch(`/api/user-management?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch users");
      setUsers(await res.json());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [search, filter, sortBy, filterStatus]);

  useEffect(() => {
    const timer = setTimeout(fetchUsers, 300);
    return () => clearTimeout(timer);
  }, [fetchUsers]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const menus = document.querySelectorAll("[data-menu]");
      let inside = false;
      menus.forEach((m) => { if (m.contains(target)) inside = true; });
      if (!inside) setOpenMenuId(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openFilterModal = () => {
    setPendingFilter(filter);
    setPendingSortBy(sortBy);
    setPendingFilterStatus(filterStatus);
    setFilterOpen(true);
  };

  const handleFilterConfirm = () => {
    setFilter(pendingFilter);
    setSortBy(pendingSortBy);
    setFilterStatus(pendingFilterStatus);
    setFilterOpen(false);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteUser) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/user-management/${deleteUser.user_id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = res.status !== 204 ? await res.json() : {};
        throw new Error(data.error || "Failed to deactivate user");
      }
      await fetchUsers();
      setDeleteUser(null);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditOpen = (user: User) => {
    setEditUser(user);
    setEditPermission(user.user_type === "ADMIN" ? "Admin" : "Employee");
    setOpenMenuId(null);
  };

  const handleEditSave = async () => {
    if (!editUser) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/user-management/${editUser.user_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ permission: editPermission }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update user");
      }
      await fetchUsers();
      setEditUser(null);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/user-management", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: newUser.name, email: newUser.email, permission: newUser.permission }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add user");
      }
      await fetchUsers();
      setNewUser({ name: "", email: "", permission: "Admin" });
      setAddModalOpen(false);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRestore = async (user: User) => {
    try {
      const res = await fetch(`/api/user-management/${user.user_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ restore: true }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to restore user");
      }
      await fetchUsers();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const isFilterActive = filter !== "All" || sortBy !== "name" || filterStatus !== "active";

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-800 tracking-tight whitespace-nowrap">
          User Management
        </h1>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Toolbar — stacks on mobile */}
      <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Search — full width on mobile */}
        <div className="relative w-full sm:w-72">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Enter name here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
            suppressHydrationWarning
            className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
          />
        </div>

        {/* Buttons — side by side, stretch on mobile */}
        <div className="flex items-center gap-3">
          <button
            suppressHydrationWarning
            onClick={openFilterModal}
            className={`flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition ${
              isFilterActive
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-slate-800 text-white hover:bg-slate-700"
            }`}
          >
            <svg className="size-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filter{isFilterActive ? " •" : ""}
          </button>

          <button
            suppressHydrationWarning
            onClick={() => { setNewUser({ name: "", email: "", permission: "Admin" }); setAddModalOpen(true); }}
            className="flex flex-1 sm:flex-none items-center justify-center px-4 py-2 text-sm font-medium bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
          >
            Add User
          </button>
        </div>
      </div>

      {/* Table — no overflow-hidden so dropdown can escape */}
      <div className="bg-white rounded-xl border border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 sm:px-6 py-4 text-sm font-semibold text-slate-700">
                Users
              </th>
              <th className="hidden sm:table-cell text-left px-4 sm:px-6 py-4 text-sm font-semibold text-slate-700">
                Email
              </th>
              <th className="text-left px-4 sm:px-6 py-4 text-sm font-semibold text-slate-700 w-28 sm:w-40">
                Permission
              </th>
              <th className="hidden sm:table-cell text-left px-6 py-4 text-sm font-semibold text-slate-700 w-20">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="text-center py-12 text-slate-400 text-sm">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={4} className="text-center py-12 text-red-400 text-sm">{error}</td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-12 text-slate-400 text-sm">No users found.</td>
              </tr>
            ) : (
              users.map((user) => {
                const isOwner = user.user_type === "OWNER";
                return (
                  <tr
                    key={user.user_id}
                    className={`border-b border-slate-100 last:border-0 transition-colors ${
                      user.inactive ? "bg-slate-50 opacity-60" : "hover:bg-slate-50"
                    }`}
                  >
                    {/* Name cell — shows email as subtitle on mobile */}
                    <td className="px-4 sm:px-6 py-4 text-sm text-slate-800 font-medium min-w-0">
                      <span className="block truncate">{user.full_name ?? "—"}</span>
                      <span
                        onClick={() => copyEmail(user.email)}
                        title="Copy email"
                        className="block sm:hidden text-xs text-slate-400 truncate font-normal mt-0.5 cursor-pointer hover:text-amber-500 transition-colors"
                      >
                        {user.email}
                      </span>
                    </td>
                    {/* Email column — hidden on mobile */}
                    <td className="hidden sm:table-cell px-4 sm:px-6 py-4 text-sm text-slate-500">
                      <span
                        onClick={() => copyEmail(user.email)}
                        title="Copy email"
                        className="cursor-pointer hover:text-amber-500 transition-colors"
                      >
                        {user.email}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        {/* Badge */}
                        {user.inactive ? (
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-400">
                            Inactive
                          </span>
                        ) : (
                          <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isOwner
                              ? "bg-slate-100 text-slate-600"
                              : user.user_type === "ADMIN"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-50 text-slate-500"
                          }`}>
                            {toPermission(user.user_type)}
                          </span>
                        )}
                        {/* Action button — only shown inline on mobile */}
                        <div className="sm:hidden">
                          {isOwner ? (
                            <button disabled title="Owner accounts cannot be modified"
                              className="p-1 rounded text-slate-300 cursor-not-allowed">
                              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                                <circle cx="12" cy="5" r="1.5" />
                                <circle cx="12" cy="12" r="1.5" />
                                <circle cx="12" cy="19" r="1.5" />
                              </svg>
                            </button>
                          ) : (
                            <ActionMenu
                              user={user}
                              open={openMenuId === user.user_id}
                              onToggle={() => setOpenMenuId(openMenuId === user.user_id ? null : user.user_id)}
                              onEdit={() => handleEditOpen(user)}
                              onDelete={() => { setDeleteUser(user); setOpenMenuId(null); }}
                              onRestore={() => { setRestoreUser(user); setOpenMenuId(null); }}
                            />
                          )}
                        </div>
                      </div>
                    </td>
                    {/* Action column — desktop only */}
                    <td className="hidden sm:table-cell px-6 py-4">
                      {isOwner ? (
                        <button disabled title="Owner accounts cannot be modified"
                          className="p-1 rounded text-slate-300 cursor-not-allowed">
                          <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                            <circle cx="12" cy="5" r="1.5" />
                            <circle cx="12" cy="12" r="1.5" />
                            <circle cx="12" cy="19" r="1.5" />
                          </svg>
                        </button>
                      ) : (
                        <ActionMenu
                          user={user}
                          open={openMenuId === user.user_id}
                          onToggle={() => setOpenMenuId(openMenuId === user.user_id ? null : user.user_id)}
                          onEdit={() => handleEditOpen(user)}
                          onDelete={() => { setDeleteUser(user); setOpenMenuId(null); }}
                          onRestore={() => { setRestoreUser(user); setOpenMenuId(null); }}
                        />
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Filter Modal */}
      {filterOpen && (
        <Modal title="Filter" onClose={() => setFilterOpen(false)}>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-3">Permission</p>
              <div className="flex flex-col gap-2">
                {(["All", "Owner", "Admin", "Employee"] as FilterPermission[]).map((option) => {
                  const isSelected = pendingFilter === option;
                  return (
                    <button key={option} onClick={() => setPendingFilter(option)}
                      className="flex items-center gap-3 px-1 py-1 rounded-lg text-left transition hover:bg-slate-50">
                      <span className={`size-5 rounded flex-shrink-0 ${isSelected ? "bg-amber-500" : "bg-slate-200"}`} />
                      <span className={`text-sm transition ${isSelected ? "text-slate-800 font-medium" : "text-slate-500"}`}>
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="h-px bg-slate-100" />
            <div>
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-3">Status</p>
              <div className="flex flex-col gap-2">
                {([
                  { value: "all", label: "All users" },
                  { value: "active", label: "Active only" },
                  { value: "inactive", label: "Inactive only" },
                ] as { value: FilterStatus; label: string }[]).map((option) => (
                  <button key={option.value} onClick={() => setPendingFilterStatus(option.value)}
                    className="flex items-center gap-3 px-1 py-1 rounded-lg text-left transition hover:bg-slate-50">
                    <span className={`flex-shrink-0 size-5 rounded-full border-2 flex items-center justify-center transition ${
                      pendingFilterStatus === option.value ? "border-amber-500 bg-amber-500" : "border-slate-300"
                    }`}>
                      {pendingFilterStatus === option.value && <span className="size-2 rounded-full bg-white" />}
                    </span>
                    <span className={`text-sm transition ${
                      pendingFilterStatus === option.value ? "text-slate-800 font-medium" : "text-slate-500"
                    }`}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-1">
              <button onClick={() => setFilterOpen(false)}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                Cancel
              </button>
              <button onClick={handleFilterConfirm}
                className="px-5 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add User Modal */}
      {addModalOpen && (
        <Modal title="Add user" onClose={() => setAddModalOpen(false)}>
          <div className="flex flex-col gap-5">
            <div className="h-px bg-slate-200" />
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fullname</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser((p) => ({ ...p, name: e.target.value }))}
                  placeholder="e.g Juan Dela Cruz"
                  autoComplete="off"
                  suppressHydrationWarning
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser((p) => ({ ...p, email: e.target.value }))}
                  placeholder="e.g juandelacruz@email.com"
                  autoComplete="off"
                  suppressHydrationWarning
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Permission</label>
                <div className="grid grid-cols-2 gap-3">
                  {(["Admin", "Employee"] as Permission[]).map((role) => (
                    <button
                      key={role}
                      onClick={() => setNewUser((p) => ({ ...p, permission: role }))}
                      className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-lg border-2 text-left transition ${
                        newUser.permission === role ? "border-slate-700 bg-white" : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <span className={`flex-shrink-0 size-5 rounded-full border-2 flex items-center justify-center transition ${
                        newUser.permission === role ? "border-amber-500 bg-amber-500" : "border-slate-300"
                      }`}>
                        {newUser.permission === role && <span className="size-2 rounded-full bg-white" />}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-800">{role}</span>
                        <span className="block text-xs text-slate-400">
                          {role === "Admin" ? "Full access" : "Standard access"}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-1">
              <button onClick={() => setAddModalOpen(false)} disabled={submitting}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50">
                Cancel
              </button>
              <button onClick={handleAddUser} disabled={submitting || !newUser.name || !newUser.email}
                className="px-5 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition disabled:opacity-50">
                {submitting ? "Adding..." : "Confirm"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      {deleteUser && (
        <Modal title="Delete User" onClose={() => setDeleteUser(null)}>
          <div className="flex flex-col gap-5">
            <div className="h-px bg-slate-200" />
            <div className="flex flex-col items-center gap-3 py-2">
              <div className="size-14 rounded-full bg-red-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="size-7 text-red-500" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-800">
                  Deactivate <span className="font-semibold">{deleteUser.full_name ?? deleteUser.email}</span>?
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  The user will lose access immediately. You can restore them later.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteUser(null)} disabled={submitting}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50">
                Cancel
              </button>
              <button onClick={handleDeleteConfirm} disabled={submitting}
                className="px-5 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50">
                {submitting ? "Removing..." : "Remove User"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Edit Permission Modal */}
      {editUser && (
        <Modal title="Edit Permission" onClose={() => setEditUser(null)}>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-sm text-slate-600">{editUser.full_name ?? editUser.email}</p>
              <div className="mt-3 h-px bg-slate-200" />
            </div>
            <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Select Role</p>
            <div className="flex flex-col gap-3">
              {(["Admin", "Employee"] as Permission[]).map((role) => (
                <button key={role} onClick={() => setEditPermission(role)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg border-2 text-left transition ${
                    editPermission === role ? "border-slate-800 bg-white" : "border-slate-200 bg-white hover:border-slate-300"
                  }`}>
                  <span className={`flex-shrink-0 size-5 rounded-full border-2 flex items-center justify-center transition ${
                    editPermission === role ? "border-amber-500 bg-amber-500" : "border-slate-300"
                  }`}>
                    {editPermission === role && <span className="size-2 rounded-full bg-white" />}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-800">{role}</span>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      {role === "Admin" ? "Full access to all features" : "Standard access to assigned work"}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="flex justify-end gap-3 pt-1">
              <button onClick={() => setEditUser(null)} disabled={submitting}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50">
                Cancel
              </button>
              <button onClick={handleEditSave} disabled={submitting}
                className="px-5 py-2 text-sm font-medium bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition disabled:opacity-50">
                {submitting ? "Saving..." : "Confirm"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Restore User Modal */}
      {restoreUser && (
        <Modal title="Restore User" onClose={() => setRestoreUser(null)}>
          <div className="flex flex-col gap-5">
            <div className="h-px bg-slate-200" />
            <div className="flex flex-col items-center gap-3 py-2">
              <div className="size-14 rounded-full bg-green-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="size-7 text-green-500" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-800">
                  Restore <span className="font-semibold">{restoreUser.full_name ?? restoreUser.email}</span>?
                </p>
                <p className="text-xs text-slate-400 mt-1">The user will regain access immediately.</p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setRestoreUser(null)} disabled={submitting}
                className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-50">
                Cancel
              </button>
              <button
                onClick={async () => { await handleRestore(restoreUser); setRestoreUser(null); }}
                disabled={submitting}
                className="px-5 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50">
                {submitting ? "Restoring..." : "Restore User"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Toast */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 px-4 py-2.5 bg-slate-800 text-white text-sm rounded-lg shadow-lg transition-all duration-300 ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}>
        <svg viewBox="0 0 24 24" className="size-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Copied to clipboard
      </div>

      <LoadingOverlay isLoading={loading} message="Fetching users..." />
    </div>
  );
}
function ActionMenu({
  user,
  open,
  onToggle,
  onEdit,
  onDelete,
  onRestore,
}: {
  user: User;
  open: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onRestore: () => void;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 4,
        right: window.innerWidth - rect.right,
      });
    }
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        data-menu
        onClick={onToggle}
        className="p-1 rounded hover:bg-slate-100 transition text-slate-500 hover:text-slate-800"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div
          data-menu
          style={{ top: coords.top, right: coords.right }}
          className="fixed w-44 bg-white border border-slate-200 rounded-lg shadow-lg z-[9999] overflow-hidden"
        >
          {user.inactive ? (
            <button
              onClick={onRestore}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-green-600 hover:bg-green-50 transition"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              Restore User
            </button>
          ) : (
            <>
              <button
                onClick={onEdit}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
              >
                <svg viewBox="0 0 24 24" className="size-4 text-slate-400" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit Permission
              </button>
              <button
                onClick={onDelete}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
                Deactivate User
              </button>
            </>
          )}
        </div>,
        document.body
      )}

    </>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40">
      <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl w-full sm:max-w-md overflow-hidden">
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-800">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-5 sm:px-6 py-5 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}