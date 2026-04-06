import { Work, getAssignee, checkWithdrawal, getFreelancer } from 
  "@/app/(dashboard)/projects/[projectId]/workDataOps";

export default function toShortHours(hours: number)  {
    const actualHours = hours - 12;
    
    if(actualHours == -12) return "12AM";
    else if(actualHours < 0) return hours + "AM";
    else if(actualHours == 0) return "12PM"
    else return actualHours + "PM"
};

export function toISOTime(date: Date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) return "";
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${hours}:${minutes}`;
}

 //Returns the assignee to be shown in the work table
 export async function printAssignee(work: Work) {
    const assignee =  await getAssignee(work.work_id);
    if(assignee == null) { 
      const freelancer = await getFreelancer(work.work_id);

      if(freelancer == null) { return "NONE" }
      else { return freelancer }
    }
    else { return assignee?.full_name };
  }

 //Returns the status to be shown in the work table
 export async function printStatus(work: Work) {
    switch(work.work_status) {
      case "PENDING":
        const assignee = await getAssignee(work.work_id);
        if(assignee == null) { 
          return "⚠ UNASSIGNED";
        }
        else {
          const withdrawal = await checkWithdrawal(work.work_id) ?? "PENDING";

          if(withdrawal.toString() == "PENDING") {
            return "⌛ REQUEST SENT";
          }
          else {
            return "⚠ WITHDRAWN"
          }
        }
      case "OPEN":
        return "🌐 OPEN POOL";
      case "ASSIGNED":
        return "✅ ASSIGNED";
      case "REVIEW":
        return "🔍 FOR REVIEW";
      case "COMPLETED":
        return "🎉 COMPLETED";
    }
  }

 //Returns the color of the action button for the corresponding work in the work table
 export function printActionTone(status: string) {
    switch(status) {
      case "⚠ UNASSIGNED":
      case "⚠ WITHDRAWN":
      case "🌐 OPEN POOL":
        return "red";
      case "⌛ REQUEST SENT":
        return "amber";
      case "✅ ASSIGNED":
        return "blue";
      case "🔍 FOR REVIEW":
      case "🎉 COMPLETED":
        return "green";
      default:
        return "green";
    }
  }

 //Returns the text of the action  for the corresponding work in the work table
 export function printAction(status: string) {
    switch(status) {
      case "⚠ UNASSIGNED":
        return "Assign Employee";
      case "⚠ WITHDRAWN":
        return "View and Assign";
      case "🌐 OPEN POOL":
        return "View Application [3]";
      case "⌛ REQUEST SENT":
        return "Cancel Request";
      case "✅ ASSIGNED":
        return "Change Assignee?";
      case "🔍 FOR REVIEW":
        return "Mark Complete?";
      case "🎉 COMPLETED":
        return "Undo Mark Complete?";
      default:
        return "green";
    }
}