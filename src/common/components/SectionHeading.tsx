import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Badge } from "../ui";

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

interface SectionHeadingProps {
  icon: ReactNode;
  title: string;
  subTitle: string;
}

export default function SectionHeading({
  icon,
  subTitle,
  title,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative mb-20 text-center"
    >
      <div className="mb-4 flex justify-center">
        <Badge icon={icon} title={title} />
      </div>
      <h2 className="h2 mb-4 inline-block">
        <span className="relative">
          {subTitle}
          <motion.span
            className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </span>
      </h2>
    </motion.div>
  );
}
