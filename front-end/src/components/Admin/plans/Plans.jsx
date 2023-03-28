import axios from "../../../axios/AdminAxios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";


function Plans() {
  const [plans, setPlans] = useState([]);

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
       axios.get(`/admin/deletePlan/${id}`).then((res)=>{
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
    axios.get("/admin/getPlans").then((res) => {
      if (res.data.plans) {
        setPlans(res.data.plans);
      }
    });
  }, []);

  return (
    <>
     <div className="flex w-full justify-between items-center ">
          <div className="p-4 ">
            <Link to={"/admin/addPlan"}>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   "
              >
                Add
              </button>
            </Link>
          </div>
          
        </div>
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
       
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Plan
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Feature
              </th>
              <th scope="col" className="px-6 py-3">
                Subscribers
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => {
              return (
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className=" px-3 py-4"> {plan.name} </td>
                  <td className="px-3 py-4">{plan.title} </td>
                  <td className="px-3 py-4">{plan.plan}</td>
                  <td className="px-10 py-4">{plan.amount}</td>
                  <td className="px-3 py-4">
                    {plan.features.map((feature) => {
                      return (
                        <p className="flex  items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-3 h-3 m-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>

                          {feature}
                        </p>
                      );
                    })}
                  </td>
                  <td className="px-3 py-4"></td>
                  <td className=" flex px-6 py-4">
                    <Link 
                       to={`/admin/editPlan/${plan._id}`}
                      className="rounded-full mr-2 hover:border-2 hover:bg-blue-500  hover:border-blue-500 hover:cursor-pointer  p-1"
                      onClick={() => {}}
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
                          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                        />
                      </svg>
                    </Link>
                    <button
                      className="rounded-full  ml-2  hover:border-2 hover:bg-red-500  hover:border-red-500 hover:cursor-pointer  p-1"
                      onClick={() => {
                        handleDelete(plan._id)
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
  );
}

export default Plans;
