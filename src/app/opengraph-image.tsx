import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const interSemiBold = fetch(
    new URL("../assets/fonts/Inter-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{ fontFamily: "Inter" }}
        tw="flex w-full h-full items-center justify-center"
      >
        <div tw="max-w-[800px] mx-auto">
          <h3 tw="h3 mb-2">Hi, I&apos;m Oleksandr 👋</h3>
          <h1 tw="h1 mb-5">I&apos;m a <strong className="text-primary">Frontend Developer</strong></h1>
          <p tw="lead">
          I specialize in building{" "}
          <strong>modern</strong>,
          <strong>responsive</strong>,{" "}
          <strong>fast</strong>,
          <strong>seo-friendly</strong> and{" "}
          <strong>accessible</strong> web-applications
          using <strong>React.js</strong> and{" "}
          <strong>Next.js</strong>
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
