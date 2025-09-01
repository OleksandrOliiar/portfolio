import Link from "next/link";
import { LuMail, LuPhone, LuGithub } from "react-icons/lu";

export default function ContactsInfo() {
  return (
    <div className="text-center md:text-start">
      <p className="lead mb-10">Feel free to reach out with any inquiries, collaborations, or projects!
      I&apos;m passionate about creating engaging web experiences and would
      love to connect with you.</p>
      <address className="flex flex-col items-center gap-2.5 md:items-start">
        <Link
          href="https://github.com/Fall3n4ngle"
          className="flex items-center gap-4"
          target="_blank"
        >
          <div className="p-3">
            <LuGithub className="h-6 w-6 " />
          </div>
          https://github.com/Fall3n4ngle
        </Link>
        <Link
          href="https://www.linkedin.com/in/oleksandr-oliiar"
          className="flex items-center gap-4"
          target="_blank"
        >
          <div className="p-3">
            <LuMail className="h-6 w-6 " />
          </div>
          www.linkedin.com/in/oleksandr-oliiar
        </Link>
        <Link href="tel:+380980253732" className="flex items-center gap-4">
          <div className="p-3">
            <LuPhone className="h-6 w-6 " />
          </div>
          +38 (098) 025 3732
        </Link>
      </address>
    </div>
  );
}
