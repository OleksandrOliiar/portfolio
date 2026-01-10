import { SectionId } from "@/common/const";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ActiveSectionContextType = {
  timeOfLastClick: number;
  scrollToSection: (id: SectionId) => void;
  activeSection: SectionId;
  setActiveSection: (href: SectionId) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export default function ActiveSectionProvider({ children }: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const scrollToSection = (name: SectionId) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        scrollToSection,
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSection = () => {
  const value = useContext(ActiveSectionContext);

  if (!value) {
    throw new Error(
      "Cannot access active section context outside active section provider",
    );
  }

  return value;
};
