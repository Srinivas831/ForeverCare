import { isAuth, isLog } from "./actionType"

export const authCheck=()=>{
   return {type:isAuth}
}
export const authLogout=()=>{
    return {type:isLog}
}