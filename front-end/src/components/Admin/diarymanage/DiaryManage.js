import axios from "../../../axios/AdminAxios";
import React, { useEffect, useState } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

function DiaryManage() {
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
        axios.post("/admin/deleteDiary", { id }).then((res) => {
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

  useEffect(() => {
    axios.get("/admin/diaries").then((res) => {
      if (res.data.data) {
        setData(res.data.data);
        console.log(res.data.data);
      }
    });
  }, []);

  return (
    <>
      <div className="w-full  px-3   md:flex-none">
        <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
          <p className="mb-0 font-sans text-3xl font-medium">
            Diary Management
          </p>
        </div>
        <div className="relative flex mt-5 flex-col w-full break-words bg-slate-300 border-0 shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="flex-auto  p-4 pt-6">
            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
              {data.map((data) => {
                return (
                  <li className="relative  md:flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-700 ">
                        {data.userdata.username}
                      </span>
                      <p className="mb-4  leading-normal text-base">
                        {data.userdata.email}
                      </p>
                    </div>
                    <div className="ml-auto border w-full lg:w-2/4 m-3 rounded-lg p-3 text-center   mx-10">
                      <div className="flex justify-end ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-red-500 rounded-full hover:text-red-800 hover:cursor-pointer"
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
                      </div>

                      <div className="md:flex  ">
                        <div className="flex justify-center">
                          <img
                            className="w-32 h-32  rounded-lg object-cover"
                            src={data.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col mt-5  p-3">
                          <p className="mb-2  leading-normal text-base">
                            {data.commonName}
                          </p>
                          <p className="mb-2  leading-normal text-base">
                            {data.scientificName}
                          </p>
                          <p className="mb-2  leading-normal text-base">
                            {data.Date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiaryManage;
