import React, { useEffect } from "react";
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import axios from "../../../axios/axios";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const { token } = theme.useToken();
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [key, setKey] = useState("");
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [tag, setTag] = useState([]);
  const navigate = useNavigate() 

  const handleSearch = (e) => {
    setKey(e.target.value);
    const filter = key
      ? users.filter((value) => {
          return (
            (value.username &&
              value.username.toLowerCase().includes(key.toLowerCase())) ||
            (value.email &&
              value.email.toLowerCase().includes(key.toLowerCase()))
          );
        })
      : "";

    if (filter) {
      setFiltered(filter);
    }
  };

  const handleTag = (id) => {
    const tagUser = id
      ? users.filter((value) => {
          return value._id.includes(id);
        })
      : "";
    if (tagUser && tag.includes(tagUser[0]) === false) {
      setTag((tag) => {
        const data = [...tag];
          data.push(tagUser[0]);
          return data;
      });
      

    }
  };
    const removeTag = (id) =>{
      const tagUser = id
      ? users.filter((value) => {
          return value._id.includes(id);
        })
      : "";
      if (tagUser) {
        setTag((tag) => {
          const data = [...tag];
          data.pop(tagUser[0]);
          return data;
        });
        console.log(tag);
    }
    }

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };

 const handleSubmit = () =>{
   if (image) {
    console.log(tag);
        let file = new FormData()
        
        file.append('image' , image )
        file.append('title', title)
        file.append('caption',caption)
        for (let i = 0; i < tag.length; i++) {
          file.append('tag[]', (tag[i]._id));
        }
        axios.post('/addPost',file ,{
          headers :{
            "Content-Type": "multipart/form-data",
          }
        }).then((res)=>{
           if (res.data.success) {
             navigate('/profile')
             message.success("Post added..!")
           }
        })
   }else{
    message.error("must add a image..!")
   }
 }

  useEffect(() => {
    axios.get("/getUsers").then((res) => {
      if (res.data.success) {
        setUsers(res.data.users);
      }
    });
  }, [token]);

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Upload Image",
      content: (
        <div className="flex p-3 justify-center w-full mx-auto sm:max-w-lg">
          {img ? (
            <div className="flex flex-wrap h-2/4 sm:w-3/4 justify-center items-center">
              <img
                src={img}
                className="h-3/4 sm:w-2/4   rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt="post"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
              <div className="mt-10 mb-10 text-center">
                <h2 className="text-2xl font-semibold mb-2">
                  Upload your image
                </h2>
                <p className="text-xs text-gray-500">
                  File should be of format jpg , png , jpeg or webp
                </p>
              </div>
              <form
                encType="multipart/form-data"
                className="relative w-4/5 h-32 max-w-xs mb-10  bg-gray-100 rounded-lg shadow-inner"
              >
                <input
                  id="file-upload"
                  type="file"
                  name="image"
                  className="hidden"
                  onChange={(e) => {
                    e.preventDefault();
                    handleImage(e);
                  }}
                />
                <label
                  htmlFor="file-upload"
                  className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                >
                  <p className="z-10 text-xs font-light text-center text-gray-500">
                    Drag & Drop your files here
                  </p>
                  <svg
                    className="z-10 w-8 h-8 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                  </svg>
                </label>
              </form>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Second",
      content: (
        <div className="flex py-10 p-3 justify-center w-full mx-auto sm:max-w-lg leading-normal">
          <div className=" mx-auto w-full md:w-10/12  flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl leading-normal">
            <input
              className=" bg-gray-100 border h-12 border-gray-300 p-2 mb-4 outline-none"
              placeholder="Title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className=" border p-2 bg-gray-100 h-28 mt-1 block w-full text-start sm:text-sm border-gray-300  outline-none"
              rows="3"
              name="caption"
              placeholder="Describe everything about this post here"
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
            ></textarea>

            <div className=" flex text-gray-500 m-5 leading-normal">
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <div className="count ml-auto text-gray-400 text-xs font-semibold">
                0/300
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Last",
      content: (
        <div className="py-10 leading-normal  bg-[#f2f9fb] px-2">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
            <div className="md:flex">
              <div className="w-full p-4">
                <div className="relative">
                  {" "}
                  <input
                    type="text"
                    className="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md"
                    placeholder="Tag user.."
                    value={key}
                    onChange={(e) => {
                      handleSearch(e);
                    }}
                  />{" "}
                  <span className="absolute right-3 top-4 ">
                    {tag &&
                      tag.map((tag,index) => {
                        return (
                          <div key={index} className="text-xs inline-flex items-center font-bold leading-sm  mr-1  px-3 py-1 bg-blue-200 text-gray-500 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 mr-1 cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                removeTag(tag._id);
                              }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            {tag.username ? tag.username : tag.email}
                          </div>
                        );
                      })}
                  </span>
                </div>
                <ul>
                  {key &&
                    filtered.map((data, index) => {
                      return (
                        <li
                          key={index}
                          className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition"
                          onClick={(e) => {
                            e.preventDefault();
                            handleTag(data._id);
                          }}
                        >
                          <div className="flex items-center ml-2">
                            {" "}
                            <img
                              src={
                                data.image
                                  ? data.image
                                  : "/images/user-default.png"
                              }
                              className="rounded-full h-12 w-12"
                              alt=""
                            />
                            <div className="flex flex-col ml-2">
                              {" "}
                              <span className="font-medium text-black">
                                {data.username ? data.username : data.email}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <div className="bg-[#dae4ea] w-full p-10 flex justify-between items-center">
        <p className="text-4xl font-serif font-semibold text-third">Add Post</p>
      </div>
      <div className="flex w-full justify-center p-3 items-baseline md:px-10 min-h-screen bg-[#dae4ea]">
        <div className="w-full h-full bg-[#f2f9fb] transition-all rounded-lg  md:w-full p-4">
          <Steps current={current} items={items} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            {current < steps.length - 1 && (
              <Button onClick={() => next()}>Next</Button>
            )}
            {current === steps.length - 1 && (
              <Button onClick={handleSubmit}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPost;
