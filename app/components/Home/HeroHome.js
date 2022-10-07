import React from "react";
import Button from "../shared/Button";
import Image from "next/image";

function HeroHome() {
  return (
    <div className="bg-blackSecondary relative -mt-24 pt-24 ">
      <div className="elementor"></div>
      <div className="flex gap-10 container">
        {/* Left Info */}
        <div className="relative z-50">
          <h1 className="text-5xl font-semibold text-colorWhite mb-12">
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
            <Button title="GET STARTED" text="14px" />
            <h3 className="text-sm font-medium hover:text-colorText cursor-pointer text-colorWhite">
              CONTACT US
            </h3>
          </div>
        </div>
        {/* Right Images */}
        <div className="relative">
          <Image
            src="/images/home-img-big.png"
            width="600"
            height="400"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
