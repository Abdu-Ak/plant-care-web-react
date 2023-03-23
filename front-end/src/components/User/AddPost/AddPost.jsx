import React from "react";
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";

function AddPost() {
  const { token } = theme.useToken();
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
    console.log(img, image);
  };

  const steps = [
    {
      title: "Upload Image",
      content: (
        <div className="flex p-3 justify-center w-full mx-auto sm:max-w-lg">
          <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
            <div className="mt-10 mb-10 text-center">
              <h2 className="text-2xl font-semibold mb-2">Upload your image</h2>
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
                onChange={handleImage}
              />
              <label
                for="file-upload"
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
        </div>
      ),
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
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
              <Button onClick={() => message.success("Processing complete!")}>
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
