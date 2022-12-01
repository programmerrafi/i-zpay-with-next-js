import React from "react";
import ButtonC from "../shared/ButtonC";
import Image from "next/image";

function HeroHome() {
  return (
    <div className="bg-blackSecondary relative pt-40 ">
      <div className="elementor"></div>
      <div className="flex justify-between flex-wrap lg:flex-nowrap container relative z-40">
        {/* Left Info */}
        <div className="flex flex-col justify-center w-full lg:w-[60%] order-10 lg:order-9 mt-6 lg:mt-0">
          <h1 className="md:text-6xl text-4xl font-semibold text-colorWhite mb-10 md:mb-12">
            <span className="text-colorText">EASIEST </span>PAYMENT METHOD EVER
          </h1>
          <p className="text-base md:font-normal font-thin text-whiteGray sm:flex flex-col">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus,{" "}
            <span>luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
          </p>
          {/* Button */}
          <div className="flex flex-wrap sm:flex-nowrap gap-8 items-center py-10">
            <ButtonC
              title="GET STARTED"
              text="14px"
              className="px-24 lg:px-8 w-full sm:w-auto"
            />
            <h3 className="text-sm w-full sm:w-auto text-center font-medium hover:text-colorText cursor-pointer text-colorWhite px-20 lg:px-0">
              CONTACT US
            </h3>
          </div>
        </div>
        {/* Right Images  */}
        {/* right-56 */}
        <div className="relative lg:w-[50%] md:w-[76.5%] -mt-4 sm:mt-0 w-full mx-auto order-9 lg:order-10">
          <div className="absolute hidden md:block w-[320px] h-[160px] lg:w-auto lg:h-auto left-40 lg:left-auto lg:-translate-x-0 lg:right-16 lg:-top-14 top-2 z-10 elementor-animation-bob">
            <Image
              src="/images/Efficiencydark-1.png"
              width="400"
              height="200"
              objectFit="contain"
            />
          </div>
          <Image
            src="/images/home-img-big.png"
            width="950"
            height="1000"
            objectFit="contain"
          />
          <div className="hidden md:block md:flex items-center gap-6 imgBtn p-4 rounded-full absolute bottom-20 -left-16">
            <div className="rounded-full bg-btn2 text-colorWhite w-10 h-10 flex items-center justify-center">
              $
            </div>
            <h3 className="text-btn2 font-semibold text-2xl">EASY PAYMENT</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
