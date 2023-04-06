import React from 'react'
import GroupChat from '../../components/User/GroupChat/GroupChat'
import Navbar from '../../components/User/Navbar/Navbar'

function GroupChatPage() {
  return (
    <>
    <div>
        <Navbar />
      </div>
      <div className="bg-third/50 pt-28">
         <GroupChat/>
      </div>
      
    </>
  )
}

export default GroupChatPage