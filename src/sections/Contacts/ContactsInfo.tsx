"use client";

import Link from "next/link";
import { LuGithub, LuPhone } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactsInfo() {
  const contactItems = [
    {
      icon: LuGithub,
      label: "GitHub",
      value: "github.com/Fall3n4ngle",
      href: "https://github.com/Fall3n4ngle",
      color: "text-purple-500",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/oleksandr-oliiar",
      href: "https://www.linkedin.com/in/oleksandr-oliiar",
      color: "text-blue-500",
    },
    {
      icon: LuPhone,
      label: "Phone",
      value: "+38 (098) 025 3732",
      href: "tel:+380980253732",
      color: "text-green-500",
    },
  ];

  return (
    <div className="text-center md:text-start">
      <p className="lead mb-10 leading-relaxed">
        Feel free to reach out with any inquiries, collaborations, or projects!
        I&apos;m passionate about creating engaging web experiences and would
        love to connect with you.
      </p>

      <address className="flex flex-col items-center gap-4 md:items-start">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group w-full"
            >
              <Link
                href={item.href}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50 hover:shadow-lg"
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {/* Icon container */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 ${item.color}`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-0.5 overflow-hidden">
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    {item.value}
                  </span>
                </div>

                {/* Arrow indicator */}
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
            </motion.div>
          );
        })}
      </address>
    </div>
  );
}
