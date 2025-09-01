"use client";
 
import { useTheme } from "next-themes";
import ProjectCard from "./ProjectCard";
import { ProjectKey, projects } from "./const";
import { motion } from "framer-motion";
import { animationVariants, navigationItems } from "@/common/const";
import { useSectionInView } from "@/common/hooks";

export default function Projects() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      ref={ref}
      id={navigationItems.projects.id}
      className="mx-auto mb-36 scroll-mt-24"
    >
      <motion.h2 {...animationVariants} className="h2 mb-24 text-center">
        Projects
      </motion.h2>
      <ul className="flex flex-col gap-20">
        {Object.keys(projects).map((key, index) => {
          const { image, ...data } = projects[key as ProjectKey];

          return (
            <motion.li key={index} {...animationVariants}>
              <ProjectCard
                {...data}
                image={theme === "dark" ? image.dark : image.light}
                direction={index % 2 === 0 ? "rtl" : "ltr"}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
