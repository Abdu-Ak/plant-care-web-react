/* eslint-disable react-hooks/exhaustive-deps */
import axios from "../../../axios";
import React, {  useState } from "react";


function AdminLogin() {
const [username,setUsername]= useState("")
const [password,setPassword]= useState("")
const [errors, setErrors] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault();

  axios.post("/admin/login",{
    username,
    password
  }).then((res)=>{
    if (res.data.err) {
      setErrors(res.data.err)
    }else if(res.data.logged){
      localStorage.setItem("token" ,res.data.token )
      window.location="/admin/dashboard"
    }
  })

}



  return (
    <div>
      <section className=" dark:bg-secondory">
        <nav>
          <div className="w-full bg-primary h-20">
            <img className="w-20" src="/images/nav-logo.png" alt="" />
          </div>
        </nav>
        <div className="flex flex-col items-center  px-6 py-32 mx-auto h-screen ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-third dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Admin
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User Name
                  </label>
                  <input
                    onChange={(e)=>setUsername(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                  onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="password"
                  />
                </div>
               
                <button
                  type="submit"
                  className="w-full text-white bg-third border border-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
              <p className="text-red-600 font-semibold mt-2">{errors}</p>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;
