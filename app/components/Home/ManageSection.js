import React from "react";
import Image from "next/image";
import ManageCart from "../cart/ManageCart";
import { BiSupport } from "react-icons/bi";
import { GoLock } from "react-icons/go";
import { GiShakingHands } from "react-icons/gi";

function ManageSection() {
  return (
    <section className="bg-bgMain py-12 sm:py-20">
      <div className="container">
        <div className="flex lg:flex-nowrap flex-wrap gap-12 lg:gap-24">
          {/* Left side */}
          <div className="w-[78%] mx-auto lg:mx-0 lg:w-[50%]">
            <Image
              src="/images/app-mockup-2.png"
              width="750"
              height="800"
              objectFit="contain"
            />
          </div>
          {/* Right Side */}
          <div className="lg:w-[50%]">
            <h1 className="md:text-[45px] text-[30px] font-semibold text-colorWhite lg:flex flex-col mb-6 lg:mb-8 leading-tight">
              Manage Everything in <span> Your Hand</span>
            </h1>
            <p className="text-sm text-whiteGray md:font-normal font-thin">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            {/* Cart */}
            <ManageCart
              title="User Friendly"
              icon={<GiShakingHands size={46} />}
            />
            <ManageCart title="Best Support" icon={<BiSupport size={46} />} />
            <ManageCart title="Secure" icon={<GoLock size={46} />} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageSection;
