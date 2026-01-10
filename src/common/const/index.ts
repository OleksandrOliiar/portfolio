export const navigationItems = {
  home: {
    id: "home",
    href: "#home",
    label: "Home",
  },
  projects: {
    id: "projects",
    href: "#projects",
    label: "Projects",
  },
  experience: {
    id: "experience",
    href: "#experience",
    label: "Experience",
  },
  skills: {
    id: "skills",
    href: "#skills",
    label: "Skills",
  },
  contacts: {
    id: "contacts",
    href: "#contacts",
    label: "Contacts",
  },
} as const;

export type NavigationKey = keyof typeof navigationItems;
export type SectionId = (typeof navigationItems)[NavigationKey]["id"];
