import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.2)}>
      <a href={source_code_link} target="_blank" rel="noopener noreferrer">
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          scale={1}
          transitionSpeed={450}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] xl:w-[512px] w-full cursor-pointer"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover object-center rounded-2xl"
            />
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black bg-opacity-60 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-[12px] font-medium">Live</span>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="bg-primary bg-opacity-60 border border-white border-opacity-10 rounded-full px-3 py-1"
              >
                <span className={`text-[12px] font-medium ${tag.color}`}>
                  {tag.name}
                </span>
              </span>
            ))}
          </div>
        </Tilt>
      </a>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A selection of products we have designed, built, and shipped. From SaaS platforms
          to management tools and interactive experiences, each project is live, real, and
          built end-to-end by CaleCode.
        </motion.p>
      </div>

      <div className="mt-20 flex sm:justify-evenly flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
