import { IconType } from "react-icons/lib";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiGithub,
  SiWebpack,
  SiShadcnui,
  SiTestinglibrary,
  SiReactquery,
  SiNodedotjs 
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
    id: "javascript",
    title: "Javascript",
    Icon: SiJavascript,
  },
  {
    id: "typescript",
    title: "Typescript",
    Icon: SiTypescript,
  },
  {
    id: "react",
    title: "React.js",
    Icon: SiReact,
  },
  {
    id: "nextjs",
    title: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    id: "redux",
    title: "Redux",
    Icon: SiRedux,
  },
  {
    id: "reactQuery",
    title: "React Query",
    Icon: SiReactquery,
  },
  {
    id: "testing",
    title: "Testing",
    Icon: SiTestinglibrary,
  },
  {
    id: "webpack",
    title: "Webpack",
    Icon: SiWebpack,
  },
  {
    id: "nodejs",
    title: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    id: "github",
    title: "Github",
    Icon: SiGithub,
  },
];
