import { motion } from "framer-motion";

export default function Education() {
  const baseLi =
    "group bg-[var(--color-card-background)] text-[var(--color-foreground)] p-4 rounded-2xl flex flex-col items-start justify-center transition duration-500 relative hover:bg-[var(--color-background)] border border-transparent hover:border-green-500";

  const hoverText = "group-hover:scale-105 transition duration-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full overflow-x-auto py-4"
    >
      <ul className="grid grid-cols-1 gap-4">
        <li className={baseLi}>
          <motion.h1
            initial={{ opacity: 0, y: 5, x: -500 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.2 }}
            className={`font-bold tracking-wider ${hoverText}`}
          >
            Persian Gulf University
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 5, x: -120 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.5 }}
            className={`font-medium opacity-70 ${hoverText}`}
          >
            2018 - 2023
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 1 }}
          >
            I obtained my Bachelor&apos;s degree in Computer Engineering from
            Persian Gulf University.
          </motion.h3>
        </li>

        <li className={baseLi}>
          <motion.h1
            initial={{ opacity: 0, y: 5, x: -300 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.2 }}
            className={`font-bold tracking-wider ${hoverText}`}
          >
            Game Dev
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 5, x: -500 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.5 }}
            className={`font-medium opacity-70 ${hoverText}`}
          >
            2021 - 2022
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 1 }}
          >
            I passed several courses to achieve abilities in C# game design and
            built a few mini games.
          </motion.h3>
        </li>

        <li className={baseLi}>
          <motion.h1
            initial={{ opacity: 0, y: 5, x: -500 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.2 }}
            className={`font-bold tracking-wider ${hoverText}`}
          >
            Self Learning Web Courses
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 5, x: -500 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.5 }}
            className={`font-medium opacity-70 ${hoverText}`}
          >
            2022 - 2024
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 1 }}
          >
            I passed several courses to achieve abilities like HTML, CSS, and
            JavaScript.
          </motion.h3>
        </li>

        <li className={baseLi}>
          <motion.h1
            initial={{ opacity: 0, y: 5, x: -500 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.2 }}
            className={`font-bold tracking-wider ${hoverText}`}
          >
            Self Study / Mini Projects
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 5, x: -120 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.5 }}
            className={`font-medium opacity-70 ${hoverText}`}
          >
            2023 - Now
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 1 }}
          >
            Studying and working with React.js, Next.js, and Vue 3 to gain
            better experience.
          </motion.h3>
        </li>
      </ul>
    </motion.div>
  );
}
