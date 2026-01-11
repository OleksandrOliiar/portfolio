"use client";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full min-h-screen w-full overflow-hidden">
      {/* Animated gradient orbs - distributed throughout the page */}
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,hsl(var(--foreground)/0.015)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.015)_1px,transparent_1px)]" />
    </div>
  );
}
