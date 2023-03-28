import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import { RAZOR_KEY_ID } from "../../../constants/Constants";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
function Subscription() {
  const [plan, setPlan] = useState([]);
  const [subscribed , setSubscribed] = useState(false)
  const Razorpay = useRazorpay();
  const navigate = useNavigate();

  const handlePayment = (id) => {
    axios.get(`/subscribe/${id}`).then((res) => {
      if (res.data.order) {
        const options = {
          key: RAZOR_KEY_ID,
          amount: res.data.price * 100,
          currency: "INR",
          name: "Green_Pit",
          description: "Test Transaction",
          image: "/images/logo.png",
          order_id: res.data.order.id,
          handler: function (response) {
            verifyPayment(response, res.data);
          },
          prefill: {
            name: "MyBook",
            email: "mybook@gmail.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new Razorpay(options);
        rzp1.on("payment.failed", function () {
          message.error("payment failed");
          navigate("/");
        });

        rzp1.open();
      }
    });
  };

  const verifyPayment = (payment,details)=> {

     axios.post('/verifyPayment', { 
        payment,details
     }).then((res)=>{
        if (res.data.success) {
            message.success("Payment Completed Succesfully")
            navigate('/')
        }
    })
  }

  useEffect(() => {
    axios.get("/getPlans").then((res) => {
      if (res.data.success) {
        setPlan(res.data.plan);
        console.log(res.data.plan);
      }
    });
  }, []);
   
  useEffect(()=>{
      axios.get('/checkSubsciption').then((res)=>{
          if (res.data.subscribed) {
             setSubscribed(true)
          }
      })
  },[])

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
                      <div className="flex">
                        <p className="text-5xl font-extrabold">
                          {"\u20B9"}
                          {plan.amount}
                        </p>
                        <p className="flex text-sm font-medium justify-end items-end ml-3">
                          {plan.plan}/-
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                      <img src="/images/sub.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-bold tracking-wide">Features</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => {
                        return (
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
                              {feature}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div>
      
                  {subscribed ? ( <button
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                    disabled
                  >
                    Subscribed
                  </button>) : (<button
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                    onClick={() => {
                      handlePayment(plan._id);
                    }}
                  >
                    Subscribe
                  </button>) }

                  
                  <p className="text-sm text-gray-600">{plan.title}</p>
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
