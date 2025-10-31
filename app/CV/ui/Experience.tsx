import React from "react";
import { experience, projects } from "../CVdata";
import ProjectItem from "./ProjectItem";

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold border-b border-neutral-200 pb-1 mb-3">
        Projects & Experience
      </h2>
      <div className="mb-6">
        <h3 className="font-semibold">{experience.company}</h3>
        <p className="text-xs text-muted-foreground">{experience.date}</p>
        <ul className="text-sm mt-2 list-disc list-inside space-y-1">
          {experience.details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {projects.map((p, i) => (
          <ProjectItem key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
