"use client";

import { animationVariants } from "@/common/const";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SidebarNavigation from "./SidebarNavigation";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { Button } from "@/ui";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      {...animationVariants}
      className="fixed left-0 top-0 z-50 w-full bg-background py-3"
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <SidebarNavigation />
          </div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild>
            <Link href="#contacts">Contact me</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
