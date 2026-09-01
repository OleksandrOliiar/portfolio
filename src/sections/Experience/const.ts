import { IconType } from "react-icons/lib";
import { FaChrome, FaReact } from "react-icons/fa";

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  icon: IconType;
}

export const experiences: Experience[] = [
  {
    id: "incode",
    role: "Web Developer",
    company: "Incode Group",
    period: "April 2024 - Present",
    current: true,
    icon: FaChrome,
    responsibilities: [
      "Built a large-scale **React**/**TypeScript** app for in-store eye testing and glasses sales, now used daily by thousands of workers across U.S. and European stores",
      "Delivered end-to-end features with **Python**, **REST APIs**, and **PostgreSQL**—including analytics dashboards that give managers clear daily sales reports across stores",
      "Built an automated release pipeline with **Git/GitHub**, **Docker**, and **CI/CD** to safely deploy updates to **AWS**, preventing downtime for retail locations",
      "Translated **Figma** designs into pixel-perfect screens with **Tailwind CSS**, ensuring flawless performance on in-store tablets and computers",
      "Refactored complex code into modular architecture with **TypeScript**, **Redux**, and **Jest**, accelerating feature delivery and simplifying onboarding for new engineers",
    ],
  },
  {
    id: "vatra",
    role: "Web Developer",
    company: "Vatra",
    period: "May 2022 - April 2024",
    current: false,
    icon: FaReact,
    responsibilities: [
      "Built an AI-powered cross-platform app with **Next.js** and **React Native**, delivering a seamless experience on mobile and web in a fast-paced startup",
      "Built backend features—including user profiles and real-time chat—by optimizing **GraphQL** queries and **MongoDB** with **Node.js** for fast, secure communication",
      "Built a fast-loading promotional landing page with **Next.js SSR**, achieving strong **SEO** and **Core Web Vitals** scores that drove more traffic to the startup",
      "Mapped user journeys as UI/UX designer and implemented interactive drag-and-drop dashboards with **React** to rapidly ship updates from customer feedback",
      "Built real-time voice chats powered by **Agentic AI** (**Vercel AI SDK**) with instant speech-to-text for a highly engaging conversational experience",
    ],
  },
];
