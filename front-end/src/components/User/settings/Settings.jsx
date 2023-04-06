import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import ChangePass from "../ChangePass/ChangePass";
import EditProf from "../EditProfile/EditProf";
import Calender from "../calender/Calender";

function Settings() {
  const [edit, setEdit] = useState(true);
  const [calender, setCalender] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/getprofile").then((res) => {
      if (res.data.user) {
        setData(res.data.user);
      }
    });
  }, []);

  return (
    <>
      <div className="p-5 md:p-10  w-full h-full   ">
        <div className="flex justify-between">
          <h1 className=" flex  px-5 pt-4 text-3xl md:text-4xl font-bold font-sans text-gray-500 md:mx-20 md:px-10">
            {calender
              ? "Set Calender "
              : edit
              ? "Edit Profile"
              : data.password
              ? "Change Password"
              : "Add Password"}
          </h1>
        </div>
        <div className="flex border mt-10 w-full">
          <div className="m-2 w-1/4 hidden md:flex md:flex-col">
            <div
              className={`p-3  rounded-2xl ${
                !calender && edit ? "bg-gray-200 " : "hover:bg-gray-200 "
              } `}
              onClick={() => {
                setEdit(true);
                setCalender(false);
              }}
            >
              <p
                className={`font-sans md:text-xl font-medium cursor-pointer ${
                  !calender && edit ? "text-gray-500 " : " hover:text-gray-500"
                } `}
              >
                Edit profile
              </p>
            </div>
            <div
              className={`p-3  rounded-2xl ${
                !calender && !edit ? "bg-gray-200 " : "hover:bg-gray-200 "
              } `}
              onClick={() => {
                setEdit(false);
                setCalender(false);
              }}
            >
              <p
                className={`font-sans md:text-xl font-medium cursor-pointer ${
                  !calender && !edit ? "text-gray-500 " : " hover:text-gray-500"
                } `}
              >
                {data.password ? "Change Password" : "Add Password"}
              </p>
            </div>
            <div
              className={`p-3  rounded-2xl ${
                calender ? "bg-gray-200 " : "hover:bg-gray-200 "
              } `}
              onClick={() => {
                setCalender(!calender);
              }}
            >
              <p
                className={`font-sans md:text-xl font-medium cursor-pointer ${
                  calender ? "text-gray-500 " : " hover:text-gray-500"
                } `}
              >
                Set Calender
              </p>
            </div>
          </div>

          <div className="border w-full px-5 p-2">
            {calender ? <Calender /> : edit ? <EditProf /> : <ChangePass />}

            <div className="mt-3 md:hidden  border-t-2">
              <p
                className="font-sans font-medium text-blue-800  mt-2 "
                onClick={() => {
                  setEdit(true);
                  setCalender(false);
                }}
              >
                Edit profile
              </p>
              <p
                className="font-sans font-medium text-blue-800 mt-2 "
                onClick={() => {
                  setEdit(false);
                  setCalender(false);
                }}
              >
                {data.password ? "Change Password" : "Add Password"}
              </p>
              <p
                className="font-sans font-medium text-blue-800  mt-2 "
                onClick={() => {
                  setCalender(!calender);
                }}
              >
                Set Calender
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
