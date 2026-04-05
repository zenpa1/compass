"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SimpleDialogProps } from "@/app/(dashboard)/projects/projectDataOps";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

const ROLES = ["PHOTO", "VIDEO", "EDITOR", "ASSISTANT", "ANY"];

export default function RoleSetupPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);
  const [primaryRole, setPrimaryRole] = useState("");
  const [secondaryRole, setSecondaryRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [invalidRoleWindow, setInvalidRoleWindow] = useState(false);
  const [missingRoleWindow, setMissingRoleWindow] = useState(false);

  //load user data saved from login
  useEffect(() => {
    const storedUser = localStorage.getItem("temp_user");
    if (!storedUser) {
      router.push("/login"); //kick out if not logged in
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if(primaryRole == "") {
      setMissingRoleWindow(true);
    }
    else {
      if(primaryRole == secondaryRole) {
        setInvalidRoleWindow(true);
      }
      else {
        setIsSubmitting(true);

        try {
          const response = await fetch("/api/auth/setup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: user.id,
              primaryRole,
              secondaryRole: secondaryRole === "NONE" ? null : secondaryRole,
            }),
          });

          if (response.ok) {
            //clear temp data then forward to dashboasrd
            localStorage.removeItem("temp_user");
            router.push("/work");
          } else {
            alert("Failed to save roles. Please try again.");
          }
        } catch (error) {
          console.error(error);
          alert("An error occurred.");
        } finally {
          setIsSubmitting(false);
        }
      }
    }
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-3 sm:p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-lg sm:p-8">
        {/*header*/}
        <div className="mb-5 text-center sm:mb-6">
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Welcome!
          </h1>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Let's finish setting up your profile. What do you do at The North
            Studio?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/*primary role selection*/}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Role <span className="text-red-500">*</span>
            </label>
            <select
              value={primaryRole}
              onChange={(e) => setPrimaryRole(e.target.value)}
              className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="" disabled>
                None
              </option>

              {ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/*secondary role selection*/}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Secondary Role (Optional)
            </label>
            <select
              value={secondaryRole}
              onChange={(e) => setSecondaryRole(e.target.value)}
              className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="NONE">None</option>
              {ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/*submit Button*/}
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-10 w-full rounded-md bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isSubmitting ? "Saving..." : "Complete Setup"}
          </button>
        </form>
      </div>

      <InvalidRolesWindow
        onClose={() => setInvalidRoleWindow(false)}
        open={invalidRoleWindow}
      />

      <MissingRoleWindow
        onClose={() => setMissingRoleWindow(false)}
        open={missingRoleWindow}
      />
    </div>
  );
}

export function InvalidRolesWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Invalid Roles</DialogTitle>
      <DialogContent>
        <p>You cannot have the same primary and invalid role.</p>
      </DialogContent>
    </Dialog>
  );
}

export function MissingRoleWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>No Primary Role</DialogTitle>
      <DialogContent>
        <p>You cannot finish setup without choosing a primary role.</p>
      </DialogContent>
    </Dialog>
  );
}