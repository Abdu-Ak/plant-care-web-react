import { createContext, useState } from "react";


export const BotContext = createContext({})

function ShowBot ({children}){

    const [showBot,setShowBot ]=useState(false)
    return(
        <BotContext.Provider value={{showBot,setShowBot}}>
           {children}
        </BotContext.Provider>
    )
   


}
export default ShowBot