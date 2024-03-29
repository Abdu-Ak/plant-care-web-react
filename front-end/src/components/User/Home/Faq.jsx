import axios from "../../../axios/axios";
import React, { useContext, useEffect, useState } from "react";
import { BotContext } from "../../../context/BotContext";

function Faq() {

  const {showBot,setShowBot} = useContext(BotContext)
  const [subscribed , setSubscribed] = useState(false)
  


  useEffect(()=>{
    axios.get('/checkSubsciption').then((res)=>{
        if (res.data.subscribed) {
           setSubscribed(true)
        }
    })
},[])
  return (
    <>
      <div className="flex flex-col py-5 w-full bg-white/30">
        <h1 className=" flex  px-5 pt-4 text-4xl font-bold font-philosephor  text-third md:mx-20 md:px-10">
          Check Out FAQ
        </h1>
        <div className="w-full p-5 flex justify-center items-center">
          <ul className="w-full md:w-2/5  flex flex-col">
            <li className="rounded-2xl p-3  shadow-2xl bg-secondory h-16 flex items-center justify-center ">
              <div className="border-b-2 border-primary ">
                <p className="text-gray-700 font-sans font-medium text-lg">
                  How can i make crafted plants in my home garden ?
                </p>
              </div>
              <div className="rounded-full bg-white ml-5 md:ml-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
            </li>
            <li className="rounded-2xl px-3 mt-5  shadow-2xl bg-secondory h-16 flex items-center justify-center ">
              <div className="border-b-2 border-primary ">
                <p className="text-gray-700 font-sans font-medium text-lg">
                  How can i make crafted plants in my home garden ?
                </p>
              </div>
              <div className="rounded-full bg-white ml-5 md:ml-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
            </li>
            <li className="rounded-2xl p-3  mt-5 shadow-2xl bg-secondory h-16 flex items-center justify-center ">
              <div className="border-b-2 border-primary ">
                <p className="text-gray-700 font-sans font-medium text-lg">
                  How can i make crafted plants in my home garden ?
                </p>
              </div>
              <div className="rounded-full bg-white ml-5 md:ml-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
            </li>
           { subscribed && (<li className="flex  items-center justify-end pt-5">
           
           <button className="w-3/12  hover:bg-primary hover:text-gray-700 h-10 rounded-2xl border-2 font-semibold border-primary text-lg  text-primary  bg-third"
           onClick={()=>setShowBot(!showBot)}
           >
             Ask
           </button>
         
             </li>) }
          </ul>
        </div>
      </div>
    </>
  );
}

export default Faq;
