import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imgs } from "../../data/Logodata";

const LogoSlide = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="logo_slide bg-bgMain lg:p-20">
      <div className="container">
        <Slider {...settings}>
          {imgs.map((img) => {
            return (
              <div key={img.id} className="slide_logo_img">
                <Link href="#">
                  <a href="/" className="outline-none border-none">
                    <img src={img.url} alt="logo" className="h-12" />
                  </a>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlide;
