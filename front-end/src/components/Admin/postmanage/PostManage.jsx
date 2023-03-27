import axios from '../../../axios/AdminAxios';
import React, { useEffect, useState } from 'react'
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
function PostManage() {
 
    const [ posts ,setPosts ] = useState([])
   
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
           axios.get(`/admin/deletePost/${id}`).then((res)=>{
            if (res.data.success) {
              window.location.reload()
            }
           })
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      };

useEffect(() => {
    axios.get("/admin/posts").then((res)=>{
      if (res.data.posts) {
       setPosts(res.data.posts)
       console.log(res.data.posts);
      }
    })
}, [])


  return (
    <>
     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
       
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Caption
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Tags
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                   
                      <img
                        className="w-10 h-10 rounded-full"
                        src={post.user[0].image ? post.user[0].image : "/images/user-default.png" }
                        alt="user profile"
                      />
                    
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {post.user[0].username }
                      </div>
                      <div className="font-normal text-gray-500">
                        {post.user[0].email}
                      </div>
                    </div>
                  </th>
                  <td className="px-3 py-4">{post.title}</td>
                  <td className="px-3 py-4">{post.caption}</td>
                  <td className="px-3 py-4">
                         <img className='w-20 h-20 rounded-md' src={post.image} alt="posts" />
                  </td>
                  <td className="px-3 py-4">
                    {post.taggedUsers.map((tag)=>{
                        return(
                            <p>
                                {tag.username ? tag.username : tag.email }
                            </p>
                        )
                    })}
                  </td>
                  <td className="px-3 py-4">
                    {post.Date}
                  </td>
                  <td className=" flex justify-center py-4">
                  <button
                        className="rounded-full hover:border-2 hover:bg-red-500  hover:border-red-500 hover:cursor-pointer  p-1"
                        onClick={() => {
                         handleDelete(post._id)
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
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
  )
}

export default PostManage