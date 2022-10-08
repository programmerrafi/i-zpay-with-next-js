import React from "react";

function ManageCart({ title, icon }) {
  return (
    <div className="flex items-center gap-8 mt-8 mb-10 shadow-md">
      <div className="w-24 h-24 rounded-full bg-colorText flex items-center justify-center">
        @
      </div>
      <div className=" w-[70%]">
        <h1 className="text-xl text-colorText font-semibold mb-5">{title}</h1>
        <p className="text-sm text-whiteGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
}

export default ManageCart;
