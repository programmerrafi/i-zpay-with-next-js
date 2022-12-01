import React from "react";
import ButtonC from "../shared/ButtonC";
import { setBackgroundImage } from "../utils/helpers";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { BsPaypal } from "react-icons/bs";
import { FaStripe } from "react-icons/fa";

function Payment() {
  return (
    <section className="bg-bgMain pb-20 pt-4 md:pb-20 md:pt-16">
      <div className="container">
        <div className="flex lg:flex-nowrap flex-wrap gap-8 md:gap-22 lg:gap-32">
          {/* Left Side */}
          <div className="lg:w-[40%] flex justify-center flex-col order-10 md:order-1">
            <h1 className="md:text-[45px] text-[30px] font-semibold text-colorWhite mb-4 lg:mb-8 leading-tight lg:flex flex-col">
              Support Payment <span>From Every Plartform</span>
            </h1>
            <p className="text-sm text-whiteGray mb-6 leading-6 md:font-medium font-thin">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="text-sm text-whiteGray mb-8 leading-6">
              Supported Payment :
            </p>
            <div className="flex gap-8">
              <div className="py-1 px-[12px] rounded-md bg-btn2 hover:-translate-y-2 transition-all cursor-pointer">
                <FaCcMastercard size={45} />
              </div>
              <div className="py-1 px-[12px] rounded-md bg-btn2 hover:-translate-y-2 transition-all cursor-pointer">
                <RiVisaLine size={45} />
              </div>
              <div className="py-1 px-[12px] rounded-md bg-btn2 hover:-translate-y-2 transition-all cursor-pointer">
                <BsPaypal size={45} />
              </div>
              <div className="py-1 px-[12px] rounded-md bg-btn2 hover:-translate-y-2 transition-all cursor-pointer">
                <FaStripe size={45} />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="md:w-[80%] w-full relative mx-auto md:mx-0 lg:w-[45%] order-9 md:order-2">
            <div className="absolute -left-12 bottom-0 z-10 !w-[220px] shadowBox elementor-animation-bob hidden md:block">
              <img
                src="/images/Last-Operation1.png"
                className="w-full object-contain"
              />
            </div>
            <div
              className="w-full h-[95%] lg:h-[550px]"
              style={setBackgroundImage("images/payment-img.jpg", {
                backgroundPosition: "center center",
                backgroundColor: "#f3f3f3",
                backgroundSize: "cover",
              })}
            >
              <img
                src="/images/shape-img2.png"
                className="w-full h-full overflow-hidden"
              />
            </div>
            <div className="h-[95%] p-4 absolute bottom-12 -right-32 elementor-animation-bob hidden md:block">
              <img
                src="/images/payment-icon-home.png"
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
