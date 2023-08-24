import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      className="container mx-auto flex justify-between items-center py-4 px-4"
    >
      <div className="flex gap-4 text-xs md:text-sm">
        <a href="https://github.com/eftinur" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/eftinur/" target="_blank">
          LinkedIn
        </a>
        <a href="https://twitter.com/eftinur90" target="_blank">
          Twitter
        </a>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1Hp5BwK_TDrSHqQifn6Upc2So0epFDKUj/view?usp=sharing"
          target="_blank"
        >
          <button class="button type1">
            <span class="btn-txt">My Resume</span>
          </button>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
