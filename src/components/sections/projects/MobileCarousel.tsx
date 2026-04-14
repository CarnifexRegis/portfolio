import { useState, useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from './types';

interface MobileCarouselProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

export const MobileCarousel = ({ projects, onProjectSelect }: MobileCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const containerRect = el.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    
    const children = Array.from(el.children);
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - childCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  return (
    <div>
      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            onClick={onProjectSelect}
            isCarousel={true}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              activeIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-primary/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
