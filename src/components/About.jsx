import { motion } from "framer-motion";
import React from "react";
import github from "../assets/svg/github.svg";
import javascript from "../assets/svg/javascript.svg";
import next from "../assets/svg/nextjs-13.svg";
import react from "../assets/svg/react-2.svg";
import redux from "../assets/svg/redux.svg";
import typescript from "../assets/svg/typescript.svg";
import vs_code from "../assets/svg/vs-code.svg";
import webflow from "../assets/svg/webflow.svg";

const About = () => {
  const data = [
    { _id: 1, title: "JavaScript", image: javascript },
    { _id: 2, title: "React.js", image: react },
    { _id: 3, title: "Next.js", image: next },
    { _id: 4, title: "TypeScript", image: typescript },
    { _id: 5, title: "Redux", image: redux },
    { _id: 6, title: "Webflow", image: webflow },
    { _id: 7, title: "GitHub", image: github },
    { _id: 8, title: "VS Code", image: vs_code },
  ];

  const fadeInVariant = {
    initial: {
      // x: -50,
      opacity: 0,
    },
    animate: (i) => ({
      // x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.05 * i,
      },
    }),
  };

  const slideInVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 0.15, ease: "easeInOut" },
    },
  };

  return (
    <section className="container mx-auto py-20 px-6">
      <motion.h5
        variants={slideInVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl lg:text-5xl mb-8"
      >
        My Story
      </motion.h5>
      <div className="text-sm md:text-lg">
        <motion.p
          variants={slideInVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-6"
        >
          Hola! I'm Nur. A Front-end Developer working remotely from Dhaka,
          Bangladesh.
        </motion.p>
        <motion.p
          variants={slideInVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-6"
        >
          I've spent most of my last waking hours for the last 2 years in
          learning and developing cool but practical user interfaces for
          websites.
        </motion.p>
        <motion.p
          variants={slideInVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-6"
        >
          As a passionate front-end React developer, I thrive on crafting
          exceptional user experiences through clean and efficient code. With a
          deep understanding of HTML, CSS, and JavaScript, I specialize in
          building dynamic and responsive web applications. Equipped with strong
          problem-solving skills, I continuously strive to stay updated with the
          latest front-end technologies and best practices. Whether it's
          implementing elegant designs or optimizing performance.
        </motion.p>
        <motion.p
          variants={slideInVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-6"
        >
          Let's collaborate and create compelling digital experiences together.
        </motion.p>
      </div>
      <motion.h5
        variants={slideInVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl lg:text-5xl mt-20 mb-8"
      >
        My Stack
      </motion.h5>
      <motion.p
        variants={slideInVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-sm md:text-base"
      >
        As a React frontend developer I'm comfortable at building dynamic UIs
        and JavaScript (ES6+), coupled with Redux for state management in larger
        apps. Other tools include Axios for API calls, and testing libraries
        like Jest for ensuring code quality.
      </motion.p>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-10 py-8">
        {data.map((el, i) => (
          <motion.div
            key={el._id}
            className="w-24 h-20 lg:w-32 lg:h-28 mx-auto text-center"
            variants={fadeInVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            <img src={el.image} alt="" className="w-4/5 h-3/4 mx-auto mb-2" />
            <h5 className="text-xs lg:text-base">{el.title}</h5>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
