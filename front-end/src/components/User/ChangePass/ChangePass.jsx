import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {message} from "antd"

function ChangePass() {
  const navigate = useNavigate()
  const [pass , setPass] =useState(true)
  const [oldPass, setOldpass]= useState("")
  const [newPass, setNewpass]= useState("")
  const [rePass, setRepass]= useState("")
  const[err,setErr]=useState("")

  
 
const validate=()=>{
  if (!newPass || !rePass ) {
    setErr("Password required..!")
  }else if (newPass.length <4) {
    setErr("Password is too short..!")
  }else if (newPass !== rePass) {
    setErr("Passwords should be same..!")
  }
  else{
    setErr("")
  }
}

const handleSubmit =()=>{
  validate()
  
  if (!err) {
    axios.post("/changepass",{
      newPass,
      oldPass
    }).then((res)=>{
   if (res.data.success) {
    localStorage.removeItem("token")
    navigate("/")
    message.success("Password changed ")
   }
   if (res.data.err) {
    setErr(res.data.err)
   }
    })
  }

}


  useEffect(() => {
    axios.get("/getprofile").then((res)=>{
      let password =res.data.user.password
      if (!password) {
       setPass(false)
      }
    })
  },[pass])
  


  return (
    <div>
        <div className="flex flex-col items-center  mt-5 p-3">
                {pass && <div>
                  <p className="font-sans  text-gray-500 font-medium ">
                    Old password
                  </p>
                  <input
                    className="mt-2 rounded-full border-2 border-third pl-2"
                    type="password"
                    value={oldPass}
                    onChange={((e)=>{setOldpass(e.target.value)})}
                  />
                </div>}
              </div>
              <div className="flex flex-col items-center mt-5 p-3">
                <div>
                  <p className="font-sans  text-gray-500 font-medium">
                    New password
                  </p>
                  <input
                    className="mt-2 rounded-full border-2 border-third pl-2"
                    type="password"
                    name='newpassword'
                    value={newPass}
                    onChange={((e)=>{setNewpass(e.target.value)})}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center  mt-5 p-3">
                <div>
                  <p className="font-sans  text-gray-500 font-medium">
                    repeat password
                  </p>
                  <input
                    className="mt-2 rounded-full border-2 border-third pl-2"
                    type="password"
                    name='repassword'
                    value={rePass}
                    onChange={((e)=>{setRepass(e.target.value)})}
                  />
                </div>
                <p className="text-red-600 font-semibold mt-2">{err}</p>
              </div>
              <div className="hidden md:flex justify-center mt-5 pl-28 ">
                <button className="border-2 text-primary  font-semibold border-primary bg-third w-20 h-10 rounded-2xl "
                type='button'
                onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
    </div>
  )
}

export default ChangePass