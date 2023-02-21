import React, { useState } from 'react'

function Login() {
    const [login, setLogin] = useState(true);
  return (
    <div>
         <div className=" bottom-0 lg:left-0 p-3  overflow-y-auto text-center  bg-primary/50 w-10/12 md:w-2/4 top-0">
        <div className="bg-secondory/50 rounded-lg flex flex-col items-center justify-center pt-5 pb-5">
          <div className="bg-third/50 rounded-full flex justify-around  items-center text-primary w-10/12 md:w-3/4 lg:w-2/4 h-12">
            <button
              className={`${login ? "bg-third rounded-full w-28  md:w-32 h-9" : ""} `}
              onClick={() => setLogin(true)}
            >
              Login
            </button>
            <button
              className={`${login ? "" : "bg-third rounded-full w-28 md:w-32 h-9"} `}
              onClick={() => setLogin(false)}
            >
              Register
            </button>
          </div>
          <div>
            <p className="text-[#5B5B5B] p-5 ">
            Welcome to Green Pit ..!
            </p>
          </div>
          { login ?  <div className="w-3/4">
            <form action="" className="flex flex-col  justify-start">
           
              <label htmlFor="username" className="text-start text-sm font-normal pb-3">User name</label>
              <input id="username" className="rounded-full text-center border border-primary  h-12" placeholder="Enter your username" type="text" />
               
              <label htmlFor="password" className="text-start text-sm font-normal mt-7 pb-3">Password</label>
              <input id="password" className="rounded-full text-center border border-primary h-12" placeholder="Enter your password" type="password" />
              <div className="flex flex-col justify-end items-end">
                <p className="text-sm font-normal m-3  hover:cursor-pointer hover:text-blue-700 hover:underline ">
                  Forgot pasword?
                </p>
                <button className="bg-third text-center text-primary rounded-full w-28  md:w-32 h-10   hover:border hover:border-primary">
                  Login
                </button>
              </div>
               
            </form>
          </div> : <div className="w-3/4">
            <form action="" className="flex flex-col  justify-start">
           
              <label htmlFor="username" className="text-start text-sm font-normal pb-3">User name</label>
              <input id="username" className="rounded-full text-center border border-primary  h-12" placeholder="Enter your username" type="text" />

              <label htmlFor="email" className="text-start text-sm font-normal mt-7 pb-3">Email</label>
              <input id="email" className="rounded-full text-center border border-primary mb-7  h-12" placeholder="Enter your Email" type="email" />
               
              <label htmlFor="password" className="text-start text-sm font-normal pb-3">Password</label>
              <input id="password" className="rounded-full text-center border border-primary h-12" placeholder="Enter your password" type="password" />
              <div className="flex flex-col justify-end items-end">
                <button className="bg-third text-center m-4 text-primary rounded-full w-28  md:w-32 h-10  hover:border hover:border-primary ">
                  Register
                </button>
              </div>
            </form>
             <div className="p-5 border-t-2 border-primary">
              <button className="w-full text-sm md:text-base  flex justify-center items-center h-10 rounded-full font-semibold bg-primary hover:border hover:border-secondory" >
                Sigup with Google
                <img className="w-6 ml-3 " src="/images/1534129544.svg" alt="" />
                </button> 
             </div>
          </div> }
        </div>
      </div>
    </div>
  )
}

export default Login