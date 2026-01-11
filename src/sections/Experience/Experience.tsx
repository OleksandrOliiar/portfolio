"use client";

import { navigationItems } from "@/common/const";
import { containerVariants, itemVariants } from "@/common/animations";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "./const";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "@/common/components/SectionHeading";
import TimeLineNode from "./TimeLineNode";

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
      <div className="relative">
        {/* Timeline vertical line - animated reveal */}
        <div className="absolute left-3 top-2 hidden h-[calc(100%-16px)] w-0.5 md:left-4 md:block">
          {/* Background track */}
          <div className="absolute inset-0 bg-border/30" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary via-primary/50 to-primary/20"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          />
        </div>

        <div className="space-y-8">
          {experiences.map(({ id, ...experience }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="relative"
            >
              <div className="absolute -left-1 top-6 z-10 hidden md:left-0 md:block">
                <TimeLineNode isCurrent={experience.current} />
              </div>
              <div className="md:pl-14">
                <ExperienceCard experience={experience} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
