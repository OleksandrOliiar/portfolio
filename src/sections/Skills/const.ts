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
  SiNodedotjs,
  SiPython,
  SiAmazonwebservices,
  SiGithubactions,
  SiPostgresql,
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
    id: "python",
    title: "Python",
    Icon: SiPython,
  },
  {
    id: "nodejs",
    title: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    id: "sql",
    title: "SQL",
    Icon: SiPostgresql,
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
    id: "aws",
    title: "AWS",
    Icon: SiAmazonwebservices,
  },
  {
    id: "github",
    title: "Github",
    Icon: SiGithub,
  },
  {
    id: "cicd",
    title: "CI/CD",
    Icon: SiGithubactions,
  },
];
