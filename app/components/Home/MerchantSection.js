import React from "react";
import Image from "next/image";
import ButtonC from "../shared/ButtonC";

function MerchantSection() {
  return (
    <section className="bg-bgMain py-20">
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap gap-24 container">
          {/* Left Side */}
          <div className="md:w-[50%]">
            <h1 className="text-[45px] font-semibold text-colorWhite mb-8 leading-tight">
              Enjoy Various
              <br /> Merchant's Promos
            </h1>
            <p className="text-sm text-whiteGray mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ButtonC title="GET STARTED" text="14px" />
          </div>
          {/* Right side */}
          <div className="w-[80%] mx-auto md:mx-0 md:w-[50%]">
            <Image
              src="/images/app-mockup-2.png"
              width="750"
              height="800"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MerchantSection;
