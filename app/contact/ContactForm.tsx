"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaCodepen } from "react-icons/fa";

interface ContactFormProps {
  email: string;
  phone: string;
  paragraph: string; // HTML content
  github?: string;
  twitter?: string;
  codepen?: string;
  author?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  email,
  phone,
  paragraph,
  github = "https://github.com/",
  twitter = "https://twitter.com/",
  codepen = "https://codepen.io/",
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

    // Here you can later connect this to an API route or Email service
    console.log("Form submitted:", formData);

    setStatus("Message sent successfully!");
    setFormData({ name: "", userEmail: "", message: "" });

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="get-in-touch"
      className="  grid grid-cols-2 justify-between  md:py-32 py-10 md:px-20 px-10 transform rotate-1 rounded-3xl shadow-md"
    >
      {/* --- Left Side --- */}
      <div className="max-w-xl transform -rotate-1 mb-10 md:mb-0 flex flex-col justify-center space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:text-6xl text-4xl font-header font-bold pb-2 text-[var(--color-foreground)]"
        >
          Want to{" "}
          <span className="text-[var(--color-foreground, #60a5fa)]">Work?</span>
        </motion.h1>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-2 text-lg text-[var(--color-foreground)]"
        >
          <p className="flex items-center gap-2">
            <span className="font-semibold text-[var(--color-accent, #60a5fa)]">
              Email:
            </span>{" "}
            {email}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold text-[var(--color-accent, #60a5fa)]">
              Phone:
            </span>{" "}
            {phone}
          </p>
        </motion.div>

        {/* Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-body text-[var(--color-muted-foreground)] text-lg leading-7"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></motion.div>

        {/* Social Icons */}
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
          className="flex flex-wrap mt-6 gap-6"
        >
          {[
            { icon: FaGithub, link: github, color: "hover:text-gray-400" },
            { icon: FaTwitter, link: twitter, color: "hover:text-blue-400" },
            { icon: FaCodepen, link: codepen, color: "hover:text-gray-300" },
          ].map(({ icon: Icon, link, color }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className={`transition duration-300 ${color}`}
            >
              <Icon className="text-white text-[35px]" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* --- Right Side: Contact Form --- */}
      <div className="w-full  transform -rotate-1 bg-[var(--color-card-background)] rounded-2xl p-8 shadow-md ">
        <h2 className="text-3xl font-semibold mb-6 text-center">
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
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="email"
            name="userEmail"
            placeholder="Your Email"
            value={formData.userEmail}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-md"
          >
            Send Message
          </button>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center"
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
