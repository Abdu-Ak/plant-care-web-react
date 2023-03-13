import axios from "axios";
import React, { useEffect, useState } from "react";
import { PLANTKEY } from "../../../constants/Constants";

function AddDiary() {
  const [data, setData] = useState([]);
  const [key, setKey] = useState("");

  const handleSearch = () => {
    axios
      .get(`https://perenual.com/api/species-list?key=${PLANTKEY}&q=${key}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  };

  const handleAdd = (id) => {
    const plant = data.filter((obj) => {
      return obj.id === id;
    });

    console.log(plant);
  };

  useEffect(() => {
    axios
      .get(`https://perenual.com/api/species-list?page=1&key=${PLANTKEY}`)
      .then((res) => {
        res.data.data.shift();
        setData(res.data.data);
      });
  }, []);

  return (
    <>
      <div className="bg-[#dae4ea] p-10">
        <p className="text-4xl font-serif font-semibold text-third">
          Select Plants
        </p>
      </div>
      <div className="flex justify-center items-center md:px-5 min-h-screen bg-[#dae4ea]">
        <div className="w-96  h-auto bg-[#f2f9fb] transition-all rounded-lg  md:w-full p-4">
          <div className="relative">
            <input
              className="w-full h-12 text-sm outline-none border mt-3 rounded-lg transition-all pl-7 pr-20 focus:border-blue-600"
              type="text"
              placeholder="Search  like plant name,family name etc."
              onChange={(e) => {
                setKey(e.target.value);
              }}
            />
            <i className="absolute top-7 text-[#bfc6cd] left-2 fa fa-search"></i>
            <button
              className="absolute right-2 rounded-lg cursor-pointer transition-all hover:bg-blue-900 top-4 h-10 w-16 bg-blue-500 text-white text-sm"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="flex mt-3 justify-between items-center">
            <p className="text-[#545968] text-sm font-semibold">
              Showing {data.length} plants
            </p>
          </div>
          <div className="md:flex md:justify-center md:flex-wrap gap-6">
            {data.map((data, index) => {
              return (
                <div
                  className="w-full h-84 p-3 border  bg-white mt-5 rounded-lg md:w-80  active:border-green-500 active:border-2"
                  key={index}
                  onClick={() => {
                    handleAdd(data.id);
                  }}
                >
                  <div className="flex items-center justify-center ">
                    <img
                      className="w-60 h-60"
                      src={data.default_image.original_url}
                      alt="plant"
                    />
                  </div>
                  <p className="text-lg font-semibold mt-2">
                    {data.common_name}
                  </p>

                  <p className="text-sm mt-3 text-gray-500">
                    Other name : {data.other_name}
                  </p>
                  <p className="text-sm mt-2 text-gray-500">
                    Scientific name : {data.scientific_name}
                  </p>
                  <div className="flex justify-evenly items-center mt-6">
                    {data.watering && (
                      <div>
                        <span className="h-9 w-9 border-2 rounded-full flex border-white">
                          <img
                            className="rounded-full object-cover h-full w-full"
                            src="/images/water.png"
                            alt=""
                          />
                        </span>
                        <p className="text-sm  text-gray-500">
                          {data.watering === "Average" ? "120ml" : "500ml"}
                        </p>
                      </div>
                    )}
                    {data.sunlight && (
                      <div>
                        <span className="h-9 w-9 border-2 rounded-full flex border-white">
                          <img
                            className="rounded-full object-cover h-full w-full"
                            src="/images/sun.jpg"
                            alt=""
                          />
                        </span>
                        <p className="text-sm  text-gray-500">6-8 hr</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDiary;
