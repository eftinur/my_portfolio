import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-7xl lg:text-9xl">
        Hey! <span className="text-2xl lg:text-5xl">I'm Efti</span>
      </h1>
      <h2 className="text-3xl lg:text-7xl mt-2 mb-6">A front-end Developer</h2>
      <p className="w-full lg:w-1/4 mx-auto text-sm lg:text-base px-6">
        I'm A Creative Designer And Web Developer Who Has A Passion Of Creating
        Clean And Minimal Digital Solutions
      </p>
    </div>
  );
};

export default Hero;
