import React from 'react'
import Navbar from '../../component/User/Navbar/Navbar'
import Home from "../../component/User/Home/Home"
import Footer from "../../component/User/Footer/Footer"
function home() {
  return (
    <div>
        <Navbar />

       <Home />
       <Footer/>
     
    </div>
  )
}

export default home