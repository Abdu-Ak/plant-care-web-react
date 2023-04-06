import axios from '../../../axios/axios';
import React, { useEffect, useState } from 'react'

function Community() {

    const [posts, setPost] = useState([]);

    useEffect(() => {
      axios.get("/posts").then((res) => {
        if (res.data.success) {
          setPost(res.data.posts);
          console.log(res.data.posts);
        }
      });
    }, []);
  

  return (
    <> 
    <div className="  flex   w-full py-5  flex-col bg-secondory">
   
    <div className="flex  flex-wrap container justify-center  items-center gap-1 mx-auto  mt-8 p-5">
  
        {posts.map((post) => (
          <div key={post.id} className="px-4 py-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-[198px]" src={post.image} alt={post.caption} />
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src={post.user[0].image ? post.user[0].image : "/images/user-default.png" }
                    alt=""
                  />
                  <h2 className="text-lg font-medium">
                    {post.user[0].username ? post.user[0].username : post.user[0].email}
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
                        <p key={tag._id} className="text-blue-500 text-sm">#{tag.username ? tag.username : tag.email }</p>
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
  )
}

export default Community