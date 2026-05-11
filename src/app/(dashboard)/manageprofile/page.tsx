"use client";

import { useState, useEffect } from "react";
import { SimpleDialogProps } from "@/app/(dashboard)/projects/projectDataOps";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

const ROLES1 = ["PHOTO", "VIDEO", "EDITOR", "ASSISTANT"];
const ROLES2 = ["PHOTO", "VIDEO", "EDITOR", "ASSISTANT", "ANY"];

export default function ManageProfilePage() {
  const [userId, setUserId] = useState<number | null>(null); 
  
  // These track the form inputs
  const [primaryRole, setPrimaryRole] = useState("");
  const [secondaryRole, setSecondaryRole] = useState("");
  
  // These track what is currently saved in the database to display at the top
  const [savedPrimaryRole, setSavedPrimaryRole] = useState<string | null>(null);
  const [savedSecondaryRole, setSavedSecondaryRole] = useState<string | null>(null);
  
  // NEW: State to track if the user has accepted work
  const [hasAcceptedWork, setHasAcceptedWork] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Modal states
  const [invalidRoleWindow, setInvalidRoleWindow] = useState(false);
  const [missingRoleWindow, setMissingRoleWindow] = useState(false);
  const [successWindow, setSuccessWindow] = useState(false); 
  const [activeWorkWindow, setActiveWorkWindow] = useState(false); // NEW: Active work modal state

  // 1. Fetch the session ID, then fetch the user's data
  useEffect(() => {
    const fetchSessionAndData = async () => {
      try {
        const sessionRes = await fetch('/api/auth/me');
        if (!sessionRes.ok) return; 
        
        const sessionData = await sessionRes.json();
        const currentUserId = sessionData.userId;
        setUserId(currentUserId);

        const profileRes = await fetch(`/api/manageprofile?userId=${currentUserId}`);
        if (profileRes.ok) {
           const profileData = await profileRes.json();
           
           // Set the form inputs
           setPrimaryRole(profileData.primaryRole || "");
           setSecondaryRole(profileData.secondaryRole || "NONE");

           // Set the display at the top
           setSavedPrimaryRole(profileData.primaryRole || "Not Set");
           setSavedSecondaryRole(profileData.secondaryRole || "None");
           
           // Check if they have active work assignments
           setHasAcceptedWork(profileData.hasAcceptedWork);
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    fetchSessionAndData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return; 

    // NEW: Block the save and show the new modal if they have accepted work!
    if (hasAcceptedWork) {
      setActiveWorkWindow(true);
      return;
    }

    if (primaryRole === "") {
      setMissingRoleWindow(true);
    } else if (primaryRole === secondaryRole) {
      setInvalidRoleWindow(true);
    } else {
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/manageprofile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: userId, 
            primaryRole,
            secondaryRole: secondaryRole === "NONE" ? null : secondaryRole,
          }),
        });

        if (response.ok) {
          setSuccessWindow(true);
          
          setSavedPrimaryRole(primaryRole);
          setSavedSecondaryRole(secondaryRole === "NONE" ? "None" : secondaryRole);
        } else if (response.status === 403) {
          // Catch the backend security check just in case
          setActiveWorkWindow(true);
        } else {
          alert("Failed to update roles. Please try again.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred.");
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  if (!userId) {
     return <div className="p-8 text-gray-500">Loading profile...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manage Profile</h1>
        <p className="mt-1 text-sm text-gray-500">
          View and update your roles and responsibilities at The North Studio.
        </p>
      </div>

      {/* Current Roles Display Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Current Primary Role</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">
            {savedPrimaryRole || "Loading..."}
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Current Secondary Role</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">
            {savedSecondaryRole || "Loading..."}
          </p>
        </div>
      </div>

      {/* Update Form Section */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 bg-gray-50/50">
          <h2 className="text-lg font-medium text-gray-900">Update Roles</h2>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Primary role selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Primary Role <span className="text-red-500">*</span>
                </label>
                <select
                  value={primaryRole}
                  onChange={(e) => setPrimaryRole(e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option value="" disabled>Select a role</option>
                  {ROLES1.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              {/* Secondary role selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Secondary Role <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <select
                  value={secondaryRole}
                  onChange={(e) => setSecondaryRole(e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option value="NONE">None</option>
                  {ROLES2.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-10 w-full rounded-md bg-[#2a3f54] px-4 text-sm font-semibold text-white transition hover:bg-[#1e2d3d] focus:outline-none focus:ring-2 focus:ring-[#2a3f54] focus:ring-offset-2 disabled:opacity-70"
              >
                {isSubmitting ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modals */}
      <InvalidRolesWindow
        onClose={() => setInvalidRoleWindow(false)}
        open={invalidRoleWindow}
      />

      <MissingRoleWindow
        onClose={() => setMissingRoleWindow(false)}
        open={missingRoleWindow}
      />

      <SuccessWindow
        onClose={() => setSuccessWindow(false)}
        open={successWindow}
      />

      {/* NEW: Active Work Modal */}
      <ActiveWorkWindow
        onClose={() => setActiveWorkWindow(false)}
        open={activeWorkWindow}
      />
    </div>
  );
}

// ============================================================================
// DIALOG COMPONENTS
// ============================================================================

export function InvalidRolesWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle className="font-semibold text-black">Invalid Roles</DialogTitle>
      <DialogContent>
        <p className="text-gray-700">You cannot have the same primary and secondary role.</p>
      </DialogContent>
    </Dialog>
  );
}

export function MissingRoleWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle className="font-semibold text-black">No Primary Role</DialogTitle>
      <DialogContent>
        <p className="text-gray-700">You must select a primary role to save your profile.</p>
      </DialogContent>
    </Dialog>
  );
}

export function SuccessWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle className="text-black font-semibold">Success</DialogTitle>
      <DialogContent>
        <p className="text-gray-700">Your profile roles have been updated successfully!</p>
      </DialogContent>
    </Dialog>
  );
}

// NEW: Modal to block role updates when assigned to work
export function ActiveWorkWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle className="text-black font-semibold">Cannot Update Roles</DialogTitle>
      <DialogContent>
        <p className="text-gray-700">You cannot change your roles while you are assigned to an active work. Please finish your assignments first!</p>
      </DialogContent>
    </Dialog>
  );
}