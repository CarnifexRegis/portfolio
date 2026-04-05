import { Card } from '../common/Card';

const education = [
  {
    degree: "M.Sc. Informatics: Games Engineering",
    school: "Technical University Munich",
    period: "2021 – 2024",
    description: "Focus on software architecture, data-driven systems, and real-time applications. Master’s thesis on haptic feedback and in-car user interaction design (published CoG’25)."
  },
  {
    degree: "B.Sc. Informatics: Games Engineering",
    school: "Technical University Munich",
    period: "2017 – 2021",
    description: "Foundational computer science, software engineering, and systems development."
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-12 md:py-24 bg-bg px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-4">
          Education
          <div className="h-px flex-1 bg-primary/10"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <Card key={idx} hover={false} className="border-border">
              <div className="text-primary font-medium mb-1">{edu.school}</div>
              <h3 className="text-xl font-bold text-text mb-2">{edu.degree}</h3>
              <div className="text-sm font-medium text-text-secondary mb-4">{edu.period}</div>
              <p className="text-text-secondary leading-relaxed text-sm">
                {edu.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
