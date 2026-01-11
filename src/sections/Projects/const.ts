import messengerDark from "@/assets/projects/messenger-dark.png";
import messengerLight from "@/assets/projects/messenger-light.png";
import ecommerceLight from "@/assets/projects/ecommerce-light.png";
import ecommerceDark from "@/assets/projects/ecommerce-dark.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  categories: string[];
  title: string;
  description: string;
  githubLink: string;
  siteLink: string;
  image: {
    light: StaticImageData;
    dark: StaticImageData;
  };
}

export const projects: Project[] = [
  {
    id: "ecommerce",
    categories: ["Next.js", "Sanity", "Stripe"],
    title: "Ecommerce",
    description:
      "A fully functional ecommerce website that enables users to discover products they need through an advanced filtering system, add them to their cart, and make purchases. Application also features an admin dashboard which is accessible by <strong>/studio</strong> url.",
    githubLink: "https://github.com/OleksandrOliiar/ecommerce",
    siteLink: "https://ecommerce-amber-six.vercel.app",
    image: {
      light: ecommerceLight,
      dark: ecommerceDark,
    },
  },
  {
    id: "messenger",
    categories: ["Next.js", "Prisma", "Pusher"],
    title: "Messenger",
    description:
      "A group messaging app that uses Next.js and Pusher.js to enable realtime communication via text or file messages and audio-video conferences. It also allows users to have different roles in chats, such as viewer, editor or admin.",
    githubLink: "https://github.com/OleksandrOliiar/messanger-app",
    siteLink: "https://messanger-fawn.vercel.app/",
    image: {
      light: messengerLight,
      dark: messengerDark,
    },
  },
];
