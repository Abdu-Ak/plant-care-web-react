import React from "react";
import Carousel from "./Carousel";

import Login from "./Login";
import Posts from "./Posts";
function Home() {

  return (
    <div >
      <div>
       <div className="fixed  top-28 left-10 md:left-80 lg:left-2/4 w-full  ">
        <Login />
        </div>
        <Carousel/>
      </div>
      <div>
        <Posts/>
      </div>
        
    </div>
  );
}

export default Home;
