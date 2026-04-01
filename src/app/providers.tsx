"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

export function Providers({ children }: { children: React.ReactNode }) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  // If missing, keep app renderable and let auth UI show a clear message.
  if (!clientId) {
    return <>{children}</>;
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
  );
}
