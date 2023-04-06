import React from 'react'
import Diary from '../../components/User/Diary/Diary'
import Navbar from '../../components/User/Navbar/Navbar'

function Diarypage() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
       <div className='bg-third/50 pt-28'>
       <Diary/>
       </div>
    </>
  )
}

export default Diarypage