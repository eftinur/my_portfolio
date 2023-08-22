import React from "react";
import Marquee from "react-fast-marquee";

const Contact = () => {
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
        <div>
          <p className="w-full lg:w-1/4 mx-auto px-6">
            Got a question, proposal or project or want to work together on
            something? Feel free to reach out.
          </p>
          <h6 className="text-3xl lg:text-5xl font-extrabold mt-4 mb-6">
            eftinur90@gmail.com
          </h6>
          <p className="mb-1">Get in touch</p>
          <div className="flex justify-center gap-2 font-bold">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
