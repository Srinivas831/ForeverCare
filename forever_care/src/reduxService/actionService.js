import { SERVICE_ERROR, SERVICE_LOADING, SERVICE_SUCCESS } from "./actionTypeService"
import axios from "axios";

let url="http://localhost:8080/posts";

export const serviceData=(newData)=>(dispatch)=>{
    dispatch({type:SERVICE_LOADING});

    console.log(newData.speciality)
    axios.get(url).then((response) => { console.log(response.data)
    const filteredData = response.data.filter((ele) => ele.speciality == newData.speciality && ele.location == newData.location )
    console.log(filteredData)
        dispatch({type:SERVICE_SUCCESS,payload:filteredData})}).catch((err)=>dispatch({type:SERVICE_ERROR}))
    // axios.get("http://localhost:8080/posts",paramObj).then((res)=>dispatch({type:SERVICE_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:SERVICE_ERROR}))
}
