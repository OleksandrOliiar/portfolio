import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers";
import { Header } from "@/sections/Header";
import { ScrollToTop } from "@/ui";
import { ReactElement } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col overflow-hidden ">
            <Header />
            <main className="grow">{children}</main>
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  return {
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    title: "Oleksandr - Frontend Developer",
    description: "Welcome to my personal portfolio website, a showcase of my skills demonstrated through my projects, complete with contact information",
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: "/",
      languages: {
        uk: `https://${process.env.VERCEL_URL}/uk`,
      },
    },
    openGraph: {
      title: "Oleksandr - Frontend Developer",
      description: "Welcome to my personal portfolio website, a showcase of my skills demonstrated through my projects, complete with contact information",
      locale,
      authors: {
        name: "Oleksandr Oliiar",
      },
    },
    authors: {
      name: "Oleksandr Oliiar",
    },
  } as Metadata;
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#ea580c" },
  ],
  colorScheme: "dark light",
};
