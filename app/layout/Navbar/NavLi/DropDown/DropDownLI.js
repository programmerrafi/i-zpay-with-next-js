import React, { useState } from "react";
import SUbli from "./SubLI/SUbli";
import { IoIosArrowDown } from "react-icons/io";
import { pages, service } from "../../../../data/dropDownData";
import Link from "next/link";

const DropDownLI = ({ text }) => {
  const [navToggele, setnavToggele] = useState("");
  const handleToggel = () => {
    if (navToggele === "") {
      setnavToggele("toggel-button");
    } else if (navToggele === "toggel-button") {
      setnavToggele("");
    }
  };
  console.log(navToggele);

  return (
    <li className="sub-menu-head lg:py-[18px]" onClick={handleToggel}>
      <Link href="#">
        <a
          href="#"
          className="hover:text-[#6b5eff] transition-all flex gap-1 text-colorWhite"
        >
          {text}
          <IoIosArrowDown className="arrow" size={18} />
        </a>
      </Link>
      <SUbli
        pages={text === "pages" ? pages : service}
        navToggele={navToggele}
        page
      />
    </li>
  );
};

export default DropDownLI;
