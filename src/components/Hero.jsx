import { motion } from "framer-motion";

import { styles } from "../styles";
import { DroneCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10 mt-10`}
      >
        <div className="flex flex-col justify-center items-center mt-8 ms-10 ">
          <div className="w-5 h-8 rounded-full light-blue" />
          <div className="w-1 sm:h-80 h-40 light-blue" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Greetings!,<span className="text-[#00FFCC]"> Rayy</span> Here 
          </h1>
          <p className={`${styles.heroSubText}text-white-100`}>
          a <span className="text-[#FF3333]">Full</span> Stack <br className="sm:block hidden" />
            Software <span className="text-[#FF3333]">Engineer</span>.
          </p>
        </div>
      </div>



      <DroneCanvas className=""/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
