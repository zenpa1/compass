"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Edit, Trash2 } from "lucide-react";

export function TaskActionDropdown({ anchorId, onClose, onEdit, onDelete }: any) {
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    // Find where the 3-dots button is on the screen
    const trigger = document.getElementById(anchorId);
    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      // Position the menu slightly below and to the left of the button
      setCoords({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX - 120, 
      });
    }

    // Close menu if user clicks anywhere else
    const handleClickOutside = () => onClose();
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [anchorId, onClose]);

  // Teleport this menu to the very end of <body>
  return createPortal(
    <div 
      className="fixed z-[9999] w-36 bg-white rounded-md shadow-xl border border-slate-200 py-1 text-sm animate-in fade-in zoom-in duration-100"
      style={{ top: coords.top, left: coords.left }}
      onClick={(e) => e.stopPropagation()} // Stop menu clicks from closing itself immediately
    >
      <button 
        className="w-full px-4 py-2 hover:bg-slate-100 flex items-center gap-2 text-slate-700"
        onClick={onEdit}
      >
        <Edit className="size-4" /> Edit Task
      </button>
      
      <button 
        className="w-full px-4 py-2 hover:bg-slate-100 flex items-center gap-2 text-red-600"
        onClick={onDelete}
      >
        <Trash2 className="size-4" /> Delete Task
      </button>
    </div>,
    document.body
  );
}