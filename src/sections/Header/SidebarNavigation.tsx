import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/ui";
import { cn } from "@/common/utils";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
import { NavigationKey, navigationItems } from "@/common/const";
import { useActiveSection } from "@/providers";
import { motion } from "framer-motion";

export default function SidebarNavigation() {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:bg-card">
          <LuMenu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex w-full items-center justify-center bg-background/95 backdrop-blur-xl min-[440px]:max-w-[384px]">
        <nav>
          <ul className="flex flex-col items-center gap-3">
            {Object.keys(navigationItems).map((key, index) => {
              const { href, id, label } = navigationItems[key as NavigationKey];
              const isActive = id === activeSection;

              return (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link href={href} onClick={() => scrollToSection(id)}>
                    <SheetClose
                      className={cn(
                        "inline-block rounded-full px-10 py-3 text-xl font-medium transition-all hover:scale-105",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                          : "text-muted-foreground hover:bg-card/50 hover:text-foreground",
                      )}
                    >
                      {label}
                    </SheetClose>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
