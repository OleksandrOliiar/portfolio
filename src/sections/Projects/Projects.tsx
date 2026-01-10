"use client";
 
import { useTheme } from "next-themes";
import ProjectCard from "./ProjectCard";
import { ProjectKey, projects } from "./const";
import { motion } from "framer-motion";
import { navigationItems } from "@/common/const";
import { useSectionInView } from "@/common/hooks";
import { FaCode } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function Projects() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("projects", 0.25);

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      id={navigationItems.projects.id}
      className="relative mx-auto mb-36 scroll-mt-24"
    >
      {/* Section header with decorative elements */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mb-20 text-center"
      >
        {/* Decorative badge */}
        <div className="mb-4 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <FaCode className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">My Work</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="h2 mb-4 inline-block">
          <span className="relative">
            Featured Projects
            {/* Decorative underline */}
            <motion.span
              className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </h2>
        {/* Decorative sparkle icons */}
        <motion.div
          animate={{
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-4 top-0 text-primary/40"
        >
          <HiSparkles className="h-6 w-6" />
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -left-4 top-0 text-primary/40"
        >
          <HiSparkles className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* Projects list */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-24"
      >
        {Object.keys(projects).map((key, index) => {
          const { image, ...data } = projects[key as ProjectKey];

          return (
            <motion.li key={index} variants={itemVariants}>
              <ProjectCard
                {...data}
                image={theme === "dark" ? image.dark : image.light}
                direction={index % 2 === 0 ? "rtl" : "ltr"}
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
