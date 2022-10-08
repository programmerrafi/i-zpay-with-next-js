import React from "react";
import Image from "next/image";
import ManageCart from "../cart/ManageCart";
import { BiSupport } from "react-icons/bi";
import { GoLock } from "react-icons/go";
import { GiShakingHands } from "react-icons/gi";

function ManageSection() {
  return (
    <section className="bg-bgMain py-20">
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap gap-24 container">
          {/* Left side */}
          <div className="w-[80%] mx-auto md:mx-0 md:w-[50%]">
            <Image
              src="/images/app-mockup-2.png"
              width="750"
              height="800"
              objectFit="contain"
            />
          </div>
          {/* Right Side */}
          <div className="md:w-[50%]">
            <h1 className="text-[45px] font-semibold text-colorWhite mb-8 leading-tight">
              Manage Everything in
              <br /> Your Hand
            </h1>
            <p className="text-sm text-whiteGray">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            {/* Cart */}
            <ManageCart
              title="User Friendly"
              icon={<GiShakingHands size={40} />}
            />
            <ManageCart title="Best Support" icon={<BiSupport size={40} />} />
            <ManageCart title="Secure" icon={<GoLock size={40} />} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageSection;
