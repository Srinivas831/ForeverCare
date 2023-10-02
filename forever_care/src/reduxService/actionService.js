import { SERVICE_ERROR, SERVICE_LOADING, SERVICE_SUCCESS } from "./actionTypeService"
import axios from "axios";

let baseUrl="https://forevercare.onrender.com/posts";

export const serviceData=(newData)=>(dispatch)=>{
    dispatch({type:SERVICE_LOADING});

    console.log(newData.speciality)
    console.log(newData.location)
    // axios.get(url).then((response) => { console.log(response.data)
    // const filteredData = response.data.filter((ele) => ele.speciality == newData.speciality && ele.location == newData.location )
    // console.log(filteredData)
    //     dispatch({type:SERVICE_SUCCESS,payload:filteredData})}).catch((err)=>dispatch({type:SERVICE_ERROR}))
    // axios.get("http://localhost:8080/posts",newData).then((res)=>{console.log(res.data)
    //  dispatch({type:SERVICE_SUCCESS,payload:res.data})}).catch((err)=>dispatch({type:SERVICE_ERROR}))

     dispatch({ type: SERVICE_LOADING });

  const { speciality, location } = newData;

  const url = `${baseUrl}?speciality=${speciality}&location=${location}`;

  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SERVICE_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: SERVICE_ERROR }));
}
