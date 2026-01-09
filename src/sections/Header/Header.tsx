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
      className="fixed left-0 top-0 z-50 w-full border-b border-border/40 bg-background/80 py-3 backdrop-blur-md"
    >
      <div className="container">
        {/* Desktop layout - 3 column grid for perfect centering */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
          {/* Left section */}
          <div className="flex items-center justify-start">
            <Logo />
          </div>
          
          {/* Center section - Navigation */}
          <div className="flex justify-center">
            <Navigation />
          </div>
          
          {/* Right section */}
          <div className="flex items-center justify-end gap-3">
            <ThemeToggle />
            <Button asChild className="shadow-lg shadow-primary/25">
              <Link href="#contacts">Contact me</Link>
            </Button>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center gap-3">
            <SidebarNavigation />
            <Logo />
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="#contacts">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
