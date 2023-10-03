
import { isAuth, isBooked, isLog } from './actionType'
const initial={
isAuth:localStorage.getItem("isAuth")==="true" || false,
storedEmail: localStorage.removeItem("userEmail") || "",
isBooked:false
}
export const reducer = (state=initial,action) => {
 switch(action.type){
    case isAuth:{
        return {...state,isAuth:true,storedEmail:action.payload}
    }
    case isLog:{
        return {...state,isAuth:false,storedEmail:""}
    }
    case isBooked:{
        return{...state,isBooked:true}
    }
    default:return state
 }
}

