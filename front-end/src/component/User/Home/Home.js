import React from "react";
import About from "./About";
import Carousel from "./Carousel";

import Login from "./Login";
import Posts from "./Posts";
import Subscribe from "./Subscribe";
function Home() {

  return (
    <div >
     
       <div className="fixed z-50  top-28 left-10 md:left-80 lg:left-2/4 w-full  ">
        <Login />
        </div>
        <div >
       <Carousel/>
       </div>
      <div>
        <Posts/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Subscribe/>
      </div>
  
    </div>
  );
}

export default Home;
