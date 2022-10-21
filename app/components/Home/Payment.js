import React from "react";
import ButtonC from "../shared/ButtonC";
import { setBackgroundImage } from "../utils/helpers";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { BsPaypal } from "react-icons/bs";
import { FaStripe } from "react-icons/fa";

function Payment() {
  return (
    <section className="bg-bgMain pb-20 pt-16">
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap gap-32 container">
          {/* Left Side */}
          <div className="md:w-[40%] flex justify-center flex-col">
            <h1 className="text-[45px] font-semibold text-colorWhite mb-8 leading-tight">
              Support Payment <br /> From Every Plartform
            </h1>
            <p className="text-sm text-whiteGray mb-6 leading-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="text-sm text-whiteGray mb-8 leading-6">
              Supported Payment :
            </p>
            <div className="flex gap-8">
              <div className="py-1 px-[12px] rounded-md bg-btn2">
                <FaCcMastercard size={45} />
              </div>
              <div className="py-1 px-[12px] rounded-md bg-btn2">
                <RiVisaLine size={45} />
              </div>
              <div className="py-1 px-[12px] rounded-md bg-btn2">
                <BsPaypal size={45} />
              </div>
              <div className="py-1 px-[12px] rounded-md bg-btn2">
                <FaStripe size={45} />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="w-[80%] relative mx-auto md:mx-0 md:w-[45%]">
            <div className="absolute -left-12 bottom-0 z-10 !w-[220px] shadowBox">
              <img
                src="/images/Last-Operation1.png"
                className="w-full object-contain"
              />
            </div>
            <div
              className="w-full h-[550px]"
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
            <div className="h-[95%] p-4 absolute bottom-12 -right-32">
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
