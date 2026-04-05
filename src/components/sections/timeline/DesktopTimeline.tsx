import { ExperienceDetail } from './ExperienceDetail';
import { useTimeline } from '../../../hooks/useTimeline';

export const DesktopTimeline = () => {
  const {
    experiences,
    hoveredNode,
    setHoveredNode,
    activeNode,
    setActiveNode,
    years,
    lanes,
    getPosition,
    getCompanyColor
  } = useTimeline();

  const activeExp = experiences.find(e => e.id === activeNode) || null;

  return (
    <div className="w-full">
      <div className="flex flex-col gap-16">
        {/* Top: The Interactive Gantt Timeline */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-4">
            Experience
            <div className="h-px flex-1 bg-border"></div>
          </h2>

          <div className="w-full relative px-4">
            <div className="relative min-h-[180px]">
              {/* Year Axis Grid Lines */}
              <div className="absolute inset-0 flex justify-between pointer-events-none">
                {years.map((year) => {
                  const pos = getPosition(`${year}-01-01`);
                  return (
                    <div
                      key={year}
                      className="absolute top-0 bottom-12 border-l border-white/5"
                      style={{ left: `${pos}%` }}
                    />
                  );
                })}
              </div>

              {/* Gantt Lanes */}
              <div className="flex flex-col gap-8 pt-6 pb-12">
                {lanes.map((lane, laneIdx) => (
                  <div key={laneIdx} className="relative h-8 w-full">
                    {lane.map((exp) => {
                      const startPos = getPosition(exp.startDate);
                      const endPos = getPosition(exp.endDate);
                      const width = endPos - startPos;
                      const isHovered = hoveredNode === exp.id;
                      const companyColor = getCompanyColor(exp.company);

                      return (
                        <div
                          key={exp.id}
                          className="absolute group"
                          style={{ left: `${startPos}%`, width: `${width}%` }}
                          onMouseEnter={() => {
                            setHoveredNode(exp.id);
                            setActiveNode(exp.id);
                          }}
                          onMouseLeave={() => setHoveredNode(null)}
                        >
                          {/* Company Name Label */}
                          <div
                            className={`absolute -top-6 left-0 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${isHovered ? 'text-primary translate-y-[-2px]' : 'text-text-secondary/60'}`}
                          >
                            {exp.shortCompany}
                          </div>

                          {/* The Bar */}
                          <div
                            className={`h-4 rounded-full transition-all duration-500 cursor-pointer flex items-center px-4 relative ${companyColor} ${isHovered ? 'scale-y-125 shadow-[0_0_20px_rgba(4,116,196,0.4)] opacity-100 ring-2 ring-white/20' : 'opacity-60 grayscale-[0.3]'}`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-30"></div>

                            <span className={`text-[9px] font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis transition-opacity duration-300`}>
                              {exp.shortTitle}
                            </span>
                          </div>

                          {/* Role Under Label */}
                          <div
                            className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium transition-all duration-300 pointer-events-none ${isHovered ? 'text-white opacity-100 scale-110' : 'opacity-0 scale-90'}`}
                          >
                            {exp.role}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Bottom Year Axis */}
              <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-border/50">
                <div className="relative w-full h-full">
                  {years.map((year) => {
                    const pos = getPosition(`${year}-01-01`);
                    return (
                      <div
                        key={year}
                        className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                        style={{ left: `${pos}%` }}
                      >
                        <div className="h-2 w-px bg-border/50 mb-2"></div>
                        <span className="text-[10px] font-bold text-text-secondary/60 tracking-wider">
                          {year}
                        </span>
                      </div>
                    );
                  })}
                  {/* Current Position Marker */}
                  <div
                    className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                    style={{ left: `100%` }}
                  >
                    <div className="h-2 w-px bg-primary mb-2"></div>
                    <span className="text-[10px] font-bold text-primary tracking-wider">NOW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full min-h-[300px] items-start justify-center">
          <div className="w-full">
            <ExperienceDetail experience={activeExp} isDetailed={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
