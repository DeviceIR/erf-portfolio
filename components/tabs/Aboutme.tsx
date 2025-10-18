import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.9, y: 5, x: 5 }}
        transition={{ duration: 0.4 }}
      >
        “I’m a passionate frontend developer with 2+ years of experience
        creating elegant, high-performance web applications that not only look
        great but also deliver exceptional user experiences—ready to bring your
        vision to life.”
      </motion.div>
      <ul className="space-y-3 grid  grid-cols-2">
        <li className="font-bold">
          <span className="font-semibold opacity-70">Name:</span> Erfan Bastani
        </li>
        <li className="font-bold">
          <span className="font-semibold opacity-70">Experience:</span> 2+ Years
        </li>
        <li className="font-bold">
          <span className="font-semibold opacity-70">Nationality:</span>{" "}
          Persian(Graat IRAN)
        </li>
        <li className="font-bold">
          <span className="font-semibold opacity-70">Freelance:</span> Available
        </li>
        <li className="font-bold">
          <span className="font-semibold opacity-70">Phone:</span> (+98) 917 724
          8591
        </li>
        <li className="font-bold">
          <span className="font-semibold opacity-70">Email: </span>
          Erfanbastani1201@gmail.com
        </li>
        <li className="font-bold">
          <span className="font-semibold opacity-70">Languages:</span> English,
          Persian, Arabic
        </li>
      </ul>
    </div>
  );
}
