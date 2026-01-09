import { NavigationKey, navigationItems } from "@/common/const";
import { cn } from "@/common/utils";
import { useActiveSection } from "@/providers";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navigation() {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <nav className="rounded-full border border-border/50 bg-card/50 px-3 py-2 shadow-lg backdrop-blur-md">
      <ul className="flex items-center gap-1">
        {Object.keys(navigationItems).map((key) => {
          const { href, label, id } = navigationItems[key as NavigationKey];
          const isActive = id === activeSection;

          return (
            <li key={id}>
              <Link
                href={href}
                className={cn(
                  "relative z-20 inline-block rounded-full px-4 py-2 text-sm font-medium transition-all hover:text-foreground",
                  isActive
                    ? "text-primary-foreground hover:text-primary-foreground"
                    : "text-muted-foreground",
                )}
                onClick={() => scrollToSection(id)}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-md shadow-primary/30"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
