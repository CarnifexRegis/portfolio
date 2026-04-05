import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Badge } from '../common/Badge';

interface Project {
  title: string;
  context: string;
  tags: string[];
  link?: { text: string, url: string };
  image: string;
  videoUrl?: string;
  longDescription?: string;
}

interface ProjectDetailOverlayProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailOverlay = ({ project, onClose }: ProjectDetailOverlayProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg/80 backdrop-blur-xl transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative w-full max-w-4xl max-h-full bg-card border border-primary/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-bg/50 backdrop-blur hover:bg-bg transition-colors z-10 text-text"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto overflow-x-hidden scrollbar-hide pt-12 md:pt-16">
          {/* Content Section */}
          <div className="p-8 md:p-12">
            <div className="text-sm font-bold text-primary mb-4 uppercase tracking-[0.2em]">
              {project.context}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text mb-8 leading-tight">
              {project.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Main Description */}
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.longDescription}
                </p>

                {project.link && (
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg shadow-primary/25"
                  >
                    {project.link.text}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-text/40 uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
