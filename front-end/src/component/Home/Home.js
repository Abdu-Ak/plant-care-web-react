import React from "react";

import Login from "./Login";
function Home() {

  return (
    <div >
      <div>
       <div className="fixed  top-28 left-10 md:left-60 w-full  ">
        <Login />
        </div>
        <img className="w-full" src="/images/home-bg.jpg" alt="" />
      </div>
        
    </div>
  );
}

export default Home;
