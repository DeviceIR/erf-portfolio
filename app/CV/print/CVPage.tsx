"use client";

import React from "react";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";

export const personalInfo = {
  name: "Erfan Bastani",
  title: "Front-End Developer (React & Modern Web Technologies)",
  email: "erfanbastani1201@gmail.com",
  phone: "+98-917-724-8591",
  github: "https://github.com/DeviceIR",
};

export const summary =
  "Motivated front-end developer with over 2 years of hands-on project experience through university work and self-learning. Proficient in modern JavaScript frameworks, responsive UI design, and deployment workflows. Skilled at turning ideas into functional, polished products. Fast learner and problem-solver, eager to contribute to real-world teams.";

export const coreSkills = [
  "HTML5, CSS3, JavaScript (ES6+)",
  "React.js, Redux, Next.js, Vue.js",
  "Tailwind CSS, Responsive Design, UI/UX Principles",
  "Git & GitHub, Vercel, Netlify, Postman",
  "RESTful APIs, Context API, TypeScript (learning)",
];

export const softSkills = [
  "Teamwork & Collaboration",
  "Problem Solving",
  "Adaptability & Continuous Learning",
  "Time Management",
  "Communication",
];

export const experience = {
  company: "Front-End Intern — DaryaTech Solutions (Bushehr)",
  date: "March 2023 – June 2023",
  details: [
    "Assisted in building responsive company dashboards using React & Tailwind CSS.",
    "Collaborated with backend team to integrate RESTful APIs.",
    "Gained hands-on experience with Agile workflows and GitHub version control.",
  ],
};

export const projects = [
  {
    title: "Typing Competition",
    tech: "Next.js, React, MongoDB, Socket.io, Framer Motion, CSS",
    desc: "A real-time multiplayer typing challenge where users race live against each other. Built with Next.js and Socket.io for real-time communication, MongoDB for data storage, and Framer Motion for modern animations.",
    link: "https://github.com/DeviceIR/Typing-Competition",
  },
  {
    title: "UsePopCorn",
    tech: "React, JavaScript, APIs, CSS Modules, Responsive Design",
    desc: "A fun, interactive movie discovery app that fetches real movie data and allows users to rate and favorite movies. Built with custom hooks and modular components for scalability.",
    link: "https://github.com/DeviceIR/usepopcorn",
  },
  {
    title: "Fast Pizza (Course Project)",
    tech: "React, JavaScript, HTML, CSS",
    desc: "A React-based pizza ordering app with real-time order tracking and dynamic cart management. Showcases advanced React state handling and reusable UI design.",
    link: "https://github.com/DeviceIR/fast-react-pizza-v2",
  },
  {
    title: "Bankist App",
    tech: "HTML, CSS, JavaScript (ES6), DOM Manipulation, Animations",
    desc: "A modern banking app clone simulating real transaction flows and dashboards. Designed to highlight interactive UI, animation effects, and responsive layouts.",
    link: "https://github.com/DeviceIR/Bankist",
  },
  {
    title: "Workout Timer",
    tech: "HTML, CSS, JavaScript",
    desc: "A sleek workout timing app for tracking exercise and rest intervals. Focused on usability, clear visuals, and performance optimization.",
    link: "https://github.com/DeviceIR/workout-timer",
  },
];

export const education =
  "Bachelor’s in Computer Engineering — Khalij Fars University, Bushehr (2018–2023)";

export const notes =
  "Open to mid-level and freelance opportunities. Passionate about front-end innovation, UI quality, and performance optimization.";

interface ProjectItemProps {
  title: string;
  tech: string;
  desc: string;
  link: string;
}

export default function CVPage() {
  return (
    <div className="p-8">
      <main className="max-w-3xl mx-auto my-10 p-10 bg-accent text-foreground shadow-lg rounded-md border border-neutral-200">
        {/* Header */}
        <header className="mb-8 border-b border-neutral-200 pb-4 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            {personalInfo.name}
          </h1>
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

        {/* Professional summary */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold border-b border-neutral-200 pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed">{summary}</p>
        </section>

        {/* Skills */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillList title="Core Skills" items={coreSkills} />
          <SkillList title="Soft Skills" items={softSkills} />
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold border-b border-neutral-200 pb-1 mb-3">
            Projects & Experience
          </h2>
          <div className="mb-6">
            <h3 className="font-semibold">{experience.company}</h3>
            <p className="text-xs text-muted-foreground">{experience.date}</p>
            <ul className="text-sm mt-2 list-disc list-inside space-y-1">
              {experience.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            {projects.map((p, i) => (
              <ProjectItem key={i} {...p} />
            ))}
          </div>
        </section>

        {/* Education & Notes */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold border-b border-neutral-200 pb-1 mb-2">
              Education
            </h2>
            <p className="text-sm">{education}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold border-b border-neutral-200 pb-1 mb-2">
              Notes
            </h2>
            <p className="text-sm">{notes}</p>
          </div>
        </section>

        <footer className="text-xs text-neutral-500 text-center border-t border-neutral-200 pt-4">
          © {personalInfo.name}
        </footer>
      </main>
    </div>
  );
}

function SkillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <ul className="text-sm space-y-1 list-disc list-inside">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  tech,
  desc,
  link,
}) => {
  return (
    <div className="border-l-4 border-project pl-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground mb-1 italic">Tech: {tech}</p>
      <p className="text-sm mb-2 leading-snug">{desc}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 justify-start items-center text-project text-sm font-medium hover:underline"
      >
        <BsGithub className=" w-4 h-4" />
        View Project →
      </Link>
    </div>
  );
};
