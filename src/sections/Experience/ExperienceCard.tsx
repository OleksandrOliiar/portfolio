import { motion } from "framer-motion";
import { FiCheckCircle, FiCalendar } from "react-icons/fi";
import { Experience } from "./const";

interface ExperienceCardProps {
  experience: Omit<Experience, "id">;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, current, period, responsibilities, role } = experience;

  return (
    <div className="relative">
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-md transition-all duration-300 ">
        {/* Gradient overlay */}
        <div className="from-primary/8 absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-5">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="h3 mb-1 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {role}
                </h3>
                <div className="text-xl font-bold text-primary">{company}</div>
              </div>

              {/* Date badge on the right */}
              <div className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
                <FiCalendar className="h-4 w-4 text-primary" />
                <span className="whitespace-nowrap text-sm font-bold text-primary">
                  {period}
                </span>
                {current && (
                  <span className="relative ml-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mb-5 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />

          {/* Responsibilities section with header */}
          <div>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className=" mt-[5.5px] h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="leading-relaxed text-muted-foreground">
                    {responsibility}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
