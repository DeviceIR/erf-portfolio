import React from "react";

import { personalInfo, coreSkills, softSkills } from "./CVdata";
import Header from "./ui/Header";
import Summary from "./ui/Summary";
import SkillList from "./ui/SkillList";
import Notes from "./ui/Notes";
import Experience from "./ui/Experience";

export default function CV() {
  return (
    <main className="max-w-3xl mx-auto my-10 p-10 bg-accent text-foreground shadow-lg rounded-md border border-neutral-200">
      {/* Header */}
      <Header />

      {/* Professional summary */}
      <Summary />

      {/* Skills */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillList title="Core Skills" items={coreSkills} />
        <SkillList title="Soft Skills" items={softSkills} />
      </section>

      {/* Experience */}
      <Experience />

      {/* Education & Notes */}
      <Notes />

      <footer className="text-xs text-neutral-500 text-center border-t border-neutral-200 pt-4">
        © {personalInfo.name}
      </footer>
    </main>
  );
}
