import React from "react";
import ButtonC from "../shared/ButtonC";
import Image from "next/image";

function HeroHome() {
  return (
    <div className="bg-blackSecondary relative -mt-24 pt-40 ">
      <div className="elementor"></div>
      <div className="flex  justify-between container relative z-40">
        {/* Left Info */}
        <div className="flex flex-col justify-center w-[60%]">
          <h1 className="text-6xl font-semibold text-colorWhite mb-12">
            <span className="text-colorText">EASIEST </span>PAYMENT <br />
            METHOD EVER
          </h1>
          <p className="text-base text-whiteGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus,
            <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          {/* Button */}
          <div className="flex gap-8 items-center py-10">
            <ButtonC title="GET STARTED" text="14px" />
            <h3 className="text-sm font-medium hover:text-colorText cursor-pointer text-colorWhite">
              CONTACT US
            </h3>
          </div>
        </div>
        {/* Right Images */}
        <div className="relative w-[50%]">
          <div className="absolute right-16 -top-14 z-10 elementor-animation-bob">
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
          <div className="flex items-center gap-6 imgBtn p-4 rounded-full absolute bottom-20 -left-16">
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
