'use server'

import { db } from "@/lib/prisma"; // Direct DB access
import { Work } from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import { sendEmail } from "@/lib/email";
import { getSession } from "@/lib/session";
import { release } from "os";
import { assignment_assignment_status, workapplication_application_status } from "@/generated/client";

export interface UserProfile {
  profile_id: number;
  user_id: number;
  primary_role: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY";
  secondary_role: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY" | null;
  reliability_score: number;
  is_setup_complete: boolean;
}

type category = "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY";

export interface User {
  user_id: number;
  email: string;
  google_id: string | null;
  full_name: string | null;
  avatar_url: string | null;
  user_type: "EMPLOYEE" | "OWNER"
  created_at: Date;
}

export interface Assignment {
  assignment_id: number;
  work_id: number
  user_id: number | null;
  outsider_name: string | null;
  assignment_status: "PENDING" | "CONFIRMED";
  withdrawal_reason: string | null;
}

function getRole(description: string) {
  const roles = [] as category[];

  const cleanDesc = description.trim().toLowerCase();

  if (cleanDesc.includes("2nd photographer") || cleanDesc.includes("2nd videographer")) {
    roles.push("ASSISTANT");
  }
  else if (cleanDesc.includes("photo")) {
    roles.push("PHOTO");
  }
  else if (cleanDesc.includes("video") && !cleanDesc.includes("editor")) {
    roles.push("VIDEO");
  }
  else if (cleanDesc.includes("editor")) {
    roles.push("EDITOR");
  }

  roles.push("ANY");

  return roles;
  /*const roles = [] as category[];

  switch(description) {
    case "2nd Photographer":
      roles.push("ASSISTANT")
    case "Main Photographer":
    case "Photoman":
      roles.push("PHOTO")
      break;

    case "2nd Videographer":
      roles.push("ASSISTANT")  
    case "Main Videographer":
      roles.push("VIDEO")
      break;

    case "Same Day Video Editor":
      roles.push("EDITOR")
  }

  roles.push("ANY")
  return roles;*/
}

export async function getAssignment(work_id: number) {
  const assignment = await db.assignment.findFirst({
    where: { work_id: work_id }
  })

  return assignment;
}

export async function getAvailableAssignees(work: Work) {
  const available = await db.userprofile.findMany({
    where: {
      user: {
        assignment: {
          none: { 
            work: { 
              AND: [
                {work_start_date: work!.work_start_date! },
                {work_id: { notIn: [work.work_id] }}
              ]
            }
          }
        }
      }
    },
    include: { user: true },
  });

  const assignees = available.map((available) => ({
    ...available,
    reliability_score: Number(available.reliability_score),
  }));

  const assigneesFinal = assignees.map((assignee) => {
    return {
      userProfile: assignee,
      user: assignee.user
    }
  })

  return assigneesFinal;
}

export async function getRecommendedAssignees(work: Work, role: string) {
  const label = getRole(role);

  //scheduling conflict checks
  const conflictConditions: any[] = [
    { work_id: work.work_id }
  ];

  if (work.work_start_date) {
    conflictConditions.push({
      work: { work_start_date: work.work_start_date }
    });
  }

  const recommended = await db.userprofile.findMany({
    where: {
      user: {
        assignment: {none: {OR: conflictConditions}}
      },
      OR: [
        { primary_role: { in: label } },
        { secondary_role: { in: label } }
      ]
    },
    orderBy: { reliability_score: "desc" },
    include: { user: true },
  });

  //WEIGHTED SCORING ENGINE
  const gradedAssignees = recommended.map((profile) => {
    const baseScore = profile.reliability_score.toNumber();
    let matchBonus = 0;

    //if primary role is in the required skills array, give them +10
    if (label.includes(profile.primary_role)) {
      matchBonus = 10;
    }

    return {
      userProfile: {
        ...profile,
        reliability_score: baseScore
      },
      user: profile.user,
      finalMatchScore: baseScore + matchBonus //calculate the final score
    };
  });

  //sort by the new Final Match Score 
  const sortedAssignees = gradedAssignees.sort((a, b) => b.finalMatchScore - a.finalMatchScore);

  //slice the array to only keep the top 3, clean up object for the frontend
  const assigneesFinal = sortedAssignees.slice(0, 3).map((assignee) => {
    return {
      userProfile: assignee.userProfile,
      user: assignee.user,
      //pass the match score to the frontend(optional)
      matchScore: assignee.finalMatchScore
    }
  });

  return assigneesFinal;
}

