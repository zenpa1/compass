"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/features/ProjectCard"; // Your restored component
import { OrganizeButton } from "@/components/features/OrganizeButton";
import { AddProjectButton } from "@/components/features/AddProjectButton";
import {
  Project,
  getProjects,
  getRemainingDays,
  getProjectMissingWorks, 
  getProjectWorks
} from "@/app/(dashboard)/projects/projectDataOps";
import ProjectNullValuesWindow, {
  ProjectWorksExistWindow,
  ProjectInvalidDeadlineWindow
} from "@/components/features/ProjectAlerts";

type enrichedProjects = {
  project: Project;
  activeWorks: number;
  allWorks: number;
}

interface ProjectListProps {
  initialProjects: enrichedProjects[];
}

export default function ProjectDashboard({
  initialProjects,
}: ProjectListProps) {
  const [projects, setProjects] = useState<enrichedProjects[]>(initialProjects);

  //Variables for alert windows
  const [nullWindow, setNullWindow] = useState(false);
  const [worksWindow, setWorksWindow] = useState(false);
  const [deadlineWindow, setDeadlineWindow] = useState(false);

  //Gets the projects in the database and assigns them to the projects displayed in the
  //dashboard. The method is passed down to most child components so they can "refresh"
  //the dashboard at will after performing CRUD
  async function refresh(filters: string[] = []) {
    const newProjects = await getProjects(filters);

    const enrichedProjects = await Promise.all(newProjects.map(async (project) => {
          const projectData = project;
          const activeWorks = await getProjectMissingWorks(project.project_id);
          const allWorks = await getProjectWorks(project.project_name)!;
          const allWorksLength = allWorks?.length || 0;
      
          return {
            project: projectData,
            activeWorks: allWorksLength - activeWorks,
            allWorks: allWorksLength,
          };
        }));

    setProjects(() => enrichedProjects);
  }

  const hasProjects = projects.length > 0;

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Project Dashboard
          </h2>
        </div>
        <OrganizeButton refresh={refresh} />
      </div>

      {hasProjects ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.project.project_id}
              projectId={proj.project.project_id}
              // --- MAPPING HAPPENS HERE ---
              // Left side = Component Prop | Right side = Database Column
              name={proj.project.project_name}
              client={proj.project.client_name}
              startDate={proj.project.project_start_date}
              endDate={proj.project.project_end_date}
              location={proj.project.project_location}
              description={proj.project.project_description}
              // Ensure the string matches the exact "ACTIVE" | "ARCHIVED" type
              status={proj.project.project_status as "ACTIVE" | "ARCHIVED"}
              activeWorks={proj.activeWorks}
              allWorks={proj.allWorks}
              //Passese some parameters of the alert windows so that they can be opened
              //from another component
              openNullWindow={() => setNullWindow(true)}
              openWorkConflictWindow={() => setWorksWindow(true)}
              openInvalidDeadlineWindow={() => setDeadlineWindow(true)}
              refresh={refresh}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold text-slate-900">No Projects</p>
          <AddProjectButton
            variant="empty"
            refresh={refresh}
            openNullWindow={() => setNullWindow(true)}
            openWorkConflictWindow={() => setWorksWindow(true)}
            openInvalidDeadlineWindow={() => setDeadlineWindow(true)}
          />
          <p className="mt-3 text-sm text-slate-500">Click to add</p>
        </div>
      )}

      {hasProjects ? (
        <AddProjectButton
          refresh={refresh}
          openNullWindow={() => setNullWindow(true)}
          openWorkConflictWindow={() => setWorksWindow(true)}
          openInvalidDeadlineWindow={() => setDeadlineWindow(true)}
        />
      ) : null}

      {/* Window that appears if one of the required inputs is null */}
      <ProjectNullValuesWindow
        open={nullWindow}
        onClose={() => setNullWindow(false)}
      />

      {/* Window that appears if project has active works */}
      <ProjectWorksExistWindow
        open={worksWindow}
        onClose={() => setWorksWindow(false)}
      />

      {/* Window that appears if owner sets the deadline to be before the current date */}
      <ProjectInvalidDeadlineWindow
        open={deadlineWindow}
        onClose={() => setDeadlineWindow(false)}
      />
    </div>
  );
}
