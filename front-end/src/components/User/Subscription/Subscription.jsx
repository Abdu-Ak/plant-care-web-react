import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";

function Subscription() {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    axios.get("/getPlans").then((res) => {
      if (res.data.success) {
        setPlan(res.data.plan);
        console.log(res.data.plan);
      }
    });
  }, []);

  return (
    <>
      <div className="px-4 py-16 bg-white w-full mx-auto ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
              <span className="relative">Subscription Plans</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Take subscription to get access to the upcoming and premium feature
            .
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
          {plan.map((plan) => {
            return (
              <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
                <div className="mb-6">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b">
                    <div>
                      <p className="text-sm font-bold  tracking-wider uppercase">
                        {plan.name}
                      </p>
                      <p className="text-5xl font-extrabold">
                        {"\u20B9"}
                        {plan.amount}
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                      <svg
                        className="w-10 h-10 text-gray-600"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-width="2"
                      >
                        <path
                          d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                          fill="none"
                          stroke="currentColor"
                        ></path>
                        <path
                          d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                          fill="none"
                          stroke="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-bold tracking-wide">Features</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2">
                          <svg
                            className="w-4 h-4 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-width="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            ></polyline>
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            ></circle>
                          </svg>
                        </div>
                        <p className="font-medium text-gray-800">
                          10 deploys per day
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2">
                          <svg
                            className="w-4 h-4 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-width="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            ></polyline>
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            ></circle>
                          </svg>
                        </div>
                        <p className="font-medium text-gray-800">
                          10 GB of storage
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2">
                          <svg
                            className="w-4 h-4 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-width="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            ></polyline>
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            ></circle>
                          </svg>
                        </div>
                        <p className="font-medium text-gray-800">
                          Unlimited domains
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2">
                          <svg
                            className="w-4 h-4 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-width="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            ></polyline>
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            ></circle>
                          </svg>
                        </div>
                        <p className="font-medium text-gray-800">
                          SSL Certificates
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                  >
                    Start for free
                  </a>
                  <p className="text-sm text-gray-600">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Subscription;
