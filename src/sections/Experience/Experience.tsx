"use client";

import { navigationItems } from "@/common/const";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import { HiSparkles } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "./const";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const { ref } = useSectionInView("experience", 0.25);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      id={navigationItems.experience.id}
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
            <FaBriefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Career Journey</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="h2 mb-4 inline-block">
          <span className="relative">
            Work Experience
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

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative space-y-8"
      >
        {experiences.map((experience, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ExperienceCard 
              {...experience} 
              isLast={index === experiences.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
