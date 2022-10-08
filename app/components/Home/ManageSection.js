import React from "react";
import Image from "next/image";
import ManageCart from "../cart/ManageCart";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            {/* Cart */}
            <ManageCart title="User Friendly" />
            <ManageCart title="User Friendly" />
            <ManageCart title="User Friendly" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageSection;
