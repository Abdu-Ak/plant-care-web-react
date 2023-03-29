import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function ChangePass() {
  const navigate = useNavigate();
  const [pass, setPass] = useState(true);
  const [oldPass, setOldpass] = useState("");
  const [newPass, setNewpass] = useState("");
  const [rePass, setRepass] = useState("");
  const [err, setErr] = useState("");

  const validate = () => {
    let error = "";
    if (newPass === "") {
      error = "Password required..!";
    } else if (rePass === "") {
      error = "Password required..!";
    } else if (oldPass === "" && pass) {
      error = "Old password required..!";
    } else if (newPass.length < 4) {
      error = "Password is too short..!";
    } else if (newPass !== rePass) {
      error = "Passwords should be same..!";
    }

    return error;
  };

  const handleSubmit = () => {
    const error = validate();
    setErr(error);

    if (!error) {
      axios
        .post("/changepass", {
          newPass,
          oldPass,
        })
        .then((res) => {
          if (res.data.success) {
            localStorage.removeItem("token");
            navigate("/");
            message.success("Password changed ");
          } else if (res.data.err) {
            setErr(res.data.err);
          }
        });
    }
  };

  useEffect(() => {
    axios.get("/getprofile").then((res) => {
      let password = res.data.user.password;
      if (!password) {
        setPass(false);
      }
    });
  }, [pass]);

  return (
    <>
      <div className="border w-full px-5 p-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            {pass && (
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Old password
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="password"
                      value={oldPass}
                      onChange={(e) => {
                        setOldpass(e.target.value);
                      }}
                      className="h-10 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  for="newpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  New password
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="password"
                    name="newpassword"
                    value={newPass}
                    onChange={(e) => {
                      setNewpass(e.target.value);
                    }}
                    className="h-10 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  for="repassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Repeat password
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="password"
                    name="repassword"
                    value={rePass}
                    onChange={(e) => {
                      setRepass(e.target.value);
                    }}
                    className="h-10 px-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
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

export default ChangePass;
