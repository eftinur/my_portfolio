import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between py-8">
      <div className="flex gap-2">
        <a href="https://github.com/eftinur" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/eftinur/" target="_blank">LinkedIn</a>
        <a href="https://twitter.com/eftinur90" target="_blank">Twitter</a>
      </div>
      <div>
        <button>My Resume</button>
      </div>
    </div>
  );
};

export default Header;
