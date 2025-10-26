"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface ProjectFooterProps {
  github: string;
  onReadMore: () => void;
  tech?: string[]; // ✅ add tech stack support
}

export default function ProjectFooter({
  github,
  onReadMore,
  tech = [],
}: ProjectFooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-neutral-200 bg-[var(--color-background)] p-4 shadow-md dark:border-neutral-700 md:flex-row md:items-center"
    >
      {/* GitHub + Read More */}
      <div className="flex items-center gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[var(--color-foreground)] hover:text-blue-500 transition-colors"
        >
          <FaGithub className="h-4 w-4" />
          View Code
        </a>
        <button
          onClick={onReadMore}
          className="rounded-md border border-[var(--color-foreground)] px-3 py-1 text-xs font-medium text-[var(--color-foreground)] transition hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
        >
          Read More
        </button>
      </div>

      {/* Tech Stack */}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-300">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
