import axios from "../../../axios/axios";
import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../../context/loginContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [show, handleShow] = useState(false);
  const { showLog, setShowlog } = useContext(LoginContext);
  const token = localStorage.getItem("token");
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLogout = () => {
   
    axios.get('/logout').then((response) => {
    
      if (response.data.logout) {
        localStorage.removeItem("token");
        window.location = "/";
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div>
      <nav
        className={`fixed  z-50 w-full  ${
          show ? "bg-third/40" : "bg-transparent"
        } `}
      >
        <div className="flex items-center h-24  justify-between ">
          <div className="w-14 ml-5 md:mb-5 md:w-20 md:h-14 rounded-lg">
          <img
            className="w-full    object-cover rounded-lg hover:cursor-pointer"
            src="/images/logo.png"
            alt="nav_logo"
          />
          </div>
          <div className="hidden md:flex  ">
            <div className="flex items-center mr-14 ">
             <Link to={'/about'}>
             <h3 className="mr-3 font-sans font-semibold text-base text-primary hover:cursor-pointer hover:text-gray-500 ">
                About Us
              </h3>
             </Link>
              <h3 className="mr-3 font-sans font-semibold text-base  text-primary hover:cursor-pointer  hover:text-gray-500 ">
                Community
              </h3>
              {token ? (
                <h3
                  className="mr-3 font-sans font-semibold  text-primary hover:cursor-pointer  hover:text-gray-500   "
                  onClick={handleLogout}
                >
                  Logout
                </h3>
              ) : (
                <h3
                  className="mr-3 font-sans font-semibold  text-primary hover:cursor-pointer  hover:text-gray-500   "
                  onClick={() => setShowlog(!showLog)}
                >
                  Login
                </h3>
              )}
            </div>
            {token && (
              <div className="flex">
                <Link to={'/chat'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6   text-primary hover:cursor-pointer hover:text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                </Link>
               <Link to={'/profile'}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-3  text-primary hover:cursor-pointer hover:text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
               </Link>
              </div>
            )}
          </div>

          <div className="hidden md:flex pr-10">
            <form action="" className="relative mx-auto w-max ">
              <input
                type="search"
                className="peer  cursor-pointer relative z-10 h-8 w-8 rounded-full border text-primary bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-primary focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute  inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-primary px-3.5 peer-focus:border-primary peer-focus:stroke-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
          <button
            className="md:hidden w-7 h-7  hover:border-2
        border-third rounded-sm mr-10 "
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" w-6 h-6   text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className={` md:hidden flex-col  ${toggle ? "flex " : "hidden"}`}>
          <ul className="text-start ml-10 pt-5">
           <Link to={'/about'}>
           <li className="flex pb-3 font-sans font-semibold text-base  text-primary hover:cursor-pointer hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              About Us
            </li>
           </Link>
            <li className="flex pb-3 font-sans font-semibold text-base  text-primary hover:cursor-pointer hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              Community
            </li>
            {token ? (
              <li className="flex pb-3 font-sans font-semibold text-base  text-primary hover:cursor-pointer hover:text-gray-500"
              onClick={handleLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                Logout
              </li>
            ) : (
              <li
                className="flex pb-3 font-sans font-semibold text-base  text-primary hover:cursor-pointer hover:text-gray-500"
                onClick={() => {
                  setShowlog(!showLog);
                  setToggle(!toggle);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Login
              </li>
            )}

            <li className="flex pb-3 font-sans font-semibold text-base  text-primary hover:cursor-pointer hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              Chat
            </li>
            <li className="flex pb-3 font-sans font-semibold text-base    text-primary hover:cursor-pointer hover:text-gray-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Profile
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
