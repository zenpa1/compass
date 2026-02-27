'use client'

import { useState } from "react";
import { ProjectCard } from "@/components/features/ProjectCard"; // Your restored component
import { OrganizeButton } from "@/components/features/OrganizeButton";
import { AddProjectButton } from "@/components/features/AddProjectButton";
import { Project, getProjects, getRemainingDays } from 
  "@/app/(dashboard)/projects/projectDataOps";
import ProjectNullValuesWindow, { ProjectWorksExistWindow } 
    from "@/components/features/ProjectAlerts";

interface ProjectListProps {
  initialProjects: Project[]; 
}

export default function ProjectDashboard({ initialProjects }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  //Variables for alert windows
  const [nullWindow, setNullWindow] = useState(false);
  const [worksWindow, setWorksWindow] = useState(false);

  //Gets the projects in the database and assigns them to the projects displayed in the
  //dashboard. The method is passed down to most child components so they can "refresh"
  //the dashboard at will after performing CRUD
  async function refresh(filters: string[] = []) {
    const newProjects = await getProjects(filters);
    setProjects(() => newProjects);
  }

  const hasProjects = projects.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Project Dashboard
          </h2>
        </div>
        <OrganizeButton refresh={refresh}/>
      </div>

      {hasProjects ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.project_id}
              projectId={proj.project_id}
              // --- MAPPING HAPPENS HERE ---
              // Left side = Component Prop | Right side = Database Column
              name={proj.project_name}
              client={proj.client_name}
              startDate={proj.project_start_date}
              endDate={proj.project_end_date}
              location={proj.project_location}
              description={proj.project_description}
              // Ensure the string matches the exact "ACTIVE" | "ARCHIVED" type
              status={proj.project_status as "ACTIVE" | "ARCHIVED"}
              //Passese some parameters of the alert windows so that they can be opened
              //from another component
              openNullWindow={() => setNullWindow(true)}
              openWorkConflictWindow={() => setWorksWindow(true)}
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
          />
          <p className="mt-3 text-sm text-slate-500">Click to add</p>
        </div>
      )}

      {hasProjects ? <AddProjectButton 
        refresh={refresh}
        openNullWindow={() => setNullWindow(true)}
        openWorkConflictWindow={() => setWorksWindow(true)}
      /> : null}

      {/* Window that appears if one of the required inputs is null */}
      <ProjectNullValuesWindow 
            open={nullWindow}
            onClose={() => setNullWindow(false)}
          />

      {/* Window that appears if one of the required inputs is null */}
      <ProjectWorksExistWindow 
            open={worksWindow}
            onClose={() => setWorksWindow(false)}
          />
    </div>
  );
}
