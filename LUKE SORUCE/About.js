"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import lukeImg from "../images/luke.jpg"; // adjust path if needed

interface ParagraphData {
  aboutMes: {
    aboutMeParagraph: { html: string },
    developmentParagraph: { html: string },
  }[];
}

export default function About() {
  const [data, setData] = (useState < ParagraphData) | (null > null);

  // ✅ Fetch data from your GraphCMS (Hygraph)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api-YOUR-HYGRAPH-ENDPOINT", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              {
                aboutMes {
                  aboutMeParagraph { html }
                  developmentParagraph { html }
                }
              }
            `,
          }),
        });
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (!data) return <div className="text-center py-20 text-lg">Loading...</div>;

  return (
    <div>
      {/* --- What I Do Section --- */}
      <section className="from-green-400 to-blue-300 bg-gradient-to-r flex flex-wrap justify-between text-white mb-2 md:py-36 py-10 md:px-20 px-10 mt-5 rounded-3xl shadow-md transform -rotate-1">
        <div className="max-w-xl transform rotate-1">
          {/* Fade replacement with Framer Motion */}
          <motion.h1
            className="md:text-6xl text-5xl font-header font-bold pb-5 lg:pb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h1>
        </div>

        <div className="max-w-xl transform rotate-1">
          <div
            className="font-body md:text-xl text-lg md:leading-8"
            dangerouslySetInnerHTML={{
              __html: data.aboutMes[0].developmentParagraph.html,
            }}
          ></div>
        </div>
      </section>

      {/* --- About Me Section --- */}
      <section className="mt-24">
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl">
            {/* Use next/image for optimization */}
            <Image
              src={lukeImg}
              alt="luke headshot"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </div>

          <div className="max-w-xl">
            {/* Zoom replacement with Framer Motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="md:text-6xl text-5xl font-header font-bold mb-8">
                About Me
              </h1>
              <div
                className="font-body md:text-xl text-lg md:leading-8"
                dangerouslySetInnerHTML={{
                  __html: data.aboutMes[0].aboutMeParagraph.html,
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
