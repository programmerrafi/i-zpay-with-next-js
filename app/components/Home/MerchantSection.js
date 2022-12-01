import React from "react";
import ButtonC from "../shared/ButtonC";
import { setBackgroundImage } from "../utils/helpers";

function MerchantSection() {
  return (
    <section className="bg-bgMain pb-14 lg:pb-20 lg:pt-16">
      <div className="container">
        <div className="flex lg:flex-nowrap flex-wrap gap-8 md:gap-10 lg:gap-32">
          {/* Left Side */}
          <div className="lg:w-[40%] flex justify-center flex-col order-10 md:order-1">
            <h1 className="md:text-[45px] text-[30px] font-semibold text-colorWhite lg:flex flex-col mb-6 lg:mb-8 leading-tight">
              Enjoy Various <span>Merchant's Promos</span>
            </h1>
            <p className="text-sm text-whiteGray mb-10 leading-6 md:font-normal font-thin">
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
          <div className="w-full md:w-[80%] relative mx-auto lg:mx-0 lg:w-[45%] order-9 md:order-2">
            <div className="absolute -left-12 bottom-0 z-10 shadowBox elementor-animation-bob hidden md:block">
              <img
                src="/images/Last-Costslast-cost.png"
                className="w-full object-contain"
              />
            </div>
            <div
              className="w-full h-[95%] lg:h-[560px]"
              style={setBackgroundImage("images/shopping-girl-home.jpg", {
                backgroundPosition: "center center",
                backgroundColor: "#f3f3f3",
                backgroundSize: "cover",
              })}
            >
              <img
                src="/images/shape-1.png"
                className="w-full h-full overflow-hidden"
              />
            </div>
            <div className="h-[115%] p-4 absolute -bottom-10 -right-14 elementor-animation-bob hidden md:block">
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
