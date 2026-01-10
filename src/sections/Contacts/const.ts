import { LuGithub, LuPhone } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface ContactsItem {
  id: string;
  icon: IconType;
  label: string;
  value: string;
  href: string;
  color: string;
}

export const contactsItems: ContactsItem[] = [
  {
    id: "github",
    icon: LuGithub,
    label: "GitHub",
    value: "github.com/Fall3n4ngle",
    href: "https://github.com/Fall3n4ngle",
    color: "text-purple-500",
  },
  {
    id: "linkedIn",
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/oleksandr-oliiar",
    href: "https://www.linkedin.com/in/oleksandr-oliiar",
    color: "text-blue-500",
  },
  {
    id: "phone",
    icon: LuPhone,
    label: "Phone",
    value: "+38 (098) 025 3732",
    href: "tel:+380980253732",
    color: "text-green-500",
  },
] as const;
