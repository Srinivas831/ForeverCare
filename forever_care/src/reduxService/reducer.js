
import { SERVICE_ERROR, SERVICE_LOADING, SERVICE_SUCCESS } from './actionTypeService'
let initial={
    isLoadingService:false,
    isSuccessService:[],
    isErrorService:false
}
export const reducer = (state=initial,action) => {
 switch(action.type){
    case SERVICE_LOADING:{
        return{...state,isLoadingService:true}
    }
    case SERVICE_SUCCESS:{
        return{...state,isLoadingService:false,isSuccessService:action.payload}
    }
    case SERVICE_ERROR:{
        return{...state,isErrorService:true,isLoadingService:false}
    }
    default:return state
 }
}
