import React from "react";

function Text({ text, className }) {
  return (
    <h3
      className={`text-whiteGray text-sm font-[300] hover:text-colorText transition-all pt-4 leading-7s ${className}`}
    >
      {text}
    </h3>
  );
}

export default Text;
