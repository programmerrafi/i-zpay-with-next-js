import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillApple, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaGooglePlay, FaLinkedinIn } from "react-icons/fa";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import Icons from "../components/shared/Icons";
import Text from "../components/shared/Text";
import Title from "../components/shared/Title";

const Footer = () => {
  return (
    <footer className="bg-blackSecondary text-colorWhite pt-6">
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center border-b border-gray-700 pb-16">
          {/* Left */}
          <div className="w-[30%]">
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
            <h1 className="text-whiteGray text-sm font-[300] pt-4 leading-7 ml-1">
              One Application for Every Payment
            </h1>
            <div className="flex items-center gap-8 mt-4">
              <Icons name={AiFillApple} size={35} />
              <Icons name={FaGooglePlay} size={35} />
              <Icons name={RiCharacterRecognitionFill} size={35} />
            </div>
          </div>
          {/* Right */}
          <div className="flex w-[70%] gap-36">
            {/* bottom-details-other */}
            <div className="">
              <Title title="Other Pages" />
              <Text text="Home" />
              <Text text="About Us" />
              <Text text="Services" />
              <Text text="Contact" />
              <Text text="Project" />
            </div>
            {/* Quick Links */}
            <div className="">
              <Title title="Quick Links" />
              <Text text="Privacy Policy" />
              <Text text="Term Of Service" />
              <Text text="Disclaimer" />
              <Text text="Credits" />
              <Text text="FAQ" />
            </div>
            {/* Social media */}
            <div className="">
              <Title title="Social Media" />
              <Text
                text={`Our Support and Sales team is available 24 /7 to answer your queries`}
                className="w-[320px]"
              />
              <div className="flex items-center gap-6 mt-4">
                {/* icons */}
                <Icons name={AiFillFacebook} />
                <Icons name={AiOutlineTwitter} />
                <Icons name={FaLinkedinIn} />
                <Icons name={BsInstagram} />
              </div>
            </div>
          </div>
        </div>
        {/* author */}
        <div className="flex justify-between py-10">
          <h1 className="text-whiteGray text-xs font-[300] leading-7 ml-1">
            Izpay by Md Rafi
          </h1>
          <h1 className="text-whiteGray text-xs font-[300] leading-7 ml-1">
            Copyright © 2022. All rights reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
