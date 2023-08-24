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
    <section className="bg-[#242328] text-[#d1d9d9] h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        variants={slideInVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        className="text-5xl md:text-8xl lg:text-9xl"
      >
        Hey! <span className="text-xl md:text-3xl lg:text-4xl">I'm Nur</span>
      </motion.h1>
      <motion.h2
        variants={slideInVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
        className="text-3xl md:text-5xl lg:text-6xl mt-4 mb-6"
      >
        A Front-end Developer
      </motion.h2>
      <motion.p
        variants={slideInVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
        className="w-full md:w-3/4 lg:w-2/5 mx-auto text-sm md:text-lg px-6 lg:px-20"
      >
        I'm A Creative Designer And Web Developer Who Has A Passion Of Creating
        Clean And Minimal Digital Solutions
      </motion.p>
    </section>
  );
};

export default Hero;
