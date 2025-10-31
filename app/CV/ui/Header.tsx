import Link from "next/link";
import React from "react";
import { personalInfo } from "../CVdata";

import { BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <header className="mb-8 border-b border-neutral-200 pb-4 text-center">
      <h1 className="text-2xl font-bold tracking-tight">{personalInfo.name}</h1>
      <p className="text-2xl text-foreground mt-1">{personalInfo.title}</p>
      <div className="mt-3 flex flex-wrap justify-center items-center gap-4 text-sm">
        {/* <span>📧 {personalInfo.email}</span> */}
        <Link
          href={`mailto:${personalInfo.email}`}
          className="text-sm text-foreground hover:underline"
        >
          📧 {personalInfo.email}
        </Link>

        {/* <span>📱 {personalInfo.phone}</span> */}
        <Link
          href={`tel:${personalInfo.phone}`}
          className="text-foreground hover:underline"
        >
          📱 {personalInfo.phone}
        </Link>

        <Link
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--color-muted)] text-[var(--color-foreground)] border border-[var(--color-foreground)]
                 px-3 py-1 rounded-full flex items-center gap-2 transition"
        >
          <BsGithub className="w-4 h-4" />
          <span>GitHub</span>
        </Link>
      </div>
    </header>
  );
}
