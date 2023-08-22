import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[0px] rounded-[23px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black rounded-[25px] py-5 px-12 min-h-[200px] flex justify-center items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[25px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <span className="text-center"><p className={styles.sectionSubText}>Introduction</p></span>
        <span className="text-center"><h2 className={styles.sectionHeadText}>Overview</h2></span>
      </motion.div>
      <span className="text-center">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
        I am a dedicated and skilled full-stack developer who excels in merging
        creativity with problem-solving to build exceptional user-friendly
        applications. With a diverse background in law enforcement, military
        precision, and healthcare management, I bring a unique and well-rounded
        perspective to my work. I am actively seeking an opportunity to join a
        company that values personal and professional growth, while fostering a
        culture of empathy and collaboration. Together, let's create innovative
        solutions that make a meaningful impact.
      </motion.p>
      </span>
      <div className="mt-10 ms-40 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
