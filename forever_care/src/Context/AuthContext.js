import { createContext, useState } from "react";

export const AuthContext =createContext()

export default function AuthContextProvider(props){
   const [isAuth,setAuth]=useState(false)
   const [userData,setUserData]=useState({})

   return(
    <AuthContext.Provider value={{isAuth,setAuth,userData,setUserData}}>
        {props.children}
    </AuthContext.Provider>
   )
}