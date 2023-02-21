import React from "react";
import Login from "./Login";
function Home() {
 
  return (
    <div>
      <div>
       { <div className="fixed w-full top-24">
        <Login />
        </div>}
        <img className="w-full" src="/images/home-bg.jpg" alt="" />
      </div>
        
    </div>
  );
}

export default Home;
