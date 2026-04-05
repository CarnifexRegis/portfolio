import { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { ProjectDetailOverlay } from './ProjectDetailOverlay';
import { AsyncImage } from '../common/AsyncImage';

import bmwVr from '../../assets/projects/bmw_vr.png';
import bshAnalytics from '../../assets/projects/bsh_analytics.png';
import spaceInvader from '../../assets/projects/SpaceInvader.jpg';

const projects = [
  {
    title: `'Impossible Battery' Virtual Training Prototype`,
    context: "BMW Manufacturing Co.",
    longDescription: "Architected and implemented a high-fidelity virtual-training prototype for specialized BMW technicians. The 'Impossible Battery' project allows trainees to interact with high-voltage components in a risk-free environment. Presented directly to the BMW Plant President and highlighted on the Meta Blog as a benchmark for Mixed Reality training in the automotive industry.",
    tags: ["Unity", "C#", "Meta Quest 3", "MR/VR"],
    link: {
      text: "Checkout Meta Blog Article",
      url: "https://www.meta.com/de-de/blog/bmw-impossible-battery-vr-mixed-reality-training-automotive/"
    },
    image: bmwVr,
  },
  {
    title: "Using Vertical Dynamics Actuators for In-Car Entertainment",
    context: "Master's Thesis @ TUM/BMW and Paper at COG'2025",
    longDescription: "Developed a interaction model using vehicle dynamics and interior lighting as a sensory feedback system. By interfacing mobile devices with BMW i7s interior light and vertical dynamics system. In my user study I showed that the implementation was well received by the participants and hintet potential for the system to positively impact immersion in games when used correctly.",
    tags: ["C#", "Vehicle Sensors", "Interaction Design", "Unity"],
    link: {
      text: "Checkout COG'2025 Paper",
      url: "https://ieeexplore.ieee.org/document/11114358"
    },
    image: spaceInvader
  },
  {
    title: `'Secret Garden' for ecological washing`,
    context: "BSH/TUM iPraktikum",
    longDescription: "Extended the BSH HomeConnect ecosystem to help users optimize energy consumption. I designed the data pipeline to collect sensor data from millions of washing machines, analyzed it using advanced SQL heuristics, and implemented the backend logic via AWS CDK for global scalability.",
    tags: ["AWS CDK", "SQL", "Cloud Architecture", "iOS"],
    link: {
      text: "Checkout the iPraktikum Showcase",
      url: "https://ase.in.tum.de/lehrstuhl_1/component/content/article/153-teaching/wt2122/1200-ipraktikum-ws202122.html"
    },
    image: bshAnalytics,

  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-12 md:py-24 bg-bg px-6 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-4">
          Featured Work
          <div className="h-px flex-1 bg-primary/10"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="flex flex-col h-full overflow-hidden border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 bg-card/50 backdrop-blur-sm p-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <AsyncImage
                    src={project.image}
                    alt={project.title}
                    className="transition-transform duration-700 group-hover:scale-105"
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
                  <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailOverlay
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
