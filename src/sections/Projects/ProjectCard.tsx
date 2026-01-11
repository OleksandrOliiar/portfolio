import Image from "next/image";
import { Button } from "@/common/ui";
import { HighlightedText } from "@/common/components";
import Link from "next/link";
import { cn } from "@/common/utils";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { Project } from "./const";

export type ProjectDirection = "rtl" | "ltr";
interface ProjectCardProps {
  project: Omit<Project, "id">;
  direction: ProjectDirection;
}

export default function ProjectCard({ direction, project }: ProjectCardProps) {
  const { categories, description, githubLink, image, siteLink, title } =
    project;

  return (
    <article className="flex flex-col items-center gap-8 md:flex-row">
      {/* Image container with hover effects */}
      <div
        className={cn(
          "relative aspect-[9/6] w-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-lg backdrop-blur-sm md:basis-1/2",
          {
            "md:order-2": direction === "ltr",
            "md:order-1": direction === "rtl",
          },
        )}
      >
        <Link
          href={siteLink}
          target="_blank"
          className="group block h-full w-full"
        >
          {/* Image with overlay - CSS-only theme switching */}
          <div className="relative h-full w-full">
            {/* Light theme image */}
            <Image
              src={image.light}
              alt={title}
              fill
              className="absolute left-0 top-0 h-full w-full object-cover dark:hidden"
            />
            {/* Dark theme image */}
            <Image
              src={image.dark}
              alt={title}
              fill
              className="absolute left-0 top-0 hidden h-full w-full object-cover dark:block"
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* View project icon overlay - always visible on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/50">
                <FiArrowUpRight className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </Link>
      </div>

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
            <li
              key={category}
              className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm transition-all"
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Title */}
        <h3 className="h3 mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          <HighlightedText text={description} highlightClassName="font-bold" />
        </p>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <Link href={siteLink} target="_blank">
            <Button className="gap-2 shadow-md shadow-primary/25">
              <FiExternalLink className="h-4 w-4" />
              <span>View Site</span>
            </Button>
          </Link>
          <Link href={githubLink} target="_blank">
            <Button
              variant="secondary"
              className="gap-2 shadow-sm backdrop-blur-sm"
            >
              <LuGithub className="h-4 w-4" />
              <span>GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
