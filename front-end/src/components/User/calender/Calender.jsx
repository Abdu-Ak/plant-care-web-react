import React, {  useState } from "react";
import { DatePicker, message, Space, TimePicker } from "antd";
import axios from "../../../axios/axios";
import { useNavigate } from "react-router-dom";
function Calender() {
   const [time , setTime]= useState("")
   const [date , setDate]= useState('')
  const [err, setErr] = useState("");
  const navigate = useNavigate();
   

   
  const validate = () => {
    let error = "";
    if (time === "") {
      error = "Time required..!";
    } else if (date === "") {
      error = "Date required..!";
    }

    return error;
  };


   const handleSubmit = ()=>{
    const error = validate();
    setErr(error);

    if (!error) {
      console.log("podddii");
        axios.post('/postCalender',{
            time,
            date
        }).then((res)=>{
             if (res.data.success) {
                navigate("/profile");
                message.success(" Calender Added..! ");
             }else if (res.data.updated) {
              navigate("/profile");
              message.success(" Calender Updated..! ");
             }
        })
    }

   }

 
   

  return (
    <>
      <div className="border w-full px-5 p-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="newpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Watering TIme
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <Space direction="vertical"
                  style={{
                    width: "100%",
                  }}
                  >
                    <TimePicker 
                    style={{
                        width: "100%",
                        
                      }}
                      
                      value={time}
                      onChange={((value)=>{
                         setTime(value);
                      })}
                      
                    />
                  </Space>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="repassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fertilise Date
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <Space
                    direction="vertical"
                    style={{
                      width: "100%",
                    }}
                  >
                    <DatePicker
                      style={{
                        width: "100%",
                      }}
                     value={date}
                     onChange={((value)=>{
                        setDate(value)
                     })}
                    />
                  </Space>
                </div>
              </div>
            </div>

            <p className="text-red-600 font-semibold mt-2">{err}</p>
          </div>

          <div className="px-4 py-3 flex justify-between md:justify-end bg-gray-50  sm:px-6">
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calender;
