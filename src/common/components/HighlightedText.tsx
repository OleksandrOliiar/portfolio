import { cn } from "@/common/utils";

interface HighlightedTextProps {
  text: string;
  highlightClassName?: string;
}

// Parse text with **highlighted** markers and render with styled spans
export default function HighlightedText({
  text,
  highlightClassName = "font-semibold text-foreground",
}: HighlightedTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const content = part.slice(2, -2);

          return (
            <strong key={index} className={cn(highlightClassName)}>
              {content}
            </strong>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
