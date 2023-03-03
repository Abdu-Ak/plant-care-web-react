import React from 'react'
import About from '../../component/User/About/About'
import Footer from '../../component/User/Footer/Footer'
import Login from '../../component/User/Login/Login'
import Navbar from '../../component/User/Navbar/Navbar'

function AboutPage() {
  return (
    <div>
        <Navbar/>
        <div className="fixed z-50  top-28 left-10 md:left-80 lg:left-2/4 w-full  ">
        <Login/>
        </div>
     <div className='pt-28'>
     <About/>
     </div>
        <Footer/>
    </div>
  )
}

export default AboutPage