export async function assignPerson(assignmentId: number, user: User) {
  const work = await db.assignment.findFirst({where: {assignment_id: assignmentId}})
  const status = (user.user_type == "EMPLOYEE") ? "PENDING" : "REVIEW";
  
  if(user.user_type == "EMPLOYEE") {
    await db.workapplication.create({
      data: {
        work_id: work!.work_id,
        user_id: user.user_id,
        application_status: "PENDING", 
      },  
    });
  }

  await db.workapplication.deleteMany({
    where: {
      work_id: work!.work_id,
      application_status: "APPROVAL"
    }
  })

  await db.assignment.update({
    where: { assignment_id: assignmentId },
    data: {
      user_id: user.user_id,
    }
  })

  await db.work.update({
    where: { work_id: work!.work_id },
    data: { work_status: status }
  })
}

export async function removeWithdrawal(assignmentId: number) {
  await db.assignment.update({
    where: { assignment_id: assignmentId },
    data: { user_id: null, withdrawal_reason: null, assignment_status: "PENDING" }
  })
}

export async function getApplications(workId: number) {
  const users = await db.workapplication.findMany({
    where: {
      work_id: workId,
      application_status: "APPROVAL",
    },
    include: {
      user: {
        include: { userprofile: true }
      }
    },
  });


  const applications = users.map((applicant) => {
    const { userprofile, ...restOfUser } = applicant.user;
    const profile = userprofile!;

    return {
      user: restOfUser,
      userProfile: {
        ...profile,
        reliability_score: Number(profile.reliability_score)
      },
    }
  })

  return applications;
}

export async function acceptApplication(workId: number, userId: number) {
  const application = await db.workapplication.findFirst({
    where: {
      work_id: workId,
      user_id: userId,
    },
  });

  const assignment = await db.assignment.findFirst({
    where: { work_id: workId }
  });

  await db.workapplication.update({
    where: { application_id: application!.application_id },
    data: { application_status: "APPROVED" }
  })

  await db.workapplication.updateMany({
    where: {
      AND: [
        { NOT: { application_id: application!.application_id } },
        { work_id: workId },
      ]
    },
    data: { application_status: "REJECTED" }
  })

  await db.work.update({
    where: { work_id: workId },
    data: { work_status: "ASSIGNED", is_open_pool: false }
  })

  await db.assignment.update({
    where: { assignment_id: assignment!.assignment_id },
    data: {
      user_id: userId,
      assignment_status: "CONFIRMED"
    }
  })
//--------EMAIL SENDING LOGIC DISABLE IF IT MESSES EVERYTHING UP
  try {
    // 1. Fetch the winning employee's details
    const employee = await db.user.findUnique({
      where: { user_id: userId },
      select: { email: true, full_name: true }
    });

    // 2. Fetch the work and project details to make the email informative
    const workDetails = await db.work.findUnique({
      where: { work_id: workId },
      include: { project: true }
    });

    // 3. Send the email if we found the employee's email
    if (employee?.email && workDetails) {
      const projectName = workDetails.project?.project_name || "Unknown Project";
      const roleName = workDetails.project_role;

      // Grab just their first name for a friendly greeting, or default to "there"
      const firstName = employee.full_name?.split(' ')[0] || "there";

      const subject = `Application Accepted: ${roleName}`;
      const message = `Hi ${firstName},\n\nGreat news! Your application for the ${roleName} role on "${projectName}" has been accepted and confirmed by the owner.\n\nPlease check your dashboard for full schedule details and requirements.\n\nSee you at the event!`;

      await sendEmail(employee.email, subject, message);
    }
  } catch (error) {
    // Catch errors quietly so the DB transaction still succeeds
    console.error("Failed to send application acceptance email:", error);
  }
}

export async function clearAssignee(workId: number) {
  const assignment = await db.assignment.findFirst({ where: { work_id: workId } })

  await db.work.update({
    where: { work_id: assignment!.work_id },
    data: { work_status: "PENDING" }
  })
  await db.workapplication.deleteMany({ where: { work_id: assignment!.work_id } });
  await db.assignment.update({
    where: { assignment_id: assignment!.assignment_id },
    data: {
      user_id: null,
      assignment_status: "PENDING",
      outsider_name: null
    }
  })
}

export async function employeeMarkDone(workId: number) {
  const assignment = await db.assignment.findFirst({ where: { work_id: workId } });

  /*await db.workapplication.deleteMany({
    where: {
      work_id: assignment!.work_id,
      user_id: assignment!.user_id!
    }
  });*/

  await db.work.update({
    where: { work_id: workId },
    data: { work_status: "REVIEW" }
  })
}

