"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { GrInstagram } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 bg-[var(--color-background)] text-[var(--color-forground)]">
      {/* Main headline */}
      <motion.h3
        className="text-xl md:text-lg font-bold bg-[var(--color-background)] text-[var(--color-forground)] fade-in-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 5, x: 5 }}
        transition={{ duration: 0.4 }}
      >
        FrontEnd Developer
      </motion.h3>
      <motion.h1
        className="text-4xl md:text-6xl font-bold bg-[var(--color-background)] text-[var(--color-forground)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello I’m <span className="text-blue-500">Erfan</span>
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
        <Link
          href="https://drive.google.com/file/d/1huVu1ayio9u_1bS6lUrQ3zroIt52uNDm/view?usp=drive_link"
          className=" bg-[var(--color-background)] text-[var(--color-forground)] border-[var(--color--foreground)]
           border-3 px-6 py-2 rounded-3xl 
           font-medium  transition"
        >
          Download CV
        </Link>
        {/* <Link
          href="/contact"
          className="px-6 py-3 border border-gray-600 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-xl hover:border-gray-300 transition font-medium"
        >
          Contact Me
        </Link> */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.6 }}
          className="flex items-center justify-center gap-2"
        >
          <Link
            href=""
            className=" bg-[var(--color-background)] text-[var(--color-forground)] border-[var(--color--foreground)]
          border-1 w-8 h-8
          rounded-full 
          transition flex justify-center items-center "
          >
            <GrInstagram className=" w-4 h-4" />
          </Link>
          <Link
            href=""
            className=" bg-[var(--color-background)] text-[var(--color-forground)] border-[var(--color--foreground)]
          border-1 w-8 h-8
          rounded-full 
          transition flex justify-center items-center "
          >
            <BsGithub className=" w-4 h-4" />
          </Link>
          <Link
            href="https://t.me/Senduro_Erf"
            className=" bg-[var(--color-background)] text-[var(--color-forground)] border-[var(--color--foreground)]
          border-1 w-8 h-8
          rounded-full 
          transition flex justify-center items-center "
          >
            <FaTelegramPlane className=" w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
