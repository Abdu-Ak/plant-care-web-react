import React from 'react'
import Community from '../../components/User/Community/Community'
import Login from '../../components/User/Login/Login'
import Navbar from '../../components/User/Navbar/Navbar'

function CommunityPage() {
  return (
    <>
    
        <Navbar/>
        <div className="fixed z-50  top-28  left-10 md:left-80 lg:left-2/4 w-full  ">
        <Login/>
        </div>
      <div className='bg-third/50 pt-28'>
       <Community/>
       </div>
    </>
  )
}

export default CommunityPage