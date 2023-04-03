import axios from "../../../axios/axios";
import React, { useContext, useEffect, useState } from "react";
import { PLANTKEY } from "../../../constants/Constants";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../../../context/LoaderContext";
import Loader from "../Loader/Loader";

function AddDiary() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [key, setKey] = useState("");
  const [num, setNum] = useState(null);
  const [diary, setDiary] = useState({});
  const {load ,setLoad } = useContext(LoaderContext)

  const handleSearch = () => {
    if (key) {
    setLoad(true)

      axios
        .get(`https://perenual.com/api/species-list?key=${PLANTKEY}&q=${key}`)
        .then((res) => {
         setLoad(false)
          setData(res.data.data);
        });
    }
  };

  const handleDiary = () => {
    if (diary.id) {
      let file = new FormData();
      file.append("image", diary.default_image.original_url);
      file.append("commonName", diary.common_name);
      file.append("otherName", diary.other_name);
      file.append("scientificName", diary.scientific_name);
      file.append("watering", diary.watering);
      file.append("sunlight", diary.sunlight);

      axios
        .post("/addDiary", file, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.success) {
            navigate("/diary");
          }
        });
    }
  };

  const handleAdd = (id, index) => {
    if (num === null) {
      setNum(index);

      const plant = data.filter((obj) => {
        return obj.id === id;
      });
      setDiary(plant[0]);
    } else {
      setNum(null);
    }
  };

  useEffect(() => {
    setLoad(true)
    axios
      .get(`https://perenual.com/api/species-list?page=1&key=${PLANTKEY}`)
      .then((res) => {
         setLoad(false)
        res.data.data.shift();
        setData(res.data.data);
      });
  }, [setLoad]);

  return (
    <>   
      { load && <div className="fixed z-20 w-full h-full flex justify-center items-center  bg-black/50" >
          <Loader/>
         </div>}
    
      <div className=" bg-[#dae4ea] p-10 flex justify-between items-center">
       
        <p className="text-4xl font-serif font-semibold text-third">
          Select Plants
        </p>
        {diary.id && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-green-800  hover:border hover:rounded-full hover:border-green-800 hover:cursor-pointer "
              onClick={handleDiary}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        )}
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
                  className={`w-full h-84 p-3   bg-white mt-5 rounded-lg md:w-80 ${
                    index === num ? "border-2 border-green-500" : "border"
                  } `}
                  key={index}
                  onClick={() => {
                    handleAdd(data.id, index);
                  }}
                >
                  <div className="flex items-center justify-center ">
                    <img
                      className="w-60 h-60"
                      src={data.default_image?.original_url}
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
