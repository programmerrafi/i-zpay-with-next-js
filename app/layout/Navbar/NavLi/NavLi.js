import React from "react";
import Link from "next/link";

const NavLi = ({ text }) => {
  return (
    <li>
      <Link href="#">
        <a
          href="#"
          className="hover:text-[#6b5eff] text-colorWhite transition-all"
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default NavLi;
