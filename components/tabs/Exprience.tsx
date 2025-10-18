import { motion } from "framer-motion";

export default function Exprience() {
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
            className="font-bold tracking-wider"
          >
            Game Dev
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
            className="font-medium opacity-70"
          >
            2022 - 2023
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
          >
            -build mini games like zigzag / 3Dpong / poem guess
          </motion.h3>
        </li>

        <li className={`${baseLi} `}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
            className="font-bold tracking-wider"
          >
            Working in University Computer Lab in student teams
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
            className="font-medium opacity-70"
          >
            2023 - 2024
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
            className="flex gap-2"
          >
            -build some lading page for our university projects
            <br />
            -build type-race website to have a competition in university on
            world computer day
            <br />
            -build website to find movies from different apis
          </motion.h3>
        </li>

        <li className={`${baseLi} `}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
            className="font-bold tracking-wider"
          >
            free lancer
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
            className="font-medium opacity-70"
          >
            2024 - now
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 5, x: 5 }}
            transition={{ duration: 0.4 }}
            className="flex gap-2"
          >
            -build some lading page like worldwise / fastpizza / usepopcorn /
            mapty
            <br />
            -corporate in some mini freelance projects
            <br />
          </motion.h3>
        </li>
      </ul>
    </motion.div>
  );
}
