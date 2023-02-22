import React, { useContext, useState,useEffect, useRef } from "react";
import { LoginContext } from "../../context/loginContext";
import jwt_decode from "jwt-decode"
import axios from "axios";

function Login() {
  const [login, setLogin] = useState(true);
  const [user,setUser]=useState({})
  const { showLog, setShowlog } = useContext(LoginContext)
  const signBtn = useRef(null)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleGoogle = async (response) => {
     const userObj = jwt_decode(response.credential)
  
     setUser({
      username : userObj.name,
      email : userObj.email,
      image : userObj.picture
     })
      
      axios.post("http://localhost:8000/signup",{
        user
      })
 
  };
  useEffect(() => {
    
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id:"674428782026-ssu85d1ml7nhb07r4mvqo0n6pn3r9ra9.apps.googleusercontent.com",
        callback: handleGoogle,
      });

      

      google.accounts.id.renderButton(signBtn.current, {
         type: "standard",
        theme: "standard",
        size: "large",
        text: "signUp_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [showLog,login,handleGoogle]);


  return (
    <div>
      {showLog ? (
        <div className=" bottom-0 lg:left-0 p-3  overflow-y-auto text-center  bg-primary/50 w-10/12 md:w-2/4 top-0">
          <div className="bg-secondory/50 rounded-lg flex flex-col items-center justify-center pt-5 pb-5">
            <div className="flex justify-end w-full pr-3">
              <svg
                onClick={() => setShowlog(!showLog)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="bg-third/50 rounded-full flex justify-around  items-center text-primary w-10/12 md:w-3/4 lg:w-2/4 h-12">
              <button
                className={`${
                  login ? "bg-third rounded-full w-28  md:w-32 h-9" : ""
                } `}
                onClick={() => setLogin(true)}
              >
                Login
              </button>
              <button
                className={`${
                  login ? "" : "bg-third rounded-full w-28 md:w-32 h-9"
                } `}
                onClick={() => setLogin(false)}
              >
                Register
              </button>
            </div>
            <div>
              <p className="text-[#5B5B5B] p-5 ">Welcome to Green Pit ..!</p>
            </div>
            {login ? (
              <div className="w-3/4">
                <form action="" className="flex flex-col  justify-start">
                  <label
                    htmlFor="username"
                    className="text-start text-sm font-normal pb-3"
                  >
                    User name
                  </label>
                  <input
                    id="username"
                    className="rounded-full text-center border border-primary  h-12"
                    placeholder="Enter your username"
                    type="text"
                  />

                  <label
                    htmlFor="password"
                    className="text-start text-sm font-normal mt-7 pb-3"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    className="rounded-full text-center border border-primary h-12"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <div className="flex flex-col justify-end items-end">
                    <p className="text-sm font-normal m-3  hover:cursor-pointer hover:text-blue-700 hover:underline ">
                      Forgot pasword?
                    </p>
                    <button
                      className="bg-third text-center text-primary rounded-full w-28  md:w-32 h-10 
                  hover:border hover:border-primary"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="w-3/4">
                <form action="" className="flex flex-col  justify-start">
                  <label
                    htmlFor="username"
                    className="text-start text-sm font-normal pb-3"
                  >
                    User name
                  </label>
                  <input
                    id="username"
                    className="rounded-full text-center border border-primary  h-12"
                    placeholder="Enter your username"
                    type="text"
                  />

                  <label
                    htmlFor="email"
                    className="text-start text-sm font-normal mt-7 pb-3"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="rounded-full text-center border border-primary mb-7  h-12"
                    placeholder="Enter your Email"
                    type="email"
                  />

                  <label
                    htmlFor="password"
                    className="text-start text-sm font-normal pb-3"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    className="rounded-full text-center border border-primary h-12"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <div className="flex flex-col justify-end items-end">
                    <button className="bg-third text-center m-4 text-primary rounded-full w-28  md:w-32 h-10  hover:border hover:border-primary ">
                      Register
                    </button>
                  </div>
                </form>
                <div className="p-5 border-t-2 w-full border-primary">
                  <button ref={signBtn}>
                    Sigup with Google
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;
