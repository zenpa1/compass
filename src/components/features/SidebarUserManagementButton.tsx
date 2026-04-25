"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function SidebarUserManagementButton() {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/user-management");
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/session");
        if (res.ok) {
          const data = await res.json();
          setIsOwner(data.user_type === "OWNER");
        }
      } catch (err) {
        console.error("Failed to fetch session:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  if (loading || !isOwner) return null;

  return (
    <Link href="/user-management">
      <Button
        variant="ghost"
        size="icon"
        className={`h-12 w-full hover:bg-slate-800 hover:text-white ${
          isActive ? "text-amber-500" : "text-slate-300"
        }`}
        aria-label="User Management"
      >
        {/* Multiple people icon */}
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </Button>
    </Link>
  );
}