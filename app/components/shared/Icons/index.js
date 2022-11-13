import React from "react";

function Icons({ name = null, size = "22", className = "" }) {
  const IconName = name;
  console.log(IconName);
  return (
    <>
      {IconName !== null && (
        <IconName
          size={Number(size)}
          className={`text-colorText hover:text-btnSecondary transition-all ${className}`}
        />
      )}
    </>
  );
}

export default Icons;
