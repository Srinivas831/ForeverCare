
import { isAuth, isLog } from './actionType'
const initial={
isAuth:false
}
export const reducer = (state=initial,action) => {
 switch(action.type){
    case isAuth:{
        return {...state,isAuth:true}
    }
    case isLog:{
        return {...state,isAuth:false}
    }
    default:return state
 }
}

