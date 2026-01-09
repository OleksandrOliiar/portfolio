"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/ui";
import Link from "next/link";
import { cn } from "@/common/utils";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";

type Props = {
  direction: "rtl" | "ltr";
  image: StaticImageData;
  categories: string[];
  title: string;
  description: string;
  siteLink: string;
  githubLink: string;
};

export default function ProjectCard({
  categories,
  description,
  githubLink,
  image,
  siteLink,
  title,
  direction,
}: Props) {
  return (
    <article className="group flex flex-col items-center gap-8 md:flex-row">
      {/* Image container with hover effects */}
      <motion.div
        className={cn(
          "relative aspect-[9/6.1] w-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-lg backdrop-blur-sm transition-all duration-500 md:basis-1/2",
          {
            "md:order-2": direction === "ltr",
            "md:order-1": direction === "rtl",
          },
        )}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link href={siteLink} target="_blank" className="block h-full w-full">
          {/* Image with overlay */}
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* View project icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm"
              >
                <FiArrowUpRight className="h-8 w-8 text-primary-foreground" />
              </motion.div>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden">
            <div className="absolute -right-10 -top-10 h-20 w-20 rotate-45 bg-primary/10" />
          </div>
        </Link>
      </motion.div>

      {/* Content container */}
      <div
        className={cn("p-4 text-center md:basis-1/2 md:text-left", {
          "md:order-1": direction === "ltr",
          "md:order-2": direction === "rtl",
        })}
      >
        {/* Category tags */}
        <ul className="mb-6 flex w-full flex-wrap items-center justify-center gap-2 md:justify-start">
          {categories.map((category, index) => (
            <motion.li
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/20"
            >
              {category}
            </motion.li>
          ))}
        </ul>

        {/* Title */}
        <h3 className="h3 mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Description */}
        <p
          className="mb-8 text-base leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <Link href={siteLink} target="_blank">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button className="group/btn gap-2 shadow-md shadow-primary/25">
                <FiExternalLink className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                <span>View Site</span>
              </Button>
            </motion.div>
          </Link>
          <Link href={githubLink} target="_blank">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="secondary" className="group/btn gap-2 shadow-sm backdrop-blur-sm">
                <LuGithub className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                <span>GitHub</span>
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </article>
  );
}
