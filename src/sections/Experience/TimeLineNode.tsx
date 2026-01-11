import { IconType } from "react-icons/lib";
import { cn } from "@/common/utils";

interface TimeLineNodeProps {
  isCurrent: boolean;
  Icon: IconType;
}

export default function TimeLineNode({ isCurrent, Icon }: TimeLineNodeProps) {
  return (
    <div className="relative flex h-9 w-9 items-center justify-center">
      {isCurrent && (
        <span className="absolute h-full w-full rounded-full bg-primary/30" />
      )}
      <div
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-full border-2",
          isCurrent
            ? "border-primary bg-primary shadow-lg shadow-primary/30"
            : "border-primary/50 bg-card"
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4",
            isCurrent ? "text-primary-foreground" : "text-primary"
          )}
        />
      </div>
    </div>
  );
}
