import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { AsyncImage } from '../../common/AsyncImage';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  className?: string;
  isCarousel?: boolean;
}

export const ProjectCard = ({ project, onClick, className = "", isCarousel = false }: ProjectCardProps) => {
  return (
    <div
      className={`group cursor-pointer ${isCarousel ? 'shrink-0 w-[85vw] snap-center md:snap-align-none md:w-auto' : ''} ${className}`}
      onClick={() => onClick(project)}
    >
      <Card 
        noPadding 
        className="flex flex-col h-full overflow-hidden border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 bg-card/50 backdrop-blur-sm"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-video w-full">
          <AsyncImage
            src={project.image}
            alt={project.title}
            className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover"
          />

          {/* Floating Context Badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="secondary" className="bg-bg/80 backdrop-blur-md border-primary/10">
              {project.context}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>
        </div>
      </Card>
    </div>
  );
};
