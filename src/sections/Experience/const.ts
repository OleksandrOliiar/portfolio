export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "incode",
    role: "Front end developer",
    company: "Incode Group",
    period: "April 2024 - Present",
    current: true,
    responsibilities: [
      "Built modular, accessible interfaces using **React**, **TypeScript**, and **Next.js**, translating design requirements into reusable components and responsive layouts",
      "Implemented scalable state management with **Redux Toolkit**, **Zustand**, and **TanStack Query**, improving data consistency and performance",
      "Integrated **REST** and **WebSocket** APIs for authentication, real-time updates, and optimistic UI behaviors",
      "Established automated quality checks using **Jest**, **React Testing Library**, **Playwright**, and **CI pipelines**",
      "Delivered robust form workflows with **React Hook Form** and **Zod** for validation and predictable UX",
      "Built mobile interfaces in **React Native** with navigation and voice/text input features",
      "Collaborated with designers, PMs, and backend teams to refine requirements and drive technical decisions",
    ],
  },
  {
    id: "vatra",
    role: "React developer",
    company: "Vatra",
    period: "May 2022 - April 2024",
    current: false,
    responsibilities: [
      "Contributed to feature development using **JavaScript**, **TypeScript**, **React**, **HTML5**, and **CSS3**",
      "Debugged and resolved functional, UI, and integration issues, improving stability and usability",
      "Assisted with testing and quality assurance for consistent behavior and predictable UX",
      "Rapidly adopted new frontend tools and frameworks to enhance productivity",
      "Collaborated with senior developers and cross-functional teams on high-quality deliverables",
    ],
  },
];
