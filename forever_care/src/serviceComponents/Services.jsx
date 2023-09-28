import { Box, Flex, Image, Link,chakra } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'

export const Services = () => {
    const imageArray=[
        {name:"CARDIOLOGY",image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/baheprcka1ufwm5ny65d.jpg"},
       {name:"PEDIATRICS", image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v4amxqv4k1n7kvcldpdd.jpg"},
        {name:"OTOLARYNGOLOGISTS",image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6s3bw2rvdcv8tocfpclj.jpg"},
        {name:"DENTAL DEPARTMENT",image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pvuv6uid6jzxr1zcrfmg.jpg"},
        {name:"VISION TREATMENT",image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h5u2oswh04yxn6yg9uxp.jpg"},
        {name:"PREGNANCY",image:"https://www.newfolks.com/wp-content/uploads/sites/6/2021/12/pregnant-mom-belly-doctor-appointment.jpg?fit=1024%2C1024&p=1"}
    ]
    const [item]=useState(imageArray)
  return (
    <DIV>
    <div className='service-image'>
  {item?.map((ele,index)=>{
    return <div key={index}>
    <Flex 
//   bg="#edf3f8"
  width={"500"}
  _dark={{
    bg: "#3e3e3e"
  }}
  p={10}
  w="full"
  alignItems="center"
  justifyContent="center"
>
<Box
    // w={400}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    mx="auto"
  >
    <Image 
     w="full"
     h={300}
      fit="contain"
      src={ele.image}
      alt="avatar"
    />

    <Box py={5} textAlign="center">
      <Link
        display="block"
        fontSize="2xl"
        color="gray.800"
        _dark={{
          color: "white"
        }}
        fontWeight="bold"
      >
        {/* John Doe */}{ele.name}
      </Link>
      <chakra.span
        fontSize="sm"
        color="gray.700"
        _dark={{
          color: "gray.200"
        }}
      >
        {/* Software Engineer */}
      </chakra.span>
    </Box>
  </Box>
</Flex>

    </div>
  })
}
</div>
  </DIV>
  )
}

const DIV=styled.div`
    .service-image{
        display: grid;
        grid-template-columns:repeat(2,1fr);
        gap: 30px;
    }
`
