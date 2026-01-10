"use client";

import ProjectCard, { ProjectDirection } from "./ProjectCard";
import { projects } from "./const";
import { motion } from "framer-motion";
import { navigationItems } from "@/common/const";
import { containerVariants, itemVariants } from "@/common/animations";
import { useSectionInView } from "@/common/hooks";
import { FaCode } from "react-icons/fa";
import SectionHeading from "@/common/components/SectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      ref={ref}
      id={navigationItems.projects.id}
      className="relative mx-auto mb-36 scroll-mt-24"
    >
      <SectionHeading
        icon={<FaCode className="h-4 w-4 text-primary" />}
        title="My Work"
        subTitle="Featured Projects"
      />
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-24"
      >
        {projects.map(({ id, ...project }, index) => {
          const projectDirection: ProjectDirection =
            index % 2 === 0 ? "rtl" : "ltr";

          return (
            <motion.li key={id} variants={itemVariants}>
              <ProjectCard project={project} direction={projectDirection} />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
