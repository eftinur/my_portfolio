import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";

const Contact = () => {
  const slideInVariant = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.15, ease: "easeInOut" },
    },
  };

  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div className="overflow-hidden">
        <Marquee
          pauseOnHover={true}
          speed={120}
          direction="right"
          className="marquee_wrapper py-6 text-center mb-20"
        >
          <h5 className="text-7xl lg:text-9xl mx-8">Let's Talk!</h5>
          <h5 className="text-7xl lg:text-9xl mx-8">Let's Talk!</h5>
          <h5 className="text-7xl lg:text-9xl mx-8">Let's Talk!</h5>
        </Marquee>
        <div className="pb-12">
          <motion.p
            variants={slideInVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:w-1/4 mx-auto px-6"
          >
            Got a question, proposal or project or want to work together on
            something? Feel free to reach out.
          </motion.p>
          <motion.h6
            variants={slideInVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-extrabold mt-6 mb-6"
          >
            eftinur90@gmail.com
          </motion.h6>
          <motion.p
            variants={slideInVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-1"
          >
            Get in touch
          </motion.p>
          <motion.div
            variants={slideInVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center gap-2 font-bold"
          >
            <a href="https://github.com/eftinur" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/eftinur/" target="_blank">
              LinkedIn
            </a>
            <a href="https://twitter.com/eftinur90" target="_blank">
              Twitter
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
