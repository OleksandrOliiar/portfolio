"use client";

import { navigationItems } from "@/common/const";
import { skills } from "./const";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import SkillCard from "./SkillCard";
import { HiSparkles } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { containerVariants } from "@/common/animations";

export default function Skills() {
  const { ref } = useSectionInView("skills", 1);

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
      id={navigationItems.skills.id}
      className="relative mb-36 scroll-mt-24"
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
            <FaTools className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Tech Stack</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="h2 mb-4 inline-block">
          <span className="relative">
            Skills & Technologies
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

      {/* Skills grid */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-6"
      >
        {skills.map((skill, id) => (
          <motion.li
            key={id}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <SkillCard {...skill} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
