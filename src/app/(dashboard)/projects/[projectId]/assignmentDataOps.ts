'use server'

import { db } from "@/lib/prisma"; // Direct DB access
import { Work } from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import { release } from "os";
import { workapplication_application_status } from "@/generated/client";

export interface UserProfile {
  profile_id: number;
  user_id: number;
  primary_role: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY";
  secondary_role:  "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY" | null;
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
    where: {work_id: work_id}
  })

  return assignment;
}

export async function getAvailableAssignees(work: Work) {
  const available = await db.userprofile.findMany({
    where: {
      user: {
        assignment: {
          none: { 
            work: { project_id: work.project_id }
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
        AND: [
          {assignment: {none: {OR: conflictConditions}}},
          {assignment: {none: {work: { project_id: work.project_id }}}}
        ]
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
  
  await db.workapplication.create({
      data: {
        work_id: work!.work_id,
        user_id: user.user_id,
        application_status: "PENDING", 
      },  
  });

  await db.assignment.update({
    where: {assignment_id: assignmentId},
    data: {
      user_id: user.user_id,
    }
  })
}

export async function removeWithdrawal(assignmentId: number) {
  await db.assignment.update({
    where: {assignment_id: assignmentId},
    data: {user_id: null, withdrawal_reason: null, assignment_status: "PENDING"}
  })
}

export async function getApplications(workId: number) {
  const users = await db.workapplication.findMany({
    where: {
      work_id: workId,
      application_status: "APPROVAL",
    },
    include: { user: {
      include: { userprofile: true }
    } },
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
    where: {work_id: workId}
  });

  await db.workapplication.update({
    where: {application_id: application!.application_id},
    data: {application_status: "APPROVED"}
  })

  await db.workapplication.updateMany({
    where: {
      AND: [
        {NOT: {application_id: application!.application_id}},
        {work_id: workId},
      ]
    },
    data: {application_status: "REJECTED"}
  })

  await db.work.update({
    where: {work_id: workId},
    data: {work_status: "ASSIGNED", is_open_pool: false}
  })

  await db.assignment.update({
    where: {assignment_id: assignment!.assignment_id},
    data: {
      user_id: userId,
      assignment_status: "CONFIRMED"
    }
  })
}

export async function clearAssignee(workId: number) {
  const assignment = await db.assignment.findFirst({where: {work_id: workId}})

  await db.work.update({
    where: {work_id: assignment!.work_id},
    data: {work_status: "PENDING"}
  })
  await db.workapplication.deleteMany({where: {work_id: assignment!.work_id}});
  await db.assignment.update({
    where: {assignment_id: assignment!.assignment_id},
    data: {
      user_id: null,
      assignment_status: "PENDING",
      outsider_name: null
    }
  })
}

export async function employeeMarkDone(workId: number) {
  const assignment = await db.assignment.findFirst({where: {work_id: workId}});

  await db.workapplication.deleteMany({
    where: {
      work_id: assignment!.work_id,
      user_id: assignment!.user_id!
    }
  });

  await db.work.update({
    where: {work_id: workId},
    data: {work_status: "REVIEW"}
  })
}

export async function employeeWithdraw(workId: number, withdrawalReason: string) {
  const assignment = await db.assignment.findFirst({where: {work_id: workId}})

  await db.work.update({
    where: {work_id: workId},
    data: {work_status: "PENDING"}
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
}

export async function reassignPerson(assignmentId: number, user: User) {
  const work = await db.assignment.findFirst({where: {assignment_id: assignmentId}})
  
  await db.workapplication.updateMany({
      where: { work_id: work!.work_id },
      data: {
        user_id: user.user_id,
        application_status: "PENDING", 
      },  
  });

  await db.work.update({
    where: { work_id: work!.work_id },
    data: { work_status: "PENDING" }
  })

  await db.assignment.update({
    where: {assignment_id: assignmentId},
    data: {
      user_id: user.user_id,
      assignment_status: "PENDING"
    }
  })
}

export async function assignFreelancer(assignmentId: number, freelancer: string) {
  const work = await db.assignment.findFirst({where: {assignment_id: assignmentId}})
  
  await db.work.update({
    where: {work_id: work?.work_id},
    data: {
      work_status: "REVIEW"
    }
  })

  await db.assignment.update({
    where: {assignment_id: assignmentId},
    data: {
      outsider_name: freelancer,
      assignment_status: "CONFIRMED"
    }
  })
}