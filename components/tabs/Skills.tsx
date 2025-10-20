import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

export default function Skills() {
  const baseLi =
    "bg-[var(--color-card-background)] text-[var(--color-foreground)] p-4 rounded-2xl flex items-center justify-center transition duration-1000 group relative hover:bg-[var(--color-background)]";
  const tooltip =
    "absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 5 }}
      transition={{ duration: 0.2 }}
      className="w-full overflow-x-auto  py-4"
    >
      <ul className="inline-grid pt-4 grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-6   grid-flow-row gap-x-4 gap-y-12">
        <li className={`${baseLi} hover:text-orange-400 hover:scale-105`}>
          <span className={tooltip}>HTML</span>
          <FaHtml5 className="w-12 h-14" />
        </li>

        <li className={`${baseLi} hover:text-blue-600 hover:scale-105`}>
          <span className={tooltip}>CSS</span>
          <IoLogoCss3 className="w-12 h-14" />
        </li>

        <li className={`${baseLi} hover:text-yellow-400`}>
          <span className={tooltip}>JavaScript</span>
          <SiJavascript className="w-12 h-14" />
        </li>

        <li className={`${baseLi} hover:text-blue-400`}>
          <span className={tooltip}>React</span>
          <IoLogoReact className="w-12 h-14" />
        </li>

        <li className={`${baseLi}`}>
          <span className={tooltip}>Next</span>
          <RiNextjsFill className="w-12 h-14" />
        </li>

        <li className={`${baseLi} hover:text-green-500`}>
          <span className={tooltip}>Vue3</span>
          <FaVuejs className="w-12 h-14" />
        </li>

        <li className={`${baseLi} hover:text-blue-600`}>
          <span className={tooltip}>TypeScript</span>
          <SiTypescript className="w-12 h-14" />
        </li>

        <li className={`${baseLi} hover:text-purple-900`}>
          <span className={`${tooltip} w-[7rem]`}>Motion Frame</span>
          <TbBrandFramerMotion className="w-12 h-14" />
        </li>

        <li className={`${baseLi} hover:text-blue-400`}>
          <span className={tooltip}>TailwindCss</span>
          <RiTailwindCssFill className="w-12 h-14" />
        </li>

        <li className={`${baseLi} hover:text-red-600`}>
          <span className={`${tooltip} w-[7rem]`}>Git and Github</span>
          <FaGitAlt className="w-12 h-14" />
        </li>
      </ul>
    </motion.div>
  );
}
