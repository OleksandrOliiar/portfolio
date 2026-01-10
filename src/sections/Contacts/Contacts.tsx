"use client";

import { navigationItems } from "@/common/const";
import { containerVariants, itemVariants } from "@/common/animations";
import ContactsForm from "./ContactsForm";
import ContactsInfo from "./ContactsInfo";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import { FaEnvelope } from "react-icons/fa";
import SectionHeading from "@/common/components/SectionHeading";

export default function Contacts() {
  const { ref } = useSectionInView("contacts", 0.5);

  return (
    <section
      ref={ref}
      id={navigationItems.contacts.id}
      className="relative mx-auto mb-20 scroll-mt-24 md:mx-0"
    >
      <SectionHeading
        icon={<FaEnvelope className="h-4 w-4 text-primary" />}
        title="Get In Touch"
        subTitle="Let's Connect"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex flex-col-reverse items-start gap-10 md:flex-row md:gap-14"
      >
        <motion.div variants={itemVariants} className="w-full sm:basis-1/2">
          <ContactsForm />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="w-full sm:basis-1/2 min-[810px]:mt-7"
        >
          <ContactsInfo />
        </motion.div>
      </motion.div>
    </section>
  );
}
