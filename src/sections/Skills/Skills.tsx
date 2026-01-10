"use client";

import { navigationItems } from "@/common/const";
import { skills } from "./const";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import SkillCard from "./SkillCard";
import { FaTools } from "react-icons/fa";
import { containerVariants } from "@/common/animations";
import SectionHeading from "@/common/components/SectionHeading";

export default function Skills() {
  const { ref } = useSectionInView("skills", 1);

  return (
    <section
      ref={ref}
      id={navigationItems.skills.id}
      className="relative mb-36 scroll-mt-24"
    >
      <SectionHeading
        icon={<FaTools className="h-4 w-4 text-primary" />}
        title="Tech Stack"
        subTitle="Skills & Technologies"
      />
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
