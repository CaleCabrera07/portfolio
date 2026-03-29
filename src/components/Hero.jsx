import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh] mx-auto`} id="home">
      <div
        className={`absolute inset-0 top-[100px] md:top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-96 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Carlos</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Software Engineer | Web and Mobile Developer
          </p>
          <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 text-secondary text-[17px] max-w-prose leading-[30px]'
        >
          Dedicated and forward-thinking Software Engineer with a specialization in Frontend Development. My approach is characterized by a proactive problem-solving mindset, always aiming to deliver top-tier code quality through adherence to best practices. Committed to continuous professional development, I stay informed of the latest technologies and industry trends to ensure my contributions are innovative and effective.
        </motion.p>
        <div className="hidden min-[350px]:block">
          <a href="#projects">
          <button className='bg-tertiary mt-7 py-3 px-8 rounded-xl outline-none sm:text-xl w-full sm:w-fit text-white font-bold shadow-md shadow-primary border border-transparent  hover:bg-opacity-50 hover:border-white'>
          See Projects</button>
          </a>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
