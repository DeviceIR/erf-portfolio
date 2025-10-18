import { motion } from "framer-motion";

export default function Education() {
  const baseLi =
    "bg-[var(--color-card-background)] text-[var(--color-foreground)] p-4 rounded-2xl flex items-center justify-center transition duration-1000 group relative hover:bg-[var(--color-background)] flex flex-col justify-center items-start ";
  const tooltip =
    "absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 5 }}
      transition={{ duration: 0.2 }}
      className="w-full overflow-x-auto py-4"
    >
      <ul className="grid grid-cols-1 gap-4">
        <li className={`${baseLi} `}>
          <motion.h1 className="font-bold tracking-wider">
            Persian Gulf University
          </motion.h1>
          <motion.h4 className="font-medium opacity-70">2018 - 2023</motion.h4>
          <motion.h3>
            I obtained my Bachelor's degree in Computer Engineering from Persian
            Gulf University.
          </motion.h3>
        </li>
        <li className={`${baseLi}`}>
          <motion.h1 className="font-bold tracking-wider">Game Dev</motion.h1>
          <motion.h4 className="font-medium opacity-70">2021 - 2022</motion.h4>
          <motion.h3>
            I passed several courses to achieve abilities C#-game Design and
            built few mini games
          </motion.h3>
        </li>
        <li className={`${baseLi}`}>
          <motion.h1 className="font-bold tracking-wider">
            self learning Web Courses
          </motion.h1>
          <motion.h4 className="font-medium opacity-70">2022 - 2024</motion.h4>
          <motion.h3>
            I passed several courses to achieve abilities like html-css-js
          </motion.h3>
        </li>
        <li className={`${baseLi}`}>
          <motion.h1 className="font-bold tracking-wider">
            self study / Mini projects
          </motion.h1>
          <motion.h4 className="font-medium opacity-70">2023 - now</motion.h4>
          <motion.h3>
            study and work with ReactJs / NextJs / Vue3 and gaining exprience to
            work better{" "}
          </motion.h3>
        </li>
      </ul>
    </motion.div>
  );
}
