import axios from "../../../axios/axios"
import React, { useState } from "react";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
   const setLogin = props.setLogin
  const validate = () => {
    if (email === "") {
      setErrors("email required..!");
    } else if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setErrors("Invalid email..!");
    } else if (password === "") {
      setErrors("Password required..!");
    } else if (password.length < 4) {
      setErrors("Password should have atleast 4 characters..!");
    }else{
    setErrors("")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    if (errors === "") {
      axios.post("/signup", {
        email: email,
        password: password,
      }).then((response)=>{
       if (response.data.signed) {
          setLogin(true)
       } else if (response.data.existed) {
         setErrors("Mail is already existed..!")
       }
      })
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col   justify-start">
        <label htmlFor="email" className="text-start text-sm font-normal pb-3">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          className="rounded-full text-center border border-primary  h-12"
          placeholder="Enter your username"
          type="text"
        />

        <label
          htmlFor="password"
          className="text-start text-sm font-normal mt- pb-3"
        >
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          className="rounded-full text-center border border-primary h-12"
          placeholder="Enter your password"
          type="password"
        />
        <p className="text-red-600 font-semibold mt-2">{errors}</p>
        <div className="flex flex-col justify-end items-end">
          <button
            type="submit"
            className="bg-third text-center m-4 text-primary rounded-full w-28  md:w-32 h-10  hover:border hover:border-primary "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
