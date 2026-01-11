import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="#home" className="group relative">
      <motion.div className="flex items-center gap-3">
        {/* Logo mark with initials */}
        <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/70 p-[2px] shadow-lg shadow-primary/30 transition-all duration-300 group-hover:shadow-primary/40">
          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background">
            <span className="bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-lg font-bold text-transparent">
              OO
            </span>
          </div>
        </div>

        {/* Name text */}
        <div className="hidden flex-col gap-0.5 text-sm leading-tight lg:flex">
          <span className="font-bold text-foreground">Oleksandr Oliiar</span>
          <span className="text-xs text-muted-foreground">
            Frontend Developer
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
