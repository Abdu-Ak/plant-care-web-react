import React from 'react'

function Footer() {
  return (
    <div>
         <div>
            <div className='pt-5 border border-t-2  w-full  bg-cover  bg-[url("https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_background.png")]  '>
                <div className="w-14 ml-2 md:mb-5 md:w-20 md:h-12 rounded-lg">
                    <img
                        className="w-full    object-cover rounded-lg hover:cursor-pointer"
                        src="/images/logo.png"
                        alt="nav_logo" />
                </div>

                <div className="flex  justify-center">
                    <div className="p-2 md:p-3  ">
                        <img
                            className="w-5 h-5 md:w-9 hover:cursor-pointer   md:h-9 object-cover"
                            src="/images/twitter.png"
                            alt="" />
                    </div>

                    <div className="p-2 md:p-3">
                        <img
                            className="w-5 h-5 md:w-11 md:h-11 hover:cursor-pointer object-cover"
                            src="/images/youtube.png"
                            alt="" />
                    </div>

                    <div className="p-2 md:p-3">
                        <img
                            className="w-4 h-4 md:w-9 md:h-9 object-cover hover:cursor-pointer"
                            src="/images/instagram.png"
                            alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-5 ">
                    <p className="font-normal text-gray-500 hover:cursor-pointer">
                        Privacy Policy | Terms & Conditions
                    </p>
                    <p className="font-normal text-gray-500 hover:cursor-pointer mt-2">
                        @2023 Ak Technologies Inc.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer