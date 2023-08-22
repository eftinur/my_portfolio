import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-8 px-4">
      <div className="flex gap-2">
        <a href="https://github.com/eftinur" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/eftinur/" target="_blank">LinkedIn</a>
        <a href="https://twitter.com/eftinur90" target="_blank">Twitter</a>
      </div>
      <div>
        <button className="py-2 px-4 border-2 border-[#211f22] rounded-lg">My Resume</button>
      </div>
    </div>
  );
};

export default Header;
