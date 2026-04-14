import { ProjectCard } from './ProjectCard';
import { Project } from './types';

interface DesktopGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

export const DesktopGrid = ({ projects, onProjectSelect }: DesktopGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          project={project}
          onClick={onProjectSelect}
        />
      ))}
    </div>
  );
};
