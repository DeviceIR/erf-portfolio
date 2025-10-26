import Image from "next/image";
import { motion } from "framer-motion";
import ProjectFooter from "@/components/ui/ProjectFooter";

// workout photos
import workoutBanner from "@/public/projects/workout/banner.png";
import workout1 from "@/public/projects/workout/1.png";

// bankist photos
import bankistBanner from "@/public/projects/bankist/banner.png";
import bankistDashboard from "@/public/projects/bankist/dashboard.png";
import bankistBoth from "@/public/projects/bankist/both.png";
import bankistHome from "@/public/projects/bankist/home 1.png";

// fastpizza photos
import pizzaBanner from "@/public/projects/pizza/banner.png";
import pizzamenu from "@/public/projects/pizza/3.png";

// usepopcorn photos
import usePopCornBanner1 from "@/public/projects/usepopcorn/Banner1.png";
import usePopCornBanner2 from "@/public/projects/usepopcorn/Banner2.png";
import usePopCornitem1 from "@/public/projects/usepopcorn/usePopCornItem1.png";
import usePopCornitem2 from "@/public/projects/usepopcorn/usePopCornItem2.png";

// typing-competition photos
import typingBanner1 from "@/public/projects/Typing-competition/banner1.png";
import typingBanner2 from "@/public/projects/Typing-competition/banner2.png";

// Common image class for all project images
const imageClass = `
  w-full 
  rounded-lg 
  object-cover 
  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] 
  aspect-square 
  md:aspect-[4/3] 
  lg:aspect-[16/9]
`;

const data = [
  {
    title: "Workout Timer",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Optimise Your Workout Day sir!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={workoutBanner}
            alt="workout banner"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={workout1}
            alt="workout sample"
            width={700}
            height={700}
            className={imageClass}
          />
        </div>

        <ProjectFooter
          github="https://github.com/DeviceIR/workout-timer"
          onReadMore={() => console.log("open Workout modal")}
        />
      </div>
    ),
  },
  {
    title: "Bankist",
    content: (
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
        >
          Bankist is a modern banking app clone designed to provide a smooth and
          interactive experience, showcasing advanced UI components and
          realistic dashboards.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
        >
          I focused on responsive design, interactive elements, and clean
          layouts to simulate a full-featured banking application.
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={bankistBanner}
            alt="bankist banner"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={bankistDashboard}
            alt="bankist dashboard"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={bankistBoth}
            alt="bankist both"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={bankistHome}
            alt="bankist home"
            width={700}
            height={700}
            className={imageClass}
          />
        </div>

        <ProjectFooter
          github="https://github.com/DeviceIR/11-Arrays-Bankist"
          onReadMore={() => console.log("open Bankist modal")}
        />
      </div>
    ),
  },
  {
    title: "Fast Pizza (course)",
    content: (
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
        >
          Fast Pizza is a web app for exploring pizza menus and customizing
          orders with an interactive, user-friendly interface.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
        >
          I focused on clean UI, responsive layouts, and engaging user
          interactions to simulate a real-world food ordering experience.
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={pizzaBanner}
            alt="pizza banner"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={pizzamenu}
            alt="pizza menu"
            width={700}
            height={700}
            className={imageClass}
          />
        </div>

        <ProjectFooter
          github="https://github.com/DeviceIR/fast-react-pizza-v2"
          onReadMore={() => console.log("open FastPizza modal")}
        />
      </div>
    ),
  },
  {
    title: "UsePopCorn",
    content: (
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
        >
          UsePopCorn is a movie discovery app with intuitive navigation for
          browsing and discovering new movies.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
        >
          I focused on responsive layouts, interactive components, and a
          visually appealing interface to enhance the user experience.
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={usePopCornBanner1}
            alt="usepopcorn banner1"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={usePopCornBanner2}
            alt="usepopcorn banner2"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={usePopCornitem1}
            alt="usepopcorn item1"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={usePopCornitem2}
            alt="usepopcorn item2"
            width={700}
            height={700}
            className={imageClass}
          />
        </div>

        <ProjectFooter
          github="https://github.com/DeviceIR/usepopcorn"
          onReadMore={() => console.log("open UsePopcorn modal")}
        />
      </div>
    ),
  },
  {
    title: "Typing Competition",
    content: (
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
        >
          Typing Competition is an interactive platform where users race against
          each other in typing challenges to improve speed and accuracy.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
        >
          I implemented a smooth UI, score tracking, and responsive layout to
          create a fun and engaging typing experience.
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={typingBanner1}
            alt="typing banner1"
            width={700}
            height={700}
            className={imageClass}
          />
          <Image
            src={typingBanner2}
            alt="typing banner2"
            width={700}
            height={700}
            className={imageClass}
          />
        </div>

        <ProjectFooter
          github="https://github.com/DeviceIR"
          onReadMore={() => console.log("open Typing modal")}
        />
      </div>
    ),
  },
];

export default data;
