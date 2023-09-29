
import { shallowEqual, useSelector } from 'react-redux'
import ServiceCard from './ServiceCard'
import { useEffect } from 'react'

const ServicesData = () => {
    const dataFromStore=useSelector((store)=>{
        return{
            data:store.isSuccessService,
            loading:store.isLoadingService,
            error:store.isErrorService
        }
    },shallowEqual)
    useEffect(()=>{
        console.log(dataFromStore.data)
    },[])
  return (
   <>
   {
    dataFromStore.data?.map((ele)=><ServiceCard key={ele.id} {...ele} />)
   }
   </>
  )
}

export default ServicesData
