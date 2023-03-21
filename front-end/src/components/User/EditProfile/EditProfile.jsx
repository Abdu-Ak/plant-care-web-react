import axios from "../../../axios/axios";
import React, { useState } from "react";
import ChangePass from "../ChangePass/ChangePass";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const validate = () => {
    const phone = data.phone.toString();
    if (phone) {
      if ((phone.length !== 10) & (phone !== "")) {
        setErr("invalid phone..!");
      } else {
        setErr("");
      }
    } else {
      setErr("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();
    if (!err) {
      let file = new FormData();
      file.append("image", image);
      file.append("username", data.username);
      file.append("phone", data.phone);
      file.append("bio", data.bio);

      axios
        .post("/editprofile", file, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.err) {
            setErr(res.data.err);
          } else if (res.data.success) {
            navigate("/profile");
          }
        });
    }
  };

  useEffect(() => {
    axios.get("/getprofile").then((res) => {
      if (res.data.user) {
        setData(res.data.user);

        setImg(res.data.user.image);
      }
    });
  }, []);

  return (
    <>
      <div className="p-5 md:p-10  w-full h-full   ">
        <form encType="mumultipart/form-data" onSubmit={handleSubmit}>
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
              {edit
                ? "Edit Profile"
                : data.password
                ? "Change Password"
                : "Add Password"}
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
                  {data.password ? "Change Password" : "Add Password"}
                </p>
              </div>
            </div>
            {edit ? (
              <div className="border w-full px-5 p-2">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Photo
                      </label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          {img ? (
                            <img
                              className=" object-cover rounded-full"
                              src={img}
                              alt=""
                            />
                          ) : (
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          )}
                        </span>
                        <label
                          for="profile"
                          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <input
                            id="profile"
                            type="file"
                            name="image"
                            className="hidden"
                            onChange={handleImage}
                          />
                          Change
                        </label>

                        <p className="text-red-600 font-semibold mt-2 mx-5">
                          {err === "Selected file is not an image" ? err : ""}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          for="company_website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Username
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                            className="h-10 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Adbul@11"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        for="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bio
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="bio"
                          value={data.bio}
                          onChange={handleChange}
                          rows="3"
                          className="px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="you@example.com"
                        ></textarea>
                      </div>
                      <p class="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          for="company_website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone number
                        </label>
                        <div clasclassNames="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="number"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            className="h-10 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="+91"
                          />
                        </div>
                        <p className="text-red-600 font-semibold mt-2">
                          {err === "invalid phone..!" ? err : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 flex justify-between md:justify-end bg-gray-50  sm:px-6">
                    <div className="md:hidden">
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
                        {data.password ? "Change Password" : "Add Password"}
                      </p>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border w-full p-5">
                <ChangePass />
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
                    {data.password ? "Change Password" : "Add Password"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProfile;
