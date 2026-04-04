"use client";

import { Button } from "@/components/ui/button";

type DeleteTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
};

export function DeleteTaskModal({ isOpen, onClose, onConfirm, isDeleting }: DeleteTaskModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog">
      <div 
        className="w-full max-w-[400px] rounded-xl bg-white shadow-2xl flex flex-col p-8 items-center text-center"
        onClick={(e) => e.stopPropagation()} // Prevents clicking inside the modal from closing it
      >
        <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-2">
          Delete Task
        </h3>
        
        <p className="text-slate-600 mb-8 text-sm">
          Do you want to delete this Task?
        </p>

        <div className="flex justify-center gap-4 w-full">
          <Button 
            variant="outline" 
            onClick={onClose} 
            disabled={isDeleting}
            className="px-8 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium rounded-md"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isDeleting}
            className="bg-[#ec003f] hover:bg-[#c40034] text-white px-8 font-medium rounded-md"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
}