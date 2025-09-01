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
        <LuMenu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="flex w-full items-center justify-center bg-background min-[440px]:max-w-[384px]">
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
                        "text-text-primary/70 inline-block rounded-3xl px-10 py-2 text-xl transition-all",
                        isActive && "bg-primary text-primary-foreground",
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
