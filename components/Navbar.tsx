"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/ModeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
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
    <nav className="fixed top-0 w-full bg-[var(--color-background)] text-[var(--color-forground)] bg-opacity-70 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-0 md:px-0">
        {/* Logo / Name */}
        <Link href="/">
          <h1 className="text-lg md:text-xl w-full  text-[var(--color-foreground)]">
            <span>Erfan</span>
            <span className=" bg-opacity-70 backdrop-blur-md z-50 text-xl text-[#A7ABAE]">
              {" "}
              — Web Developer
            </span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center bg-opacity-70 backdrop-blur-md z-50font-medium">
          {navLinks.map((link) => (
            <motion.li key={link.href} variants={linkHover} whileHover="hover">
              <Link
                href={link.href}
                className="hover:text-white transition-colors"
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
    </nav>
  );
}
