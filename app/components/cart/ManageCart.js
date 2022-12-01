import React from "react";

function ManageCart({ title, icon }) {
  return (
    <div className="flex items-center gap-8 mt-8 mb-10 shadow-md">
      <div className="w-24 h-24 rounded-full bg-colorText text-colorWhite flex items-center justify-center hover:scale-110 transition-all">
        {icon}
      </div>
      <div className=" w-[70%]">
        <h1 className="md:text-xl text-lg text-colorText font-semibold mb-3 md:mb-5">
          {title}
        </h1>
        <p className="text-sm text-whiteGray md:font-normal font-thin">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
    </div>
  );
}

export default ManageCart;
