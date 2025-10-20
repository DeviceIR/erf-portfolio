"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

interface ContactFormProps {
  email: string;
  phone: string;
  paragraph: string;
  github?: string;
  instagram?: string;
  telegram?: string;
  author?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  email,
  phone,
  paragraph,
  github = "https://github.com/",
  instagram = "https://instagram.com/",
  telegram = "https://t.me/Senduro_Erf",
  author = "Erfan",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStatus("Message sent successfully!");
    setFormData({ name: "", userEmail: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="get-in-touch"
      className="relative overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)] py-16 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* --- Left Section --- */}
        <div className="flex flex-col justify-center space-y-6 transform -rotate-1">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-header leading-tight"
          >
            Want to{" "}
            <span className="underline underline-offset-4 decoration-[var(--color-foreground)]">
              Work?
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-3 text-lg"
          >
            <p className="flex items-center gap-2">
              <span className="font-semibold border-b border-[var(--color-foreground)]">
                Email:
              </span>
              <span className="opacity-90">{email}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold border-b border-[var(--color-foreground)]">
                Phone:
              </span>
              <span className="opacity-90">{phone}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[var(--color-foreground)]/80 text-lg leading-7"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />

          {/* Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.3, staggerChildren: 0.15 },
              },
            }}
            className="flex gap-6 mt-4"
          >
            {[
              { icon: FaGithub, link: github },
              { icon: GrInstagram, link: instagram },
              { icon: FaTelegramPlane, link: telegram },
            ].map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-[var(--color-background)] border border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition duration-300 shadow-sm"
              >
                <Icon className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* --- Right Section (Form) --- */}
        <div className="w-full transform -rotate-1 bg-[var(--color-background)] border border-[var(--color-foreground)] rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center border-b border-[var(--color-foreground)] pb-2">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-transparent border border-[var(--color-foreground)] text-[var(--color-foreground)] placeholder-[var(--color-foreground)]/50 focus:ring-2 focus:ring-[var(--color-foreground)] outline-none transition"
            />
            <input
              type="email"
              name="userEmail"
              placeholder="Your Email"
              value={formData.userEmail}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-transparent border border-[var(--color-foreground)] text-[var(--color-foreground)] placeholder-[var(--color-foreground)]/50 focus:ring-2 focus:ring-[var(--color-foreground)] outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded-md bg-transparent border border-[var(--color-foreground)] text-[var(--color-foreground)] placeholder-[var(--color-foreground)]/50 focus:ring-2 focus:ring-[var(--color-foreground)] outline-none transition"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[var(--color-foreground)] text-[var(--color-background)] hover:opacity-90 transition font-semibold py-3 rounded-md shadow-md"
            >
              Send Message
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-[var(--color-foreground)]/70 mt-2"
              >
                {status}
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
