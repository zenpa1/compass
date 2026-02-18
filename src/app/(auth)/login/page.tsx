'use client';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential;

    //clear previous errors
    setErrorMessage('');

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.redirect === "/setup") {
             //store temp user datafor the setup page
             localStorage.setItem('temp_user', JSON.stringify(data.user));
        }

        router.push(data.redirect); 

      } else {
        //ERROR HANDLING
        if (data.errorType === "PRIVATE_APP") {
          setErrorMessage("This is a private app. Your email is not authorized.");
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
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            The North Studio
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Internal Application Login
          </p>
        </div>

        {/*ERROR MESSAGE DISPLAY*/}
        {errorMessage && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setErrorMessage("Google Sign-In Failed")}
            useOneTap
          />
        </div>
      </div>
    </div>
  );
}