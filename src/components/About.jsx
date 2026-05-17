import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

const valueProps = [
  {
    icon: "fa-solid fa-rocket",
    stat: "3+ Products Shipped",
    sub: "Real products, live in production, used by real users.",
  },
  {
    icon: "fa-solid fa-layer-group",
    stat: "End-to-End Ownership",
    sub: "Design, development, and deployment all under one roof.",
  },
  {
    icon: "fa-solid fa-clock",
    stat: "On Time. Every Time.",
    sub: "We respect your timeline and keep you informed at every step.",
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[200px] flex justify-evenly items-center flex-col">
        <i className={`${icon} text-[48px] text-[#915EFF]`} />
        <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const ValuePropCard = ({ icon, stat, sub, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.6)}
    className="green-pink-gradient p-[1px] rounded-2xl"
  >
    <div className="bg-tertiary rounded-2xl p-6 flex flex-col items-center text-center h-full gap-3">
      <i className={`${icon} text-[36px] text-[#915EFF]`} />
      <h3 className="text-white font-bold text-[17px]">{stat}</h3>
      <p className="text-secondary text-[13px] leading-[22px]">{sub}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What We Offer</p>
        <h2 className={styles.sectionHeadText}>Our Services</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We work with small businesses to design, build, and ship software that solves real problems.
        From custom web and mobile applications to full SaaS products, we handle the full stack
        so you can focus on running your business while we handle the technology.
      </motion.p>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {valueProps.map((vp, index) => (
          <ValuePropCard key={vp.stat} index={index} {...vp} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
