import React from 'react'
import Home from '../../components/User/Home/Home'
import Navbar from '../../components/User/Navbar/Navbar'
import Footer from "../../components/User/Footer/Footer"
import Login from '../../components/User/Login/Login'
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