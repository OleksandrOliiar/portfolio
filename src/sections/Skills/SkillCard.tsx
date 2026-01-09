import { IconType } from "react-icons/lib";

type Props = {
  title: string;
  Icon: IconType;
};

export default function SkillCard({ Icon, title }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 shadow-lg backdrop-blur-sm">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5" />
      
      {/* Decorative corner element */}
      <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden opacity-50">
        <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-primary/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Icon container */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
          <div className="absolute inset-0 rounded-xl border-2 border-primary/20" />
          <Icon className="h-7 w-7 text-primary" />
        </div>

        {/* Title */}
        <p className="text-center text-sm font-semibold text-foreground sm:text-base">
          {title}
        </p>
      </div>
    </div>
  );
}
