import React from 'react'
import Community from '../../components/User/Community/Community'
import Navbar from '../../components/User/Navbar/Navbar'

function CommunityPage() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className='bg-third/50 pt-28'>
       <Community/>
       </div>
    </>
  )
}

export default CommunityPage