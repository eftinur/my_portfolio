import { motion } from "framer-motion";
import React from "react";
import framer_motion from "../assets/svg/framer-motion.svg";
import github from "../assets/svg/github.svg";
import javascript from "../assets/svg/javascript.svg";
import next from "../assets/svg/nextjs-13.svg";
import react from "../assets/svg/react-2.svg";
import redux from "../assets/svg/redux.svg";
import typescript from "../assets/svg/typescript.svg";
import webflow from "../assets/svg/webflow.svg";

const About = () => {
  const data = [
    { _id: 1, title: "JavaScript", image: javascript },
    { _id: 2, title: "React.js", image: react },
    { _id: 3, title: "Next.js", image: next },
    { _id: 4, title: "TypeScript", image: typescript },
    { _id: 5, title: "Redux", image: redux },
    { _id: 6, title: "Webflow", image: webflow },
    { _id: 7, title: "Framer Motion", image: framer_motion },
    { _id: 8, title: "GitHub", image: github },
  ];

  const fadeInVariant = {
    initial: {
      x: -20,
      opacity: 0,
    },
    animate: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        // duration: 1,
        // ease: "easeInOut",
        delay: 0.05 * i,
      },
    }),
  };
  return (
    <div className="container mx-auto py-20 px-6">
      <h5 className="text-3xl lg:text-5xl mb-6">My Story</h5>
      <div className="text-sm lg:text-base">
        <p className="mb-6">
          Hola! I'm Nur. A Front-end Developer working remotely from Dhaka,
          Bangladesh.
        </p>
        <p className="mb-6">
          I've spent most of my last waking hours for the last 2 years in
          learning and developing cool but practical user interfaces for
          websites.
        </p>
        <p className="mb-6">
          As a passionate front-end React developer, I thrive on crafting
          exceptional user experiences through clean and efficient code. With a
          deep understanding of HTML, CSS, and JavaScript, I specialize in
          building dynamic and responsive web applications. Equipped with strong
          problem-solving skills, I continuously strive to stay updated with the
          latest front-end technologies and best practices. Whether it's
          implementing elegant designs or optimizing performance.
        </p>
        <p className="mb-6">
          Let's collaborate and create compelling digital experiences together.
        </p>
      </div>
      <h5 className="text-3xl lg:text-5xl mt-20 mb-6">My Stack</h5>
      <p className="text-sm lg:text-base">
        As a React frontend developer I'm comfortable at building dynamic UIs
        and JavaScript (ES6+), coupled with Redux for state management in larger
        apps. Other tools include Axios for API calls, and testing libraries
        like Jest for ensuring code quality.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 py-8">
        {data.map((el, i) => (
          <motion.div
            key={el._id}
            className="w-24 h-24 lg:w-32 lg:h-28 mx-auto text-center"
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
    </div>
  );
};

export default About;
