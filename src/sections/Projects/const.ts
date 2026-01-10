import messengerDark from "@/assets/projects/messenger-dark.png";
import messengerLight from "@/assets/projects/messenger-light.png";
import ecommerceLight from "@/assets/projects/ecommerce-light.png";
import ecommerceDark from "@/assets/projects/ecommerce-dark.png";

export const projects = {
  ecommerce: {
    categories: ["Next.js", "Sanity", "Stripe"],
    title: "Ecommerce",
    description:
      "A fully functional ecommerce website that enables users to discover products they need through an advanced filtering system, add them to their cart, and make purchases. Application also features an admin dashboard which is accessible by <strong>/studio</strong> url.",
    githubLink: "https://github.com/Fall3n4ngle/ecommerce",
    siteLink: "https://ecommerce-amber-six.vercel.app",
    image: {
      light: ecommerceLight,
      dark: ecommerceDark,
    },
  },
  messenger: {
    categories: ["Next.js", "Prisma", "Pusher"],
    title: "Messenger",
    description:
      "A group messaging app that uses Next.js and Pusher.js to enable realtime communication via text or file messages and audio-video conferences. It also allows users to have different roles in chats, such as viewer, editor or admin.",
    githubLink: "https://github.com/Fall3n4ngle/messenger",
    siteLink: "https://messanger-lovat.vercel.app/",
    image: {
      light: messengerLight,
      dark: messengerDark,
    },
  },
};

export type ProjectKey = keyof typeof projects;
