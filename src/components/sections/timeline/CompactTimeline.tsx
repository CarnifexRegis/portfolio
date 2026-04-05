import { useTimeline } from '../../../hooks/useTimeline';

interface CompactTimelineProps {
  activeId: string | null;
}

export const CompactTimeline = ({ activeId }: CompactTimelineProps) => {
  const { lanes, getPosition, getCompanyColor, years, experiences } = useTimeline();

  const activeExp = experiences.find(e => e.id === activeId);

  return (
    <div className="w-full px-4 mb-4">
      <div className="relative bg-surface/20 rounded-2xl p-4 border border-border/30 backdrop-blur-sm min-h-[100px] flex flex-col gap-4">
        {/* Year Markers (Simplified) */}
        <div className="absolute inset-0 flex justify-between px-4 pointer-events-none opacity-20">
          {years.map((year) => (
            <div
              key={year}
              className="h-full border-l border-white/10"
              style={{ left: `${getPosition(`${year}-01-01`)}%` }}
            />
          ))}
        </div>

        {/* Compact Lanes */}
        <div className="flex flex-col gap-3 relative z-10 py-2">
          {lanes.map((lane, laneIdx) => (
            <div key={laneIdx} className="relative h-2 w-full">
              {lane.map((exp) => {
                const startPos = getPosition(exp.startDate);
                const endPos = getPosition(exp.endDate);
                const width = Math.max(endPos - startPos, 2); // Minimum width for visibility
                const isActive = activeId === exp.id;
                const companyColor = getCompanyColor(exp.company);

                return (
                  <div
                    key={exp.id}
                    className={`absolute h-2 rounded-full transition-all duration-500 ${companyColor} ${isActive
                      ? 'opacity-100 scale-y-150 shadow-[0_0_15px_rgba(var(--color-primary),0.5)] ring-1 ring-white/30'
                      : 'opacity-20 grayscale-[0.5] scale-y-100'
                      }`}
                    style={{ left: `${startPos}%`, width: `${width}%` }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Duration HUD Label */}
        {activeExp && (
          <div className="relative flex justify-center mtauto">
            <span className="text-xs font-bold text-text-secondary">{activeExp.period}</span>
          </div>
        )}
      </div>
    </div>
  );
};
