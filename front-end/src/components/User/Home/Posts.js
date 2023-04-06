/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "../../../axios/axios";

function Posts() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 ,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get("/posts").then((res) => {
      if (res.data.success) {
        setPost(res.data.posts);
        console.log(res.data.posts);
      }
    });
  }, []);


  return (
    <>
      <div className="  flex  w-full py-5  flex-col bg-secondory">
        <h1 className=" flex  px-5 pt-4 text-4xl font-bold font-philosephor  text-third md:mx-20 md:px-10">
          Latest Post
        </h1>
        <div className="container mx-auto mt-8 p-5">
          <Slider {...settings}>
            {posts.map((post) => (
              <div key={post.id} className="px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img className="w-full h-[198px]" src={post.image} alt={post.caption} />
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <img
                        className="h-8 w-8 rounded-full mr-2"
                        src={post.user[0].image ? post.user[0].image : "/images/user-default.png" }
                        alt=""
                      />
                      <h2 className="text-lg font-medium">
                        {post.user[0].username ? post.user[0].username : post.user[0].email}
                      </h2>
                    </div>
                    <div>
                      <p className="text-gray-500 font-medium">{post.title}</p>
                      <p className="text-gray-600">{post.caption}</p>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="flex flex-col">
                        {post.taggedUsers.map((tag) => {
                          return (
                            <p key={tag._id} className="text-blue-500 text-sm">#{tag.username ? tag.username : tag.email }</p>
                          );
                        })}
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs ">{post.Date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Posts;
