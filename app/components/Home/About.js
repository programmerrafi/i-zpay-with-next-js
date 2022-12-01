import React from "react";
import ButtonC from "../shared/ButtonC";

function About() {
  return (
    <section className="bg-blackSecondary pb-20 md:py-16 lg:py-20">
      <div className="container">
        <div className="bg-btn2 relative rounded-3xl overflow-hidden">
          <div className="about-bg absolute w-full h-full top-0 left-0"></div>
          <div className="relative z-40 w-full sm:w-[94%] flex items-center py-12 px-6 sm:p-14 justify-between flex-wrap lg:flex-nowrap gap-6">
            <h1 className="text-colorWhite text-[30px] md:text-5xl leading-[50px]  md:leading-[58px] font-semibold lg:w-[50%]">
              Keep Updated About <span> Our Product</span>
            </h1>
            <div className="flex rounded-full w-full lg:w-[50%] overflow-hidden shadow-xl py-1 px-1 bg-colorWhite">
              <input
                type="email"
                placeholder="Your email address"
                className="text-colorSecondary bg-colorWhite border-none outline-none w-full pl-8"
              />
              <ButtonC title="SUBMIT" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
