import axios from "../../../axios/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../ProfileNav/ProfileNav";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

function Diary() {
  const [data, setData] = useState([]);

  const { confirm } = Modal;
  const handleDelete = (id) => {
    confirm({
      title: "Are you sure delete this task ?",
      icon: <ExclamationCircleFilled />,
      content: "Deleted data cant be retrive ",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios
          .post("deleteDiary", {
            id: id,
          })
          .then((res) => {
            if (res.data.success) {
              window.location.reload();
            }
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const handleSchedule = (id) => {
    axios.get(`/getSchedule/${id}`).then((res)=>{
      if (res.data.success) {
        window.location.reload()
      }
    })
  };



  useEffect(() => {
    axios.get("/getdiary").then((res) => {
      if (res.data.user) {
        setData(res.data.user);
      }
    });
  }, []);

  return (
    <>
      <div className="bg-white flex w-full  border-t-2 ">
        <ProfileNav />

        <div className="flex flex-col w-full h-full">
          <div className="  m-5 ">
            <p className="text-4xl font-philosephor font-semibold">Diary</p>
          </div>
          {data.length > 0 ? (
            <div className=" flex flex-col items-center w-full h-full">
              <div className="md:flex p-10 md:justify-center  md:flex-wrap gap-6">
                {data.map((data, index) => {
                  return (
                    <div
                      className="w-full h-84 p-3 border  bg-white mt-5 rounded-lg md:w-80 "
                      key={index}
                    >
                      <div className="flex border-b m-2 justify-between items-center">
                        <div className="p-2">
                          <p className="text-base text-gray-500">Date :</p>
                          <p className="text-sm font-medium">{data.Date}</p>
                        </div>
                        <div className="flex ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-red-500  hover:text-red-800 hover:cursor-pointer"
                            onClick={() => {
                              handleDelete(data._id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                         {data.Notification ? (<svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 ml-3 hover:text-blue-500 hover:cursor-pointer"
                            onClick={() => {
                              handleSchedule(data._id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
                            />
                          </svg>) :  <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 ml-3 hover:text-green-500 hover:cursor-pointer"
                            onClick={() => {
                              handleSchedule(data._id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                            />
                          </svg> }

                         

                          
                        </div>
                      </div>
                      <div className="flex items-center justify-center ">
                        <img
                          className="w-40 md:w-60 h-40"
                          src={data.image}
                          alt="plant"
                        />
                      </div>
                      <p className="text-lg font-semibold mt-2">
                        {data.commonName}
                      </p>

                      <p className="text-sm mt-3 text-gray-500">
                        Other name : {data.otherName}
                      </p>
                      <p className="text-sm mt-2 text-gray-500">
                        Scientific name : {data.scientificName}
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
          ) : (
            <div className="flex flex-col items-center w-full h-full ">
              <img
                className="w-44 h-44 md:w-80 md:h-80"
                src="/images/empty diary.png"
                alt="diary "
              />

              <p className="font-philosephor text-2xl md:font-semibold md:text-3xl">
                I am empty : (
              </p>
              <p className="text-gray-500 text-lg">Your diary is empty.</p>

              <Link to={"/add-diary"}>
                <button className="font-serif font-semibold m-5 border-b-2 p-2 text-green-700 hover:border-b-green-700 ">
                  Go to Planting
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Diary;
