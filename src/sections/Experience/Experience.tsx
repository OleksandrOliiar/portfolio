"use client";

import { navigationItems } from "@/common/const";
import { containerVariants, itemVariants } from "@/common/animations";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "./const";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "@/common/components/SectionHeading";

export default function Experience() {
  const { ref } = useSectionInView("experience", 0.25);

  return (
    <section
      ref={ref}
      id={navigationItems.experience.id}
      className="relative mx-auto mb-36 scroll-mt-24"
    >
      <SectionHeading
        icon={<FaBriefcase className="h-4 w-4 text-primary" />}
        title="Career Journey"
        subTitle="Work Experience"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative space-y-8"
      >
        {experiences.map(({ id, ...experience }) => (
          <motion.div key={id} variants={itemVariants}>
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
