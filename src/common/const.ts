export const animationVariants = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: "some", once: true },
} as const;

export const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const

export const navigationItems = {
  home: {
    id: "home",
    href: "#home",
    label: 'Home'
  },
  projects: {
    id: "projects",
    href: "#projects",
    label: 'Projects'
  },
  experience: {
    id: "experience",
    href: "#experience",
    label: 'Experience'
  },
  skills: {
    id: "skills",
    href: "#skills",
    label: 'Skills'
  },
  contacts: {
    id: "contacts",
    href: "#contacts",
    label: 'Contacts'
  },
} as const;

export type NavigationKey = keyof typeof navigationItems;
export type SectionId = (typeof navigationItems)[NavigationKey]["id"];
