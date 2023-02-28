import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative  h-screen">
      <Slider {...settings}>
        <div className="h-screen  bg-cover bg-center bg-[url('https://images.pexels.com/photos/1094246/pexels-photo-1094246.jpeg?auto=compress&cs=tinysrgb&w=600')]" />
        <div className="h-screen  bg-cover bg-center bg-[url('https://images.pexels.com/photos/1242458/pexels-photo-1242458.jpeg?auto=compress&cs=tinysrgb&w=600')]" />
        <div className="h-screen  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2815150/pexels-photo-2815150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]" />
        <div className="h-screen  bg-cover bg-center bg-[url('https://images.pexels.com/photos/784399/pexels-photo-784399.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')]" />
        <div className="h-screen  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2252306/pexels-photo-2252306.jpeg?auto=compress&cs=tinysrgb&w=600')]" />
        <div className="h-screen  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2784891/pexels-photo-2784891.jpeg?auto=compress&cs=tinysrgb&w=600')]" />
      </Slider>
      <div className="absolute top-0 left-0 h-full w-full bg-black/60" />

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center gap-16 ">
        <div className="absolute top-40 left-0 flex h-80 w-full items-center justify-center ">
          <div className="w-67">
            <h1 className="text-center text-3xl font-philosephor text-primary tracking-wider ">
              Connecting you with the beauty of nature <br /> make your home and
              lifestyle better.
            </h1>
          </div>    
        </div>
        <div className="z-10 w-1/6  flex  mt-32   ">
          <button className="w-full hover:bg-primary hover:text-gray-700 h-12 rounded-2xl border-2 font-semibold border-primary text-lg  text-primary bg-third/70">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
