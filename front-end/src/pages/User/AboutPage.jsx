import React from 'react'
import About from '../../components/User/About/About'
import Footer from '../../components/User/Footer/Footer'
import Login from '../../components/User/Login/Login'
import Navbar from '../../components/User/Navbar/Navbar'

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