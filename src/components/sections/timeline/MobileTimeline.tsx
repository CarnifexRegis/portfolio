import { useState, useRef, useLayoutEffect } from 'react';
import { ExperienceDetail } from './ExperienceDetail';
import { CompactTimeline } from './CompactTimeline';
import { useTimeline } from '../../../hooks/useTimeline';

export const MobileTimeline = () => {
  const { experiences } = useTimeline();
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

    setActiveIndex(closestIndex);
  };

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      el.scrollLeft = 30;
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const activeId = experiences[activeIndex]?.id || null;

  return (
    <div className="md:hidden w-full overflow-hidden">
      <div className="px-6 mb-8 mt-12 flex items-center justify-between">
        <h3 className="text-xl font-bold text-text uppercase tracking-widest text-[12px] opacity-50">Career Journey</h3>
      </div>

      {/* High-Fidelity Progress Indicator: The Mini-Timeline */}
      <CompactTimeline activeId={activeId} />

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-[10vw] gap-4"
        style={{ scrollPadding: '10vw' }}
      >
        {experiences.map((exp) => (
          <div
            key={`mobile-${exp.id}`}
            className="flex-none w-[75vw] snap-center"
          >
            <ExperienceDetail experience={exp} isDetailed={false} />
          </div>
        ))}
      </div>
    </div>
  );
};
