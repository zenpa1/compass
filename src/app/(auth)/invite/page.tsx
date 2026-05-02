"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function InvitePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) return;

    fetch(`/api/invite?token=${token}`)
      .then(() => router.push("/login?activated=true"))
      .catch(() => router.push("/login?error=invalid_invite"));
  }, []);

  return <p>Activating your account...</p>;
}