"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Link from "next/link";
export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Elevate",
      className:"text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading",
    },
    {
        text: "your",
        className:"text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading",
    },
    {
      text: "social",
      className:"text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading",
    },
    {
        text: "media",
        className:"text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading",
    },
    {
      text: "game",
      className:"text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading",
    },
    {
      text: "with",
      className:"text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading",
    },
    {
      text: "KORA.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">

      <TypewriterEffect words={words} />
      <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
      The ultimate resource for brands and businesses to elevate their social media performance and achieve measurable growth.
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
      <Link href="/app">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        </Link>
        <Link href="/app">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
        </Link>
      </div>
    </div>
  );
}
