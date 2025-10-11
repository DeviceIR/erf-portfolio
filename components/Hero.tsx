"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 bg-[var(--color-background)] text-[var(--color-forground)]">
      {/* Main headline */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold bg-[var(--color-background)] text-[var(--color-forground)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I’m <span className="text-blue-500">Erfan</span>.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl bg-[var(--color-background)] text-[var(--color-forground)] max-w-2xl"
      >
        Next.js developer shaping interfaces that feel as good as they look.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-[var(--color-background)] text-[var(--color-forground)] rounded-xl font-medium hover:bg-gray-200 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-gray-600 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-xl hover:border-gray-300 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
