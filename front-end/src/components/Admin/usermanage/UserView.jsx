import axios from "../../../axios/axios";
import React, { useContext, useEffect, useState } from "react";
import { AdminViewContext } from "../../../context/AdminViewContext";

function UserView({id}) {
    const [diaryCount , setDiaryCount] = useState('')
    const [user , setUser] = useState('')

    const {  view,setView } = useContext(AdminViewContext);
useEffect(() => {

    axios.get(`/admin/userview/${id}`).then((res)=>{
      if (res.data.success) {
        console.log(res.data);
        setDiaryCount(res.data.diaryCount)
        setUser(res.data.user)
      }
    })


},[setView,id])



  return (
    <>
      <div className="fixed top-14 left-0 right-0 w-full lg:w-6/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 text-black shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-end pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6  hover:cursor-pointer"
                    onClick={()=>setView(!view)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  </div>
              <div className="w-full px-4 flex justify-center">
                <div className=" relative p-5">
                  <img
                    alt="user"
                    src={user.image}
                    className="shadow-xl rounded-full h-32 w-32 align-middle border-none  max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-10">
                <div className="flex justify-center">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {diaryCount}
                    </span>
                    <span className="text-sm text-blueGray-400">Diaries</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span className="text-sm text-blueGray-400">Posts</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
               {user.username}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {user.email}
              </div>
              <div className="mb-2 text-blueGray-600 ">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                {user.bio}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                 {user.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserView;
