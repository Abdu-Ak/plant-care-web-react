import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import ProfileNav from "../ProfileNav/ProfileNav";
import Posts from "./Posts";


function Profile() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/getprofile").then((res) => {
      console.log(res);
      if (res.data.user) {
       
        setData(res.data.user);
      }
    })
  },[])

  return (
    <>
      <div className="bg-white flex w-full  border-t-2 border-b-2">
           <ProfileNav/>
        <div className="flex flex-col items-center w-full">
          <div className=" mt-5">
            
              <img
                className="w-40 h-40 object-cover rounded-full"
                src={data.image ? data.image : "/images/user-default.png"}
                alt=""
              />
            
            
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="flex justify-center  p-2">
              <p className="font-sans text-xl font-medium ">
                {data.username ? data.username : "Username"}
              </p>
            </div>
            <div className=" p-2  flex">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-base font-medium ">
                  {data.bio}
                </p>
                <span className="font-sans text-base font-medium text-gray-500">
                  bio
                </span>
              </div>
            </div>
            <div className="  p-2  flex ">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-sans text-base font-medium ">
                  {data.phone}
                </p>
                <span className="font-sans text-base font-medium text-gray-500">
                  Phone
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Posts/>
    </>
  );
}

export default Profile;
