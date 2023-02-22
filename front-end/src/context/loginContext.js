import { createContext, useState } from "react";

export const LoginContext = createContext({})

function ShowLogin ({children}){

    const [showLog,setShowlog ]=useState(false)
    return(
        <LoginContext.Provider value={{showLog,setShowlog}}>
           {children}
        </LoginContext.Provider>
    )
   


}
export default ShowLogin