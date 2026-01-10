import { IconType } from "react-icons/lib";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSanity,
  SiGithub,
  SiWebpack,
} from "react-icons/si";

export interface Skill {
  id: string;
  title: string;
  Icon: IconType;
}

export const skills: Skill[] = [
  {
    id: "html",
    title: "Html",
    Icon: SiHtml5,
  },
  {
    id: "css",
    title: "Css",
    Icon: SiCss3,
  },
  {
    id: "sass",
    title: "Sass",
    Icon: SiSass,
  },
  {
    id: "javascript",
    title: "Javascript",
    Icon: SiJavascript,
  },
  {
    id: "react",
    title: "React.js",
    Icon: SiReact,
  },
  {
    id: "redux",
    title: "Redux",
    Icon: SiRedux,
  },
  {
    id: "typescript",
    title: "Typescript",
    Icon: SiTypescript,
  },
  {
    id: "nextjs",
    title: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    id: "tailwind",
    title: "Tailwind",
    Icon: SiTailwindcss,
  },
  {
    id: "sanity",
    title: "Sanity",
    Icon: SiSanity,
  },
  {
    id: "webpack",
    title: "Webpack",
    Icon: SiWebpack,
  },
  {
    id: "github",
    title: "Github",
    Icon: SiGithub,
  },
];
