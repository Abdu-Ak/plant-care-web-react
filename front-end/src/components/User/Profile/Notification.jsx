import React, { useContext, useEffect, useState } from "react";
import { Drawer } from "antd";
import { NotificationContext } from "../../../context/NotificationContext";
import axios from "../../../axios/axios";
function Notification() {
  const { onClose, open } = useContext(NotificationContext);
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    axios.get(`/deleteMessage/${id}`).then((res) => {
      if (res.data.success) {
       window.location.reload()
      }
    });
  };

  useEffect(() => {
    axios.get("/getNotification").then((res) => {
      if (res.data.success) {
        setData(res.data.data.message);
       
      }
    });
  }, []);

  return (
    <>
      <Drawer
        title="Notification : "
        placement={"left"}
        onClose={onClose}
        open={open}
        key={"left"}
        style={{ backgroundColor: "#F8F4EB" }}
      >
        {data.map((message, index) => {
          return (
            <div
              key={index}
              className="shadow-lg rounded-lg bg-white mx-auto m-2 p-4 notification-box flex"
            >
              <div className="pr-2">
                <svg
                  className="fill-current text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm pb-2">
                  {message.title}
                  <span class="float-right">
                    <svg
                      className="fill-current text-gray-600 hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      onClick={() => {
                        handleDelete(message._id);
                      }}
                    >
                      <path
                        className="heroicon-ui"
                        d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-sm text-gray-600  tracking-tight ">
                  {message.body}
                </div>
              </div>
            </div>
          );
        })}
      </Drawer>
    </>
  );
}

export default Notification;
