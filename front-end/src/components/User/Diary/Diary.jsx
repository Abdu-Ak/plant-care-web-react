import { Link } from "react-router-dom"
import ProfileNav from "../ProfileNav/ProfileNav"




function Diary() {

 

 
  return (
    <div>
        <div className="bg-white flex w-full  border-t-2 ">
           <ProfileNav/>
           <div className="flex flex-col items-center w-full h-full ">
                <img className="w-44 h-44 md:w-80 md:h-80" src="/images/empty diary.png" alt="diary " />

                <p className="font-philosephor text-2xl md:font-semibold md:text-3xl">I am empty :(</p>
                <p className="text-gray-500 text-lg">Your diary is empty.</p>

                <Link to={'/add-diary'}>
                <button className="font-serif font-semibold m-5 border-b-2 p-2 text-green-700 hover:border-b-green-700 " >
                  Go to Planting
                </button>
                </Link>
           </div>
        </div>
    </div>
  )
}

export default Diary