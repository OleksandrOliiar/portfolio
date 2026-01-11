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
    value: "github.com/OleksandrOliiar",
    href: "https://github.com/OleksandrOliiar",
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
    value: "+1 (647) 889-6507",
    href: "tel:+16478896507",
    color: "text-green-500",
  },
] as const;
