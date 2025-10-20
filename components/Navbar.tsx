"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/ModeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  // { name: "Blog", href: "/blog" },
  // { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const linkHover = {
    hover: {
      y: -2,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <nav className="fixed top-0 w-full bg-[var(--color-background)] text-[var(--color-forground)] bg-opacity-70 backdrop-blur-md z-50 shadow-sm border-1  border-b-[#ffffffd1AR] ">
      <div className=" xl:mx-12 lg:mx-6 md:mx-4 sm:mx-2 px-auto flex justify-between items-center h-16 px-0 md:px-0">
        {/* Logo / Name */}
        <Link href="/">
          <h1 className="text-lg md:text-xl w-full  text-[var(--color-foreground)]">
            <span className="font-medium tracking-widest">DeviceIR</span>
            <span className=" bg-opacity-70 backdrop-blur-md z-50 text-xl text-[#A7ABAE]">
              {" "}
              — Web Developer
            </span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="flex gap-4 items-center justify-end">
          <ul className="hidden md:flex gap-8 items-center bg-opacity-70 backdrop-blur-md z-50 font-medium">
            {navLinks.map((link) => (
              <motion.li
                key={link.href}
                variants={linkHover}
                whileHover="hover"
              >
                <Link
                  href={link.href}
                  className="  text-[var(--color-forground)] hover:text-[var(--color-foreground)] transition-colors text-lg"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="flex gap-2">
            <ModeToggle />
            <div className=" md:block ">
              <Button variant="outline">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
