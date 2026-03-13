//================================================
//Window for informing the user of blank fields
export default function WorkCancelRequest(props: {
  open: boolean;
  onClose: () => void;
  cancelRequest: () => void;
  refresh: () => void;
}) {
  const { open, onClose, cancelRequest, refresh } = props;

  const handleClose = () => {
    onClose();
  };

  return open ? (<div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 p-4"
    role="dialog"
    aria-modal="true"
    aria-label="Cancel work request confirmation"
  >
    <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
      <h3 className="text-base font-semibold text-slate-900">
        Cancel Request?
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Do you want to cancel this assignment request?
      </p>
      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
         onClick={() => {cancelRequest(); refresh(); handleClose(); }}
        >
          Yes
        </button>
        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          onClick={handleClose}
        >
          No
        </button>
      </div>
    </div>
  </div>) : null;
}

export function WorkMarkComplete(props: {
  open: boolean;
  onClose: () => void;
  markComplete: () => void;
  refresh: () => void;
}) {
  const { open, onClose, markComplete, refresh } = props;

  const handleClose = () => {
    onClose();
  };

  return open ? (<div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 p-4"
    role="dialog"
    aria-modal="true"
    aria-label="Mark work as complete confirmation"
  >
    <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
      <h3 className="text-base font-semibold text-slate-900">
        Mark as Complete?
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Do you want to mark this work as complete?
      </p>
      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
         onClick={() => {markComplete(); refresh(); handleClose(); }}
        >
          Yes
        </button>
        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          onClick={handleClose}
        >
          No
        </button>
      </div>
    </div>
  </div>) : null;
}