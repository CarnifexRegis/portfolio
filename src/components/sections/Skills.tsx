import { Badge } from '../common/Badge';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Java", "C#", "C/C++", "Kotlin", "Swift"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Angular", "Spring Boot", "Unity", "Unreal", "Docker", "Kubernetes"]
  },
  {
    title: "Tools & Infrastructure",
    skills: ["AWS", "Git", "Jenkins", "Jenkins", "Android Studio", "Jira", "Confluence"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-24 bg-bg px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-4">
          Skills & Tech
          <div className="h-px flex-1 bg-primary/10"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold text-text mb-4 border-b border-border pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <Badge key={sIdx}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
