"use client";

import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import Experience from "@/components/tabs/Experience";
import Education from "@/components/tabs/Education";
import Skills from "@/components/tabs/Skills";
import AboutMe from "@/components/tabs/Aboutme";
import { motion } from "framer-motion";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Experience");

  const tabContent: Record<string, React.ReactNode> = {
    Experience: <Experience />,
    Education: <Education />,
    Skills: <Skills />,
    "About me": <AboutMe />,
  };

  return (
    <section className="px-8 py-12 grid md:grid-cols-[2fr_5fr] gap-12 h-[800px]">
      {/* Buttons */}
      <div className="flex flex-col justify-start items-center">
        <h2 className="text-3xl font-bold mb-6 bg-[var(--color-background)] text-[var(--color-foreground)]">
          Why hire me?
        </h2>
        <div className="flex flex-col flex-wrap gap-4">
          {Object.keys(tabContent).map((tab) => (
            <Button
              key={tab}
              className={`px-6 py-3 w-full rounded ${
                activeTab === tab
                  ? "bg-green-500 text-[var(--color-foreground)] hover:bg-green-400"
                  : "bg-[var(--color-background)] text-[var(--color-foreground)] hover:border-2 hover:border-green-500 hover:bg-[var(--color-background)]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 5, x: 5 }}
        transition={{ duration: 0.4 }}
        className="h-full overflow-auto"
      >
        <h2 className="text-3xl font-bold mb-6 bg-[var(--color-background)] text-[var(--color-foreground)]">
          {activeTab}
        </h2>
        <div>{tabContent[activeTab]}</div>
      </motion.div>
    </section>
  );
}
