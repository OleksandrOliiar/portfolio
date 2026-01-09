"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  // Floating orb animation variants
  const orbVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full min-h-screen overflow-hidden">
      {/* Animated gradient orbs - distributed throughout the page */}
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute -left-20 top-[10%] h-[400px] w-[400px] rounded-full bg-primary/20 blur-[100px]"
        style={{ animationDelay: "0s" }}
      />
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute -right-20 top-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/15 blur-[100px]"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute left-1/2 top-[35%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]"
        style={{ animationDelay: "4s" }}
      />
      
      {/* Middle section orbs */}
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute -left-32 top-[55%] h-[380px] w-[380px] rounded-full bg-emerald-500/15 blur-[100px]"
        style={{ animationDelay: "1.5s" }}
      />
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute -right-32 top-[65%] h-[320px] w-[320px] rounded-full bg-indigo-500/12 blur-[100px]"
        style={{ animationDelay: "3.5s" }}
      />
      
      {/* Bottom section orbs */}
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute left-1/4 top-[85%] h-[350px] w-[350px] rounded-full bg-cyan-500/12 blur-[100px]"
        style={{ animationDelay: "2.5s" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Floating geometric shapes - distributed throughout the page */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[10%] top-[12%] h-20 w-20 rounded-lg border-2 border-primary/20 bg-primary/5 backdrop-blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[8%] top-[25%] h-16 w-16 rounded-full border-2 border-blue-500/20 bg-blue-500/5 backdrop-blur-sm"
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[15%] top-[45%] h-12 w-12 rotate-45 border-2 border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
      />
      
      {/* Middle and bottom shapes */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[15%] top-[58%] h-14 w-14 rounded-lg border-2 border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[12%] top-[75%] h-10 w-10 rounded-full border-2 border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm"
      />
    </div>
  );
}
