import React, { useState } from "react";
import { Select } from "antd";
import axios from "../../../axios/AdminAxios";
import { useNavigate } from "react-router-dom";

function AddPlans() {
  const [data, setData] = useState({});
  const [feature, setFeature] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleFeatures = (value) => {
    setFeature({ ...feature, value });
  };

  const validate = () => {
    let error = "";
    if (data.name === "" || !("name" in data)) {
      error = "Name required..!";
    } else if (data.title === "" || !("title" in data)) {
      error = "Title required..!";
    } else if (data.plan === "" || !("plan" in data)) {
      error = "Plan required..!";
    } else if (data.amount === "" || !("amount" in data)) {
      error = "Amount required..!";
    } else if (feature.length < 1) {
      error = "Features required..!";
    }
    return error;
  };

  const handleSubmit = () => {
    const error = validate();
    setErr(error);

    if (!err) {
      axios
        .post("/admin/addPost", {
          data,
          feature,
        })
        .then((res) => {
          if (res.data.success) {
            navigate("/admin/plans");
          }
        });
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="  m-5 ">
          <p className="text-4xl font-serif font-semibold">Add Plan</p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            className="w-full max-w-lg rounded-lg shadow-md bg-third/10 p-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Premium"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Title
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="title"
                  name="title"
                  type="text"
                  value={data.title}
                  onChange={handleChange}
                  placeholder="best for starters.."
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Features
                </label>
                <Select
                  mode="tags"
                  style={{
                    width: "100%",
                    
                  }}
                  placeholder="plant search page.."
                  onChange={handleFeatures}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Plan
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="plan"
                    name="plan"
                    value={data.plan}
                    onChange={handleChange}
                  >
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Amount
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="amount"
                  type="number"
                  name="amount"
                  value={data.amount}
                  onChange={handleChange}
                  placeholder="299"
                />
              </div>
            </div>

            <div className="flex flex-col mt-3 p-3 border-t-2 border-gray-300">
              <div className="flex justify-center items-center">
                <p class="text-red-500 text-sm italic">{err}</p>
              </div>
              <div className="flex justify-end items-center">
                <button
                  type="submit"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   "
                >
                  Add Plan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPlans;
