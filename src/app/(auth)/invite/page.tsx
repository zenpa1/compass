"use client";
import { Suspense } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function InviteContent() {
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

export default function InvitePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <InviteContent />
    </Suspense>
  );
}