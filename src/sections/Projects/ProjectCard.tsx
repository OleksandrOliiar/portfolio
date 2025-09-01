import Image, { StaticImageData } from "next/image";
import { Button } from "@/ui";
import Link from "next/link";
import { cn } from "@/common/utils";

type Props = {
  direction: "rtl" | "ltr";
  image: StaticImageData;
  categories: string[];
  title: string;
  description: string;
  siteLink: string;
  githubLink: string;
};

export default function ProjectCard({
  categories,
  description,
  githubLink,
  image,
  siteLink,
  title,
  direction,
}: Props) {
  return (
    <article className="flex flex-col items-center gap-7 md:flex-row">
      <div
        className={cn(
          "relative aspect-[9/6.1] w-full overflow-hidden md:basis-1/2",
          {
            "md:order-2": direction === "ltr",
            "md:order-1": direction === "rtl",
          },
        )}
      >
        <Link href={siteLink} target="_blank">
          <Image
            src={image}
            alt={title}
            fill
            className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
          />
        </Link>
      </div>
      <div
        className={cn("p-4 text-center md:basis-1/2 md:text-left", {
          "md:order-1": direction === "ltr",
          "md:order-2": direction === "rtl",
        })}
      >
        <ul className="mb-6 flex w-full items-center justify-center gap-4 md:justify-start">
          {categories.map((category) => (
            <li
              key={category}
              className="rounded-full bg-secondary px-4 py-[5px] text-sm font-semibold italic text-secondary-foreground"
            >
              {category}
            </li>
          ))}
        </ul>
        <h3 className="h4 mb-2.5 ">{title}</h3>
        <p
          className="mb-7 text-sm leading-7 tracking-wide text-muted-foreground md:text-base"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div className="flex items-center justify-center gap-1 md:justify-start">
          <Link href={siteLink} target="_blank">
            <Button variant="link">View site</Button>
          </Link>
          <Link href={githubLink} target="_blank">
            <Button variant="link">Github</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
