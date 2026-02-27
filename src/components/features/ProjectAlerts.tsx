import { SimpleDialogProps } from "@/app/(dashboard)/projects/projectDataOps";
import { Dialog, DialogTitle, DialogContent } from '@mui/material/';
import { Button } from "@/components/ui/button";

//================================================
//Window for informing the user of blank fields
export default function ProjectNullValuesWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Some fields still blank.</DialogTitle>
      <DialogContent>
        <p>Please fill out the remaining fields.</p>
      </DialogContent>
    </Dialog>
  );
}

//================================================
// Window for informing the user of a conflicting 
// project name (and if they want to override it)
export function ProjectOverrideWindow(props: {
  open: boolean;
  onClose: () => void;
  override: () => void;
}) {
  const { onClose, open, override } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Project Name Already Exists.</DialogTitle>
      <DialogContent>
        <p>Do you want to override the existing project?</p>
        <Button onClick={override}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </DialogContent>
    </Dialog>
  );
}

//================================================
//Window for informing the user of blank fields
export function ProjectWorksExistWindow(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Cannot delete project.</DialogTitle>
      <DialogContent>
        <p>There are still active works assigned to the project.</p>
      </DialogContent>
    </Dialog>
  );
}