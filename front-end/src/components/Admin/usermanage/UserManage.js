/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "../../../axios/AdminAxios";
import React, { useContext, useEffect, useState } from "react";
import UserView from "./UserView";
import { AdminViewContext } from "../../../context/AdminViewContext";

function UserManage() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const { view, setView } = useContext(AdminViewContext);

  const handleBlock = (id) => {
    axios.get(`/admin/blockuser/${id}`)
  };

  const handleView = (id) => {
    setView(!view);
    setId(id);
  };

  useEffect(() => {
    axios.get("/admin/getusers").then((res) => {
      if (res.data.userdata) {
        setUsers(res.data.userdata);
      }
    });
  },[]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {view && <UserView id={id} />}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Bio
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.image ? (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.image}
                        alt="user profile"
                      />
                    ) : (
                      <img
                        className="w-10 h-10 rounded-full"
                        src="/images/user-default.png"
                        alt="user profile"
                      />
                    )}
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {user.username}
                      </div>
                      <div className="font-normal text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.bio}</td>
                  <td className="px-6 py-4">
                    {user.isBlock ? (
                      <div className="flex items-center">
                        <div className="mr-2 ">
                          <img
                            className="w-4 h-4"
                            src="/images/block.png"
                            alt=""
                          />
                        </div>
                        Blocked
                      </div>
                    ) : user.status === "online" ? (
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                        Online
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                        Offline
                      </div>
                    )}
                  </td>
                  <td className="py-4">
                    {user.isBlock === true ? (
                      <button
                        className="rounded-full hover:border-2 hover:bg-green-500  hover:border-green-500  p-2"
                        onClick={() => {
                          handleBlock(user._id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        className="rounded-full hover:border-2 hover:bg-red-500  hover:border-red-500  p-2"
                        onClick={() => {
                          handleBlock(user._id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </button>
                    )}

                    <button
                      className="ml-3 rounded-full hover:border-2 hover:bg-blue-500 hover:border-blue-500  p-2"
                      onClick={() => {
                        handleView(user._id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserManage;
