"use client";

import React from "react";
import CV from "./CV";
import { CircleFadingArrowUpIcon } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  return (
    <div className="p-8 flex flex-col items-center gap-4">
      {/* Download button */}
      {/* Download button */}
      <Link
        href="/ErfanBastaniCV-2025.pdf"
        download
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
      >
        <CircleFadingArrowUpIcon />
        Download CV
      </Link>
      {/* Render the CV */}
      <div className="w-full">
        <CV />
      </div>
    </div>
  );
}
