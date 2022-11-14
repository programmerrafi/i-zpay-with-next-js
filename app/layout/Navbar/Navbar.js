import React, { useEffect, useState } from "react";
import NavLi from "./NavLi/NavLi";
import DropDownLI from "./NavLi/DropDown/DropDownLI";
import Image from "next/image";
import Link from "next/link";
import ButtonC from "../../components/shared/ButtonC";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const nav = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", nav);
    return () => {
      window.removeEventListener("scroll", nav);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-[10000] w-full ${
        navbar && "bg-blackSecondary"
      }`}
    >
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
            {/* Menu */}
            <div
              className="menu lg:hidden cursor-pointer"
              onClick={() => setOpen((x) => !x)}
            >
              <HiOutlineMenuAlt3 size={40} className="text-colorText" />
            </div>

            {/* NavList */}
            <div
              className={`${
                !open &&
                "absolute bg-teal-700 left-[-990px] lg:left-0 transition-all duration-200 ease-in-out lg:duration-[0ms] z-[1000]"
              } absolute top-0 left-0 bg-slate-800 lg:relative lg:top-0 z-[999] lg:justify-between w-screen h-screen lg:h-auto flex-col flex lg:flex lg:w-auto lg:order-1 lg:bg-transparent transition-all duration-700 ease-in-out lg:duration-[0ms]`}
              id="mobile-menu-4"
            >
              {/* ====Menu Close Icon ==== */}
              <div
                className="cursor-pointer text-white lg:hidden flex justify-end w-full p-8"
                onClick={() => setOpen(false)}
              >
                <AiOutlineClose size={29} />
              </div>
              <div className={`nav-menu`}>
                <ul className="main-menu pl-10 lg:pl-0 flex-col lg:flex-row lg:flex lg:items-center lg:flex-wrap gap-7 space-y-10 lg:space-y-0">
                  <NavLi text="HOME" />
                  <NavLi text="ABOUT US" />
                  <NavLi text="SERVICE" />

                  {/* Drop Down start */}
                  <DropDownLI text="PAGES" />
                  <DropDownLI text="CONTACT US" />
                  {/* Drop Down end */}
                  {/* Button */}
                  <div className="hidden lg:block">
                    <ButtonC title="GET STARTED" text="12px" />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
