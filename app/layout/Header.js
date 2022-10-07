import Image from "next/image";
import Link from "next/link";
import navLinks from "../data/navbar";
// import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="relative z-50 w-full">
      <div className="container w-full">
        {/* Header Top Area */}
        <div className="flex justify-between items-center w-full">
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
          {/* Icons */}
          <div className="flex text-colorWhite flex-row md:space-x-8 md:mt-0 md:text-base font-medium">
            {navLinks.map((link, index) => {
              return (
                <span key={index} className="text-colorWhite">
                  <Link href={"/"} key={index}>
                    <a
                      key={index}
                      href={"/"}
                      className={`${""} text-colorWhite cursor-pointer block py-2 pr-4 pl-3  md:border-0 md:hover:text-[#63CF50]`}
                      aria-current="page"
                    >
                      {link.name}
                    </a>
                  </Link>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
