import axios from "../../../axios";
import React, { useState } from "react";

function EditProfile() {
  const initialData = {
    username: "",
    phone: "",
    bio: "",
  };

  const [edit, setEdit] = useState(true);
  const [data, setData] = useState(initialData);
  const [image, setImage] = useState("");

  const [err, setErr] = useState("");

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const validate = () => {
    if ((data.phone.length !== 10) & (data.phone !== "")) {
      setErr("invalid phone..!");
    } else {
      setErr("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (!err) {
      
    }
  };

  return (
    <>
      <div className="p-5 md:p-10  w-full h-full   ">
        <div className="flex justify-between">
          <button className="md:hidden pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className=" flex  px-5 pt-4 text-3xl md:text-4xl font-bold font-sans text-gray-500 md:mx-20 md:px-10">
            {edit ? "Edit Profile" : " Add Password"}
          </h1>

          <button className="md:hidden pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-blue-700 w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex border mt-10 w-full">
          <div className="m-2 w-1/4 hidden md:flex md:flex-col">
            <div
              className={`p-3  rounded-2xl ${
                edit ? "bg-gray-200 " : "hover:bg-gray-200 "
              } `}
              onClick={() => {
                setEdit(true);
              }}
            >
              <p
                className={`font-sans md:text-xl font-medium cursor-pointer ${
                  edit ? "text-gray-500 " : " hover:text-gray-500"
                } `}
              >
                Edit profile
              </p>
            </div>
            <div
              className={`p-3  rounded-2xl ${
                !edit ? "bg-gray-200 " : "hover:bg-gray-200 "
              } `}
              onClick={() => {
                setEdit(false);
              }}
            >
              <p
                className={`font-sans md:text-xl font-medium cursor-pointer ${
                  !edit ? "text-gray-500 " : " hover:text-gray-500"
                } `}
              >
                Add Password
              </p>
            </div>
          </div>
          {edit ? (
            <div className="border w-full p-5">
              <div className="flex flex-col items-center">
                <img
                  className="w-28 object-cover rounded-full"
                  src={image ? image : "/images/user-default.png"}
                  alt=""
                />
                <label
                  for="profile"
                  className="mt-2  font-sans md:text-lg font-medium text-blue-800 hover:text-blue-400 cursor-pointer"
                >
                  <input
                    id="profile"
                    type="file"
                    name="image"
                    className="hidden"
                    onChange={handleImage}
                  />
                  change profile photo
                </label>
              </div>
              <div className="flex flex-col   items-center  mt-5 p-3">
                <div>
                  <p className="font-sans  text-gray-500 font-medium">
                    Username
                  </p>
                  <input
                    className="mt-2 rounded-full border-2 border-third pl-2"
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col   items-center mt-5 ">
                <div>
                  <p className="font-sans  text-gray-500 font-medium">Bio</p>
                  <textarea
                    className="mt-2 rounded-3xl border-2 border-third pl-2"
                    cols="25"
                    rows="3"
                    name="bio"
                    value={data.bio}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col   items-center mt-5 ">
                <div>
                  <p className="font-sans  text-gray-500 font-medium">Phone</p>
                  <input
                    className="mt-2 rounded-full border-2 border-third pl-2"
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                  />
                  <p className="text-red-600 font-semibold mt-2">{err}</p>
                </div>
              </div>
              <div className="hidden md:flex justify-center mt-5 pl-28 ">
                <button
                  className="border-2 text-primary  font-semibold border-primary bg-third w-20 h-10 rounded-2xl "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div className="mt-3 md:hidden  border-t-2">
                <p
                  className="font-sans font-medium text-blue-800  mt-2 "
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit profile
                </p>
                <p
                  className="font-sans font-medium text-blue-800 mt-2 "
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Change Password
                </p>
              </div>
            </div>
          ) : (
            <div className="border w-full p-5">
              <div className="flex flex-col items-center  mt-5 p-3">
                <div>
                  <p className="font-sans  text-gray-500 font-medium ">
                    Old password
                  </p>
                  <input
                    className="mt-2 rounded-full border-2 border-third pl-2"
                    type="password"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mt-5 p-3">
                <div>
                  <p className="font-sans  text-gray-500 font-medium">
                    New password
                  </p>
                  <input
                    className="mt-2 rounded-full border-2 border-third pl-2"
                    type="password"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center  mt-5 p-3">
                <div>
                  <p className="font-sans  text-gray-500 font-medium">
                    repeat password
                  </p>
                  <input
                    className="mt-2 rounded-full border-2 border-third pl-2"
                    type="password"
                  />
                </div>
              </div>
              <div className="hidden md:flex justify-center mt-5 pl-28 ">
                <button className="border-2 text-primary  font-semibold border-primary bg-third w-20 h-10 rounded-2xl ">
                  Submit
                </button>
              </div>
              <div className="mt-3 md:hidden  border-t-2">
                <p
                  className="font-sans font-medium text-blue-800  mt-2 "
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit profile
                </p>
                <p
                  className="font-sans font-medium text-blue-800 mt-2 "
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Change Password
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EditProfile;
