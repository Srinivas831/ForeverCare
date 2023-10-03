import { isAuth, isBooked, isLog} from "./actionType"

export const authCheck=(email)=>(dispatch)=>{
    localStorage.setItem("isAuth",true);
    localStorage.setItem("userEmail", email);
   return dispatch({type:isAuth,payload:email})
}
export const authLogout=()=>{
    localStorage.setItem("isAuth",false);
    localStorage.removeItem("userEmail");
    return {type:isLog}
}

export const bookingConfirmed=()=>{
    return {type:isBooked}
}
