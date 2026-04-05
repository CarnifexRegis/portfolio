import { useState, useMemo } from 'react';

export interface Experience {
  id: string;
  role: string;
  shortTitle: string;
  company: string;
  shortCompany: string;
  location?: string;
  startDate: string;
  endDate: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: "mehringer",
    role: "C# Freelancer",
    shortTitle: "C#/ASP",
    company: "Mehringer & Partner",
    shortCompany: "M&P",
    location: "Munich",
    startDate: "2020-09-01",
    endDate: "2021-01-31",
    period: "2020 – 2021",
    bullets: [
      "Developed internal tooling and business interfaces for client portals.",
      "Worked closely with clients to prototype software needs rapidly."
    ]
  },
  {
    id: "str8labs",
    role: "Unity AR/VR Developer",
    shortTitle: "Unity AR/VR",
    company: "Str8labs",
    shortCompany: "Str8labs",
    location: "Munich",
    startDate: "2021-03-01",
    endDate: "2022-03-01",
    period: "March 2021 – March 2022",
    bullets: [
      "Contributed to frontend and backend services for internal digital products.",
      "Assisted in maintaining and deploying node.js microservices."
    ]
  },
  {
    id: "chk24-ws",
    role: "Android/iOS Developer",
    shortTitle: "Mobile",
    company: "Check24",
    shortCompany: "Check24",
    location: "Munich",
    startDate: "2022-04-01",
    endDate: "2022-08-31",
    period: "April 2022 – August 2022",
    bullets: [
      "Maintained exisitng code and increased test coverage by 20%.",
      "Implemnted custom PDF viewer for insurance contracts on Android."
    ]
  },
  {
    id: "msg",
    role: "Fullstack/Cloud Developer",
    shortTitle: "Fullstack/Cloud",
    company: ".msg systems",
    shortCompany: ".msg systems",
    location: "Munich",
    startDate: "2023-02-01",
    endDate: "2023-09-01",
    period: "Feb 2023 – Sep 2023",
    bullets: [
      "Developed an employee management web application with Angular and Spring Boot.",
      "Improved HR data accessibility and automation through SQL-based services."
    ]
  },
  {
    id: "bmw-thesis",
    role: "Master Thesis Student",
    shortTitle: "C# and  Unity",
    company: "BMW",
    shortCompany: "BMW",
    location: "Munich",
    startDate: "2023-04-01",
    endDate: "2024-01-01",
    period: "Apr 2023 – Jan 2024",
    bullets: [
      "Developed and architected interactive in-car prototypes using Unity and C#.",
      "Created interfaces between mobile devices and vehicle sensors (vertical dynamics, lighting) to use the car as a haptic feedback device.",
      "Conducted a user study and published the results at IEEE CoG’25."
    ]
  },
  {
    id: "bmw-intern",
    role: "Gen>NEXT Research Intern",
    shortTitle: "Unity/Unreal",
    company: "BMW Manufacturing Co.",
    shortCompany: "BMW",
    location: "Greenville, SC",
    startDate: "2024-03-01",
    endDate: "2024-09-01",
    period: "Mar 2024 – Sep 2024",
    bullets: [
      "Designed and implemented virtual-training prototype 'Impossible Battery', improving technician onboarding.",
      "Researched business applications of AR/VR to enhance productivity and customer experience.",
      "Worked with Unity, Vuforia, CloudXR, and NVIDIA technologies."
    ]
  },
  {
    id: "chk24-mob",
    role: "iOS/Android Native Engineer",
    shortTitle: "iOS",
    company: "Check24",
    shortCompany: "Check24",
    location: "Munich",
    startDate: "2024-11-01",
    endDate: "2025-02-15",
    period: "Nov 2024 – Feb 2025",
    bullets: [
      "Led migration from native iOS/Android apps to WebView-based architecture, reducing crash rates by 90% and enabling independent release cycles.",
      "Partnered with product and design teams to improve mobile user experience and engagement."
    ]
  },
  {
    id: "chk24-fs",
    role: "Full-Stack Software Engineer",
    shortTitle: "Full-Stack Software Engineer",
    company: "Check24",
    shortCompany: "",
    location: "Munich",
    startDate: "2025-02-16",
    endDate: "Present",
    period: "Feb 2025 – Present",
    bullets: [
      "Shipping new features and fixes to millions of customers daily, owning development end-to-end across frontend, backend, and deployment.",
      "Setup the business for record breaking 2025 through challenges such as npm supply chain attacks and Cloud Flare outages.",
      "Serving as technical point of contact for app architecture and release strategy decisions."
    ]
  }
];

export const getCompanyColor = (company: string) => {
  const c = company.toLowerCase();
  if (c.includes('check24')) return 'bg-primary';
  if (c.includes('bmw')) return 'bg-blue-600';
  if (c.includes('mehringer')) return 'bg-purple-600';
  if (c.includes('str8labs')) return 'bg-lime-600';
  if (c.includes('.msg')) return 'bg-red-600';
  return 'bg-slate-600';
};

export type TimelineData = ReturnType<typeof useTimeline>;

export const useTimeline = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(experiences[experiences.length - 1].id);

  const timelineStart = new Date("2020-01-01").getTime();
  const timelineEnd = new Date().getTime();
  const totalDuration = timelineEnd - timelineStart;

  const years = useMemo(() => {
    const startYear = new Date(timelineStart).getFullYear();
    const endYear = new Date(timelineEnd).getFullYear();
    const result = [];
    for (let y = startYear; y <= endYear; y++) {
      result.push(y);
    }
    return result;
  }, [timelineStart, timelineEnd]);

  const lanes = useMemo(() => {
    const sorted = [...experiences].sort((a, b) =>
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );

    const assignedLanes: Experience[][] = [[]];

    sorted.forEach((exp) => {
      const start = new Date(exp.startDate).getTime();
      let placed = false;

      for (let i = 0; i < assignedLanes.length; i++) {
        const lastInLane = assignedLanes[i][assignedLanes[i].length - 1];
        if (!lastInLane) {
          assignedLanes[i].push(exp);
          placed = true;
          break;
        }

        const lastEnd = lastInLane.endDate === "Present"
          ? timelineEnd
          : new Date(lastInLane.endDate).getTime();

        if (start >= lastEnd + (1000 * 60 * 60 * 24)) {
          assignedLanes[i].push(exp);
          placed = true;
          break;
        }
      }

      if (!placed) {
        assignedLanes.push([exp]);
      }
    });

    return assignedLanes;
  }, [timelineEnd]);

  const getPosition = (isoDate: string) => {
    const date = isoDate === "Present" ? timelineEnd : new Date(isoDate).getTime();
    return ((date - timelineStart) / totalDuration) * 100;
  };

  return {
    experiences,
    hoveredNode,
    setHoveredNode,
    activeNode,
    setActiveNode,
    years,
    lanes,
    getPosition,
    getCompanyColor
  };
};
