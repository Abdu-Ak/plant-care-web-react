import React, { useContext, useEffect, useState } from "react";
import { AdminViewContext } from "../../../context/AdminViewContext";
import axios from "../../../axios/AdminAxios";

function DiaryView({ id }) {
  const { view, setView } = useContext(AdminViewContext);
  const [user, setUser] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(`/admin/diaryview/${id}`).then((res) => {
      if (res.data.success) {
        setUser(res.data.user);
        setData(res.data.data);
        console.log(res.data.data);
      }
    });
  }, [setView, id, view]);

  return (
    <>
      <div className="fixed  z-10 left-0 p-3 md:left-72 md:w-3/6  w-full  ">
        <div className="relative mx-auto w-full">
          <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                  <div className="absolute  ">
                    <img
                      src={data.image}
                      alt="diary"
                      className="object-cover "
                    />
                  </div>
                </div>

                <span className="absolute top-0  right-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10  text-sm font-medium text-red-500 select-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6  hover:cursor-pointer"
                    onClick={() => setView(!view)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>

              <div className="mt-4">
                <h2
                  className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  {data.commonName}
                </h2>
                <p
                  className="mt-2 text-sm text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  {data.otherName}
                </p>
                <p
                  className="mt-2 text-sm text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  {data.scientificName}
                </p>
              </div>

              <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                  <img
                    className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current "
                    src="/images/water.png"
                    alt="water"
                  />
                  <span className="mt-2 xl:mt-0">{data.watering}</span>
                </p>
                <p className="inline-flex  flex-col xl:flex-row xl:items-center text-gray-800">
                  <img
                    className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current"
                    src="/images/sun.jpg"
                    alt=""
                  />
                  <span className="mt-2 xl:mt-0">{data.sunlight}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 mt-4">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="rounded-full w-6 h-6 md:w-8 md:h-8 ">
                      <img
                        src={user.image}
                        alt="user"
                        className="object-cover rounded-full w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                  </div>

                  <p className="ml-2 text-gray-800 line-clamp-1">
                    {user.username}
                  </p>
                </div>
                <div class="flex justify-end">
                  <p class="inline-block font-semibold text-gray-500 whitespace-nowrap leading-tight rounded-xl">
                    {data.Date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiaryView;
