import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

function Posts() {
  const [posts, setPost] = useState([]);

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
        axios.get(`deletePost/${id}`).then((res) => {
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
    axios.get("/userPosts").then((res) => {
      if (res.data.success) {
        setPost(res.data.posts);
       
      }
    });
  }, []);

  return (
    <>
      <div className="  flex   w-full py-5  flex-col bg-secondory">
        <div className="flex  flex-wrap container justify-center  items-center gap-1 mx-auto  mt-8 p-5">
          {posts.map((post) => (
            <div key={post.id} className="px-4 py-4">
              <div className="bg-white relative rounded-lg w-80 h-80 shadow-lg overflow-hidden ">
                <div className="flex absolute right-4 top-3 ">
                  <button className="text-red-500   rounded-full bg-red-50 p-1 hover:text-red-800 hover:cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-red-500   rounded-full  hover:text-red-800 hover:cursor-pointer"
                      onClick={() => {
                        handleDelete(post._id);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
                <img
                  className="w-full h-[198px]"
                  src={post.image}
                  alt={post.caption}
                />
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-8 w-8 rounded-full mr-2"
                      src={
                        post.user[0].image
                          ? post.user[0].image
                          : "/images/user-default.png"
                      }
                      alt=""
                    />
                    <h2 className="text-lg font-medium">
                      {post.user[0].username
                        ? post.user[0].username
                        : post.user[0].email}
                    </h2>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium">{post.title}</p>
                    <p className="text-gray-600">{post.caption}</p>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="flex flex-col">
                      {post.taggedUsers.map((tag) => {
                        return (
                          <p key={tag._id} className="text-blue-500 text-sm">
                            #{tag.username ? tag.username : tag.email}
                          </p>
                        );
                      })}
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs ">{post.Date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
