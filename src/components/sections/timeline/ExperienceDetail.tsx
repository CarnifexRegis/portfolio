import { Card } from '../../common/Card';
import { Experience, getCompanyColor } from '../../../hooks/useTimeline';

interface ExperienceDetailProps {
  experience: Experience | null;
  /** If true, renders with a hover-state background and shadow (for desktop hover pane).
   *  If false, renders as a standard card (for mobile list/carousel). */
  isDetailed?: boolean;
}

export const ExperienceDetail = ({ experience, isDetailed = true }: ExperienceDetailProps) => {
  if (!experience) {
    return (
      <Card className="w-full min-h-[250px] flex items-center justify-center bg-transparent border-dashed border-border/30 text-text-secondary border-2 transition-all duration-500">
        <div className="text-center opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          <p className="text-sm font-medium tracking-wide border-t border-border/30 mt-4 pt-4">HOVER OVER A CAREER TRACK TO VIEW IMPACT</p>
        </div>
      </Card>
    );
  }

  const containerClasses = isDetailed
    ? "w-full relative shadow-2xl border-primary/20 backdrop-blur-sm bg-surface/50 p-8"
    : "relative overflow-hidden group p-6 h-full border-border/40 hover:border-primary/40 transition-colors duration-500";

  const companyColor = getCompanyColor(experience.company);

  return (
    <div className="w-full animate-fade-in-up h-full">
      <Card className={containerClasses}>
        <div className={`absolute top-0 left-0 w-1.5 h-full ${companyColor} rounded-l-2xl`}></div>

        <div className="mb-6">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <div className="max-w-[70%]">
              <h3 className={`${isDetailed ? 'text-3xl' : 'text-xl'} font-bold text-text mb-1 leading-tight`}>{experience.role}</h3>
              <div className="text-text-secondary font-medium flex items-center gap-2 text-sm">
                <span className="text-text font-bold">{experience.company}</span>
              </div>
            </div>
          </div>
        </div>

        <ul className={`${isDetailed ? 'space-y-4' : 'space-y-2'} text-text-secondary`}>
          {experience.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-3 group/item">
              <span className="text-primary mt-1 text-xs bg-primary/10 rounded-full p-1 leading-none transition-transform duration-300 group-hover/item:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className={`leading-relaxed ${isDetailed ? 'text-[16px]' : 'text-xs'} text-text-secondary group-hover/item:text-text transition-colors duration-300`}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
