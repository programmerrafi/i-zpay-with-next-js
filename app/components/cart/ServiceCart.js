import React from "react";
import { BsArrowRight } from "react-icons/bs";

function ServiceCart({ title, icon }) {
  return (
    <div className="relative card-bg border-2 w-full md:w-[410px] border-bgMain hover:border-btnSecondary !rounded-3xl p-8 !overflow-hidden cursor-pointer">
      <div className="relative z-40">
        <div className="text-colorText mb-8">{icon}</div>
        <h1 className="text-colorText font-semibold mb-4">{title}</h1>
        <p className="text-sm text-whiteGray mb-4 leading-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <div className="flex items-center gap-1 text-colorText">
          <p className="font-medium text-sm">Learn more</p>
          <BsArrowRight size={18} />
        </div>
      </div>
    </div>
  );
}

export default ServiceCart;
