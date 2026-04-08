"use client";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  const handleGoogleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential;

    //clear previous errors
    setErrorMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.redirect === "/setup") {
          //store temp user data for the setup page
          localStorage.setItem("temp_user", JSON.stringify(data.user));
        }

        router.push(data.redirect);
      } else {
        //ERROR HANDLING
        if (data.errorType === "PRIVATE_APP") {
          setErrorMessage(
            "This is a private app. Your email is not authorized.",
          );
        } else {
          setErrorMessage(data.message || "Login failed");
        }
      }
    } catch (error) {
      console.error("Login error: ", error);
      setErrorMessage("Network error. Please try again.");
    }
  };

  //67 tung tung tung sahur
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0c1b2e] px-3 py-6 sm:px-4">
      {/* 1. Reduced space-y-6 to space-y-4 to tighten the gap between elements */}
      <div className="w-full max-w-md space-y-4 rounded-lg border border-[#d4af37] bg-[#152842] p-4 shadow-lg sm:p-6">
        <div className="text-center">
          {/* JUST THE IMAGE START */}
          {/* 2. Removed 'mb-6' from this div so it doesn't force extra space below the image */}
          <div className="flex justify-center">
            <img
              src="/tns-logo-white-gold-transparent.png"
              alt="The North Studio Logo"
              width={460}
              height={160}
              className="h-auto w-full max-w-[460px] object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* JUST THE IMAGE END */}
        </div>

        {/*ERROR MESSAGE DISPLAY*/}
        {errorMessage && (
          <div className="mt-4 border-l-4 border-red-500 bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          {googleClientId ? (
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() =>
                setErrorMessage(
                  "Google Sign-In is not configured for this domain. Add this origin in Google Cloud Console (OAuth 2.0 Client ID).",
                )
              }
              size="large"
            />
          ) : (
            <p className="text-sm text-red-400">
              Login is unavailable: NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
