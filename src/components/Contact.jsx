import React from "react";
import Marquee from "react-fast-marquee";

const Contact = () => {
  return (
    <div className="container h-screen mx-auto flex items-center justify-center text-center">
      <div>
        <Marquee
          pauseOnHover={true}
          speed={80}
          className="py-6 text-center border-t border-b mb-20"
        >
          <h5 className="text-9xl mx-8">Let's Talk!</h5>
          <h5 className="text-9xl mx-8">Let's Talk!</h5>
          <h5 className="text-9xl mx-8">Let's Talk!</h5>
          <h5 className="text-9xl mx-8">Let's Talk!</h5>
        </Marquee>
        <p>
          Got a question, proposal or project or want to work together on
          something? Feel free to reach out.
        </p>
        <h6 className="text-5xl font-extrabold mt-4 mb-6">
          eftinur90@gmail.com
        </h6>
        <p className="mb-3">Get in touch</p>
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
  );
};

export default Contact;
