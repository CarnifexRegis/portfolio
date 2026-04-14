import { useState } from 'react';
import { ProjectDetailOverlay } from './ProjectDetailOverlay';
import { DesktopGrid } from './DesktopGrid';
import { MobileCarousel } from './MobileCarousel';
import { Project } from './types';
import { useIsDesktop } from '../../../hooks/useMediaQuery';

import bmwVr from '../../../assets/projects/bmw_vr.png';
import bshAnalytics from '../../../assets/projects/bsh_analytics.png';
import spaceInvader from '../../../assets/projects/SpaceInvader.jpg';

const projects: Project[] = [
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isDesktop = useIsDesktop();

  return (
    <section id="projects" className="py-12 md:py-24 bg-bg px-6 border-y border-primary/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-4">
          Featured Work
          <div className="h-px flex-1 bg-primary/10"></div>
        </h2>

        {isDesktop ? (
          <DesktopGrid projects={projects} onProjectSelect={setSelectedProject} />
        ) : (
          <MobileCarousel projects={projects} onProjectSelect={setSelectedProject} />
        )}
      </div>

      <ProjectDetailOverlay
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
