import React from "react";
import Carousel from "./Carousel";
import Faq from "./Faq";


import Posts from "./Posts";
import Subscribe from "./Subscribe";
function Home() {

  return (
    <div >
     
      
        <div >
       <Carousel/>
       </div>
      <div>
        <Posts/>
      </div>
      <div>
        <Faq/>
      </div>
      <div>
        <Subscribe/>
      </div>
  
    </div>
  );
}

export default Home;
