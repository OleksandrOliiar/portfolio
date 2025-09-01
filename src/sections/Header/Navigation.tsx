import { NavigationKey, navigationItems } from "@/common/const";
import { cn } from "@/common/utils";
import { useActiveSection } from "@/providers";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navigation() {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <nav className="rounded-3xl bg-secondary px-2.5 py-1.5">
      <ul className="flex items-center gap-2 ">
        {Object.keys(navigationItems).map((key) => {
          const { href, label, id } = navigationItems[key as NavigationKey];
          const isActive = id === activeSection;

          return (
            <li key={id}>
              <Link
                href={href}
                className={cn(
                  "relative z-20 inline-block rounded-3xl px-[15px] py-[5px] text-muted-foreground transition-all hover:text-foreground",
                  isActive &&
                    "text-primary-foreground hover:text-primary-foreground",
                )}
                onClick={() => scrollToSection(id)}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10 rounded-3xl bg-primary"
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
