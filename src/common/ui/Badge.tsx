import { ReactNode } from "react";

interface BadgeProps {
  icon: ReactNode;
  title: string;
}

export function Badge({ icon, title }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm backdrop-blur-sm">
      {icon}
      {title}
    </div>
  );
}
