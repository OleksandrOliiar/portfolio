import { useActiveSection } from "@/common/providers/ActiveSection";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionId } from "../const";

export const useSectionInView = (sectionId: SectionId, amount: number) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionId);
    }
  }, [isInView, setActiveSection, sectionId, timeOfLastClick]);

  return { ref };
};
