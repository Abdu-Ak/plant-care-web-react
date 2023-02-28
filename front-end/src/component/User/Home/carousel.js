import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselBackground = () => {
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
    <div className="relative -z-50 h-screen">
      <Slider {...settings}>
        <div
          className="h-screen bg-driving bg-cover bg-center bg-[url('https://images.pexels.com/photos/1094246/pexels-photo-1094246.jpeg?auto=compress&cs=tinysrgb&w=600')]"
         
        />
        <div
          className="h-screen bg-cooking bg-cover bg-center bg-[url('https://images.pexels.com/photos/1242458/pexels-photo-1242458.jpeg?auto=compress&cs=tinysrgb&w=600')]"
          
        />
        <div
          className="h-screen bg-electrical bg-cover bg-center bg-[url('https://images.pexels.com/photos/2815150/pexels-photo-2815150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
        />
        <div
          className="h-screen bg-gardening bg-cover bg-center bg-[url('https://images.pexels.com/photos/784399/pexels-photo-784399.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')]"
        />
        <div
          className="h-screen bg-pet_care bg-cover bg-center bg-[url('https://images.pexels.com/photos/2252306/pexels-photo-2252306.jpeg?auto=compress&cs=tinysrgb&w=600')]"
        />
        <div    
          className="h-screen bg-plumber bg-cover bg-center bg-[url('https://images.pexels.com/photos/2784891/pexels-photo-2784891.jpeg?auto=compress&cs=tinysrgb&w=600')]"
        />
      </Slider>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70" />
      <div>
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center gap-16">
          <div className="absolute top-40 left-0 flex h-80 w-full items-center justify-center">
            <div className="w-67">
              <h1 className="text-center text-3xl text-white">
                Connecting you with trusted service professionals <br /> for all
                your home and lifestyle needs.
              </h1>
            </div>
          </div>
          <div className="w-7/8 flex gap-3 mt-32 rounded border border-none">
            <input
              type="text"
              className="block w-full rounded-md border bg-white px-16 py-4 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40"
              placeholder="Search for a service"
            />
          </div>
        </div>       
      </div>
    </div>
  );
};

export default CarouselBackground;
