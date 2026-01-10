import Link from "next/link";
import { ContactsItem } from "./const";
import { motion } from "framer-motion";

interface ContactsItemProps {
  contactsItem: Omit<ContactsItem, "id">;
}

export default function ContactsItemCard({ contactsItem }: ContactsItemProps) {
  const { color, href, icon: Icon, label, value } = contactsItem;

  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/60 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 ${color}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex flex-col gap-0.5 overflow-hidden">
        <span className="text-xs font-medium text-muted-foreground">
          {label}
        </span>
        <span className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {value}
        </span>
      </div>
      <motion.div
        className="ml-auto text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.div>
    </Link>
  );
}
