import { motion } from "framer-motion";
import { FaGamepad, FaUniversity, FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  const baseDiv =
    "group bg-[var(--color-background)] text-[var(--color-foreground)] p-4 rounded-2xl flex flex-col items-start justify-center transition duration-500 relative hover:bg-[var(--color-background)] border border-transparent hover:border-green-500 shadow";
  const liStyle =
    "flex flex-row justify-start items-center gap-3 cursor-default";
  const hoverText = "group-hover:scale-105 transition duration-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full overflow-x-auto py-4"
    >
      <ul className="grid grid-cols-1 gap-4">
        {/* --- Game Dev --- */}
        <li className={liStyle}>
          <FaGamepad className="w-8 h-8 text-green-400" />
          <div className={baseDiv}>
            <motion.h1
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ duration: 0.2 }}
              className={`font-bold tracking-wider ${hoverText}`}
            >
              Game Dev
            </motion.h1>
            <motion.h4
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ duration: 0.5 }}
              className={`font-medium opacity-70 ${hoverText}`}
            >
              2022 - 2023
            </motion.h4>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 5, x: 5 }}
              transition={{ duration: 1 }}
            >
              Built mini games like Zigzag, 3D Pong, and Poem Guess.
            </motion.h3>
          </div>
        </li>

        {/* --- University Projects --- */}
        <li className={liStyle}>
          <FaUniversity className="w-8 h-8 text-green-400" />
          <div className={baseDiv}>
            <motion.h1
              initial={{ opacity: 0, x: -800 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ duration: 0.2 }}
              className={`font-bold tracking-wider ${hoverText}`}
            >
              University Computer Lab with Student Teams
            </motion.h1>
            <motion.h4
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ duration: 0.5 }}
              className={`font-medium opacity-70 ${hoverText}`}
            >
              2023 - 2024
            </motion.h4>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 5, x: 5 }}
              transition={{ duration: 1 }}
            >
              • Built landing pages for university projects. <br />
              • Created a typing race website for World Computer Day. <br />•
              Built a movie search website using multiple APIs.
            </motion.h3>
          </div>
        </li>

        {/* --- Freelancer --- */}
        <li className={liStyle}>
          <FaLaptopCode className="w-8 h-8 text-green-400" />
          <div className={baseDiv}>
            <motion.h1
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ duration: 0.2 }}
              className={`font-bold tracking-wider ${hoverText}`}
            >
              Freelancer
            </motion.h1>
            <motion.h4
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 5 }}
              transition={{ duration: 0.5 }}
              className={`font-medium opacity-70 ${hoverText}`}
            >
              2024 - Now
            </motion.h4>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 5, x: 5 }}
              transition={{ duration: 1 }}
            >
              • Built landing pages like WorldWise, FastPizza, UsePopcorn, and
              Mapty. <br />• Collaborated on small freelance web projects.
            </motion.h3>
          </div>
        </li>
      </ul>
    </motion.div>
  );
}
