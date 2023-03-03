import React from 'react'
import Home from '../../component/User/Home/Home'
import Navbar from '../../component/User/Navbar/Navbar'
import Footer from "../../component/User/Footer/Footer"
import Login from '../../component/User/Login/Login'
function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="fixed z-50  top-28 left-10 md:left-80 lg:left-2/4 w-full  ">
        <Login/>
        </div>
      <Home/>
      <Footer/>   
    </div>
  )
}

export default HomePage