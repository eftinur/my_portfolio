import { motion } from "framer-motion";
import React from "react";
import pookatales from "../assets/my_projects/pookatales.jpg";
import rollin_rust from "../assets/my_projects/rollin_rust.jpg";
import snapvault from "../assets/my_projects/snapvault.jpg";

const MyProjects = () => {
  const data = [
    {
      _id: 1,
      image: rollin_rust,
      title: "Rollin Rust",
      desc: "Rollin Rust is a MERN Stack application built for a small garage to showcase their services.",
      tech_stack:
        "React.js | React-Router | Axios | Firebase | React-Hot-Toast | Node.js | Express.js | MongoDB",
      demo_url: "https://rollin-rust.web.app/",
      front_end: "https://github.com/eftinur/rollin_rust-UI",
      backend: "https://github.com/eftinur/rollin_rust_Backend",
    },
    {
      _id: 2,
      image: snapvault,
      title: "SnapVault",
      desc: "SnapVault is a MERN Stack application built for users to store their image files into a cloud storage.",
      tech_stack:
        "React.js | React-Router | TanStack Query | Axios | Firebase | React-Hot-Toast | Node.js | Express.js | MongoDB",
      demo_url: "https://photoflow-51a7e.web.app/",
      front_end: "https://github.com/eftinur/SnapVault_UI",
      backend: "https://github.com/eftinur/SnapVault_Backend",
    },
    {
      _id: 3,
      image: pookatales,
      title: "Pookatales",
      desc: "Pookatales is an online e-commerce books selling web application built for selling books online.",
      tech_stack:
        "React.js | React-Router | Axios | REST API | React-Hot-Toast | React-Fast-Marquee | GSAP",
      demo_url: "https://pookatales.netlify.app/",
      front_end: "https://github.com/eftinur/pookatales",
    },
  ];

  const fadeInVariant = {
    initial: {
      // x: -120,
      opacity: 0,
    },
    animate: (i) => ({
      // x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
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
    <section className="bg-[#242328] text-[#d1d9d9] py-20">
      <div className="container mx-auto px-6">
        <motion.h5
          variants={slideInVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl mb-8"
        >
          My Projects
        </motion.h5>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {data.map((el, i) => (
            <motion.div
              key={el._id}
              variants={fadeInVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={i}
            >
              <div>
                <img
                  src={el.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 class="text-2xl lg:text-3xl font-bold capitalize leading-tight mb-4">
                  {el.title}
                </h3>
                <p class="text-lg lg:text-2xl mb-4">{el.desc}</p>
                <p class="text-lg md:text-xl my-2">Technologies used:</p>
                <p class="text-xs md:text-base">{el.tech_stack}</p>
                {/* Project URL */}
                <div class="flex items-center  mt-4">
                  <span class="material-symbols-outlined text-4xl text-[#e6fc5f]">
                    arrow_outward
                  </span>
                  <a href={el.front_end} target="_blank">
                    GitHub Front-end
                  </a>
                </div>
                {el?.backend && (
                  <div class="flex items-center">
                    <span class="material-symbols-outlined text-4xl text-[#e6fc5f]">
                      arrow_outward
                    </span>
                    <a href={el.backend} target="_blank">
                      GitHub Backend
                    </a>
                  </div>
                )}
                <div class="flex items-center">
                  <span class="material-symbols-outlined text-4xl text-[#e6fc5f]">
                    arrow_outward
                  </span>
                  <a href={el.demo_url} target="_blank">
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
