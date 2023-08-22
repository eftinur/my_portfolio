import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="flex gap-2">
        <a href="">GitHub</a>
        <a href="">LinkedIn</a>
        <a href="">Twitter</a>
      </div>
      <div>
        <button>My Resume</button>
      </div>
    </div>
  );
};

export default Header;
