import React from "react";
import Image from "next/image";
import ButtonC from "../shared/ButtonC";
import { setBackgroundImage } from "../utils/helpers";

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
          <div className="w-[80%] relative mx-auto md:mx-0 md:w-[50%]">
            <div className="absolute right-16 -top-14 z-10">
              <Image
                src="/images/Last-Costslast-cost.png"
                width="400"
                height="200"
                objectFit="contain"
              />
            </div>
            <div
              className="w-full h-[600px]"
              style={setBackgroundImage("images/shopping-girl-home.jpg", {
                backgroundPosition: "bottom center",
                backgroundColor: "#f3f3f3",
                backgroundSize: "cover",
              })}
            >
              <img
                src="/images/shape-1.png"
                className="w-full h-full overflow-hidden"
              />
            </div>
            <div className="flex items-center gap-6 imgBtn p-4 rounded-full absolute bottom-20 -left-16">
              <div className="rounded-full bg-btn2 text-colorWhite w-10 h-10 flex items-center justify-center">
                $
              </div>
              <h3 className="text-btn2 font-semibold text-2xl">EASY PAYMENT</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MerchantSection;
