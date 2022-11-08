import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { RiCharacterRecognitionFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-blackSecondary text-colorWhite pt-6 pb-10">
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          {/* Left */}
          <div className="">
            <Link href="/">
              <a href="/">
                <Image
                  src="/icons/logo.png"
                  width="160"
                  height="58"
                  objectFit="contain"
                />
              </a>
            </Link>
            <h1 className="text-center text-colorWhite text-base font-[300] pt-4 leading-7 ml-1">
              One Application for Every Payment
            </h1>
            <div className="flex items-center gap-8 mt-4">
              <AiFillApple size={35} className="text-colorText" />
              <FaGooglePlay size={35} className="text-colorText" />
              <RiCharacterRecognitionFill
                size={35}
                className="text-colorText"
              />
            </div>
          </div>
          {/* Right */}
          <div className="">
            <h2 className="text-colorText text-xl font-semibold">
              Other Pages
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
