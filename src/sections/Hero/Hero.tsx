"use client";

import { navigationItems } from "@/common/const";
import { containerVariants, itemVariants } from "@/common/animations";
import { useSectionInView } from "@/common/hooks";
import { Badge, Button } from "@/common/ui";
import { HighlightedText } from "@/common/components";
import { LuArrowDown, LuArrowDownToLine } from "react-icons/lu";
import { HiSparkles } from "react-icons/hi2";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const { ref } = useSectionInView("home", 0.75);

  return (
    <section
      ref={ref}
      id={navigationItems.home.id}
      className="relative flex h-screen max-h-[700px] scroll-mt-24 items-center"
    >
      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[850px] text-center"
      >
        {/* Greeting badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center"
        >
          <Badge
            icon={<HiSparkles className="h-4 w-4 text-primary" />}
            title="Welcome to my portfolio"
          />
        </motion.div>

        <motion.h3 variants={itemVariants} className="h3 mb-3">
          Hi, I&apos;m Oleksandr 👋
        </motion.h3>

        {/* Main title with gradient */}
        <motion.h1 variants={itemVariants} className="h1 mb-6">
          I&apos;m a{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-primary via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Frontend Developer
            </span>
            {/* Animated underline */}
            <motion.span
              className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary via-green-500 to-emerald-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="lead mx-auto mb-8 max-w-[700px] leading-relaxed"
        >
          <HighlightedText
            text="I have **3 years of experience** building responsive, optimized, SEO-friendly and accessible web applications using **React.js** and **Next.js**"
            highlightClassName="font-semibold text-foreground"
          />
        </motion.p>

        {/* Enhanced CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#projects">
            <div>
              <Button className="group gap-2 shadow-lg shadow-primary/25">
                <span>View Projects</span>
                <LuArrowDown className="h-5 w-5 transition-transform" />
              </Button>
            </div>
          </Link>
          <Link href="/CV_Oleksandr_Oliiar.pdf" target="_blank">
            <div>
              <Button
                variant="secondary"
                className="group gap-2 shadow-md backdrop-blur-sm"
              >
                <span>Download CV</span>
                <LuArrowDownToLine className="h-5 w-5 transition-transform" />
              </Button>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
