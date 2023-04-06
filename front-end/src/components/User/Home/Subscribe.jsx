import React from 'react'
import { Link } from 'react-router-dom'

function Subscribe() {
  return (
    <>
 <div className='flex flex-col py-5 w-full  bg-secondory'>
       <h1 className=" flex  px-5 pt-4 text-4xl font-bold font-philosephor  text-third md:mx-20 md:px-10">
         Subscribe Our Plans
        </h1>
        <div className='p-16 flex flex-col items-center justify-center w-full '>
            <p  className='text-gray-700 font-sans font-medium text-lg'>Get more latest features for long life time.<br/> make your own nature with us</p>
             
             <Link to={'/subscribe'}>
             <button className='mt-5 rounded-full bg-third text-primary  h-10 w-28 hover:font-semibold hover:cursor-pointer border-2 border-primary hover:bg-primary hover:text-gray-700  ' >
                Subscribe
             </button>
             </Link>
        </div>
        </div>
    </>
  )
}

export default Subscribe