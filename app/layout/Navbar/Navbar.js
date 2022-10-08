import React, { useEffect, useState } from "react";
import NavLi from "./NavLi/NavLi";
import DropDownLI from "./NavLi/DropDown/DropDownLI";
import Image from "next/image";
import Link from "next/link";
import ButtonC from "../../components/shared/ButtonC";

const Navbar = () => {
  const [show, setShow] = useState("");
  const [navbar, setNavbar] = useState(false);

  const nav = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // console.log(window.scrollY);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", nav);
  //   return () => {
  //     window.removeEventListener("scroll", nav);
  //   };
  // }, []);
  return (
    <header className="relative z-50 w-full">
      <nav className={""}>
        <div className="container">
          <div className="flex justify-between items-center w-full py-3">
            {/* Logo */}
            <Link href="/">
              <a href="/">
                <Image
                  src="/icons/logo.png"
                  width="160"
                  height="55"
                  objectFit="contain"
                />
              </a>
            </Link>
            <div className={`nav-menu active `}>
              <ul className="main-menu flex items-center flex-wrap gap-7">
                <NavLi text="HOME" />
                <NavLi text="ABOUT US" />
                <NavLi text="SERVICE" />

                {/* Drop Down start */}
                <DropDownLI text="PAGES" />
                <DropDownLI text="CONTACT US" />
                {/* Drop Down end */}
                {/* Button */}
                <ButtonC title="GET STARTED" text="12px" />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
