import React from "react";
import Image from "next/image";
import ButtonC from "../shared/ButtonC";
import { setBackgroundImage } from "../utils/helpers";

function MerchantSection() {
  return (
    <section className="bg-bgMain pb-20 pt-16">
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap gap-24 container">
          {/* Left Side */}
          <div className="md:w-[40%] flex justify-center flex-col">
            <h1 className="text-[45px] font-semibold text-colorWhite mb-8 leading-tight">
              Enjoy Various
              <br /> Merchant's Promos
            </h1>
            <p className="text-sm text-whiteGray mb-10 leading-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="inline-block">
              <ButtonC title="GET STARTED" text="14px" />
            </div>
          </div>
          {/* Right side */}
          <div className="w-[80%] relative mx-auto md:mx-0 md:w-[55%]">
            <div className="absolute -left-12 bottom-0 z-10 shadowBox">
              <img
                src="/images/Last-Costslast-cost.png"
                className="w-full object-contain"
              />
            </div>
            <div
              className="w-full h-[560px]"
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
            <div className="h-[115%] p-4 absolute -bottom-10 -right-14">
              <img
                src="/icons/shopping-icon-home.png"
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MerchantSection;
