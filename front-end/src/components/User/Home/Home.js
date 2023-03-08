import React, { useContext } from "react";
import Carousel from "./Carousel";
import Faq from "./Faq";


import Posts from "./Posts";
import Subscribe from "./Subscribe";
import ChatBot from '../ChatBot/ChatBot'
import { BotContext } from "../../../context/BotContext";
function Home() {
  const {showBot} = useContext(BotContext)

  return (
    <div >
     
      
        <div >
       <Carousel/>
       </div>
      <div>
        <Posts/>
      </div>
      {showBot && <div className="fixed z-50  p-5 top-36 w-full md:left-1/4 md:w-1/2 h-3/4 md:h-2/4 lg:h-3/4">
        <ChatBot/>
      </div>}
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
