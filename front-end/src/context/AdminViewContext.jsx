import { createContext, useState } from "react";

export const AdminViewContext = createContext({})

function ShowView ({children}){

    const [view, setView] = useState(false);
    return(
        <AdminViewContext.Provider value={{view,setView}}>
           {children}
        </AdminViewContext.Provider>
    )
   


}
export default ShowView