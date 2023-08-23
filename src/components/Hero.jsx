import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  const slideInVariant = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="bg-[#242328] text-[#d1d9d9] h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        variants={slideInVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: .5, ease: "easeInOut", delay: 0.01 }}
        className="text-7xl lg:text-9xl"
      >
        Hey! <span className="text-2xl lg:text-5xl">I'm Efti</span>
      </motion.h1>
      <motion.h2
        variants={slideInVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: .5, ease: "easeInOut", delay: 0.3 }}
        className="text-3xl lg:text-7xl mt-2 mb-6"
      >
        A Front-end Developer
      </motion.h2>
      <motion.p
        variants={slideInVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: .5, ease: "easeInOut", delay: 0.6 }}
        className="w-full lg:w-2/5 mx-auto text-sm lg:text-lg px-6 lg:px-20"
      >
        I'm A Creative Designer And Web Developer Who Has A Passion Of Creating
        Clean And Minimal Digital Solutions
      </motion.p>
    </div>
  );
};

export default Hero;
