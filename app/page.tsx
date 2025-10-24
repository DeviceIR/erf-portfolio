"use client";

import Hero from "@/components/Hero";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen m-0 p-0 flex-col">
      <Hero />
      {/* <About />
      <Projects /> */}
    </main>
  );
}
