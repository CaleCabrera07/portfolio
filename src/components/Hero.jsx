import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] mx-auto flex items-center" id="home">
      <div
        className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 py-32`}
      >
        <div className="flex flex-col justify-center items-center mt-5 shrink-0">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="min-w-0">
          <h1 className="font-black text-white lg:text-[64px] sm:text-[44px] xs:text-[34px] text-[28px] lg:leading-[76px] leading-[1.3] mt-2">
            You Don't Need to Understand the Code. <span className="text-[#915EFF]">We do it for you.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-Stack Development Studio for Small Businesses
          </p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 text-secondary text-[17px] max-w-prose leading-[30px]"
          >
            CaleCode is a software development studio specializing in end-to-end
            web and mobile solutions. We partner with small businesses to turn
            ideas into production-ready products, handling everything from
            architecture and design to deployment and beyond.
          </motion.p>
          <div className="flex flex-wrap gap-4 mt-7">
            <a href="#projects" rel="noopener noreferrer">
              <button className="bg-tertiary py-3 px-8 rounded-xl outline-none sm:text-xl w-full sm:w-fit text-white font-bold shadow-md shadow-primary border border-transparent hover:bg-opacity-50 hover:border-white">
                See Projects
              </button>
            </a>
            <a href="#contact" rel="noopener noreferrer">
              <button className="py-3 px-8 rounded-xl outline-none sm:text-xl w-full sm:w-fit text-white font-bold border border-[#915EFF] hover:bg-[#915EFF] transition-colors duration-300">
                Start a Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
