import { motion } from "framer-motion";
import { contactsItems } from "./const";
import ContactsItemCard from "./ContactsItemCard";

export default function ContactsInfo() {
  return (
    <div className="text-center md:text-start">
      <address className="flex flex-col items-center gap-4 md:items-start">
        {contactsItems.map(({ id, ...contactsItem }, index) => {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group w-full"
            >
              <ContactsItemCard key={id} contactsItem={contactsItem} />
            </motion.div>
          );
        })}
      </address>
    </div>
  );
}