export async function employeeWithdraw(workId: number) {
  const assignment = await db.assignment.findFirst({where: {work_id: workId}})
  const withdrawalReason = "Employee has withdrawn!";

  await db.work.update({
    where: { work_id: workId },
    data: { work_status: "PENDING" }
  });

  await db.workapplication.deleteMany({
    where: {
      work_id: assignment?.work_id,
      user_id: assignment?.user_id!
    }
  })

  await db.assignment.update({
    where: {
      assignment_id: assignment!.assignment_id
    },
    data: {
      withdrawal_reason: withdrawalReason
    }
  })

  try {
    if (assignment?.user_id) {
      const employee = await db.user.findUnique({
        where: { user_id: assignment.user_id },
        select: { full_name: true, email: true }
      });

      const workDetails = await db.work.findUnique({
        where: { work_id: workId },
        include: { project: true }
      });

      const owners = await db.user.findMany({
        where: { user_type: "OWNER" },
        select: { email: true }
      });

      if (employee && workDetails && owners.length > 0) {
        const employeeName = employee.full_name || employee.email || "An employee";
        const projectName = workDetails.project?.project_name || "Unknown Project";
        const roleName = workDetails.project_role;

        const subject = `URGENT: Work Withdrawal - ${employeeName}`;
        const message = `${employeeName} has just withdrawn from their confirmed ${roleName} role for ${projectName}.\n\nReason provided: "${withdrawalReason}"\n\nPlease check your dashboard to review this withdrawal.`;

        for (const owner of owners) {
          if (owner.email) {
            await sendEmail(owner.email, subject, message);
          }
        }
      }
    }
  } catch (emailError) {
    // This catches email errors quietly so the user's withdrawal still succeeds!
    console.error("Failed to send withdrawal email to owners:", emailError);

  }
}

export async function reassignPerson(assignmentId: number, user: User) {
  const assignment = await db.assignment.findFirst({ 
    where: { 
      assignment_id: assignmentId 
    },
    include: {
      work: true
    }
  })

  if(assignment!.assignment_status == "CONFIRMED" && 
    assignment?.work.work_status == "PENDING") {
    await db.workapplication.create({
      data: {
        work_id: assignment!.work.work_id,
        user_id: user.user_id,
        application_status: "PENDING", 
      },  
    });
  }
  else {
    await db.workapplication.updateMany({
    where: { work_id: assignment?.work.work_id },
    data: {
      user_id: user.user_id,
      application_status: "PENDING",
    },
    });
  }

  await db.work.update({
    where: { work_id: assignment?.work.work_id },
    data: { work_status: "PENDING" }
  })

  await db.assignment.update({
    where: { assignment_id: assignmentId },
    data: {
      user_id: user.user_id,
      assignment_status: "PENDING"
    }
  })
}

export async function assignFreelancer(assignmentId: number, freelancer: string) {
  const work = await db.assignment.findFirst({ where: { assignment_id: assignmentId } })

  await db.work.update({
    where: { work_id: work?.work_id },
    data: {
      work_status: "REVIEW"
    }
  })

  await db.assignment.update({
    where: { assignment_id: assignmentId },
    data: {
      outsider_name: freelancer,
      assignment_status: "CONFIRMED"
    }
  })
}

export async function employeeMarkNotDone(workId: number) {
  const assignment = await db.assignment.findFirst({where: {work_id: workId}});

  const application = await db.workapplication.findFirst({
    where: {
      work_id: assignment!.work_id,
      user_id: assignment!.user_id!
    }
  });

  if(!application) {
    await db.workapplication.create({
    data: {
      work_id: assignment!.work_id,
      user_id: assignment!.user_id!,
      application_status: "APPROVED"
    }
  });
  }

  await db.work.update({
    where: {work_id: workId},
    data: {work_status: "ASSIGNED"}
  })
}

export async function employeeRemoveWork(workId: number) {
  const assignment = await db.assignment.findFirst({where: {work_id: workId}});

  await db.workapplication.deleteMany({
    where: {
      work_id: assignment!.work_id,
      user_id: assignment!.user_id!
    }
  });
}

export async function employeeDeclineOpen(workId: number) {
  const session = await getSession();
  const userId = session?.userId || 1;

  await db.workapplication.deleteMany({
    where: {
      work_id: workId,
      user_id: userId
    }
  });
}