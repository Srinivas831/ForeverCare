import {
  Box, Flex, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text,
  Button, Stack
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { serviceData } from '../reduxService/actionService';


export const Services = () => {
  const imageArray = [
    { name: "CARDIOLOGY", image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/baheprcka1ufwm5ny65d.jpg" },
    { name: "PEDIATRICS", image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v4amxqv4k1n7kvcldpdd.jpg" },
    { name: "OTOLARYNGOLOGISTS", image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6s3bw2rvdcv8tocfpclj.jpg" },
    { name: "DENTAL DEPARTMENT", image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pvuv6uid6jzxr1zcrfmg.jpg" },
    { name: "VISION TREATMENT", image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h5u2oswh04yxn6yg9uxp.jpg" },
    { name: "PREGNANCY", image: "https://www.newfolks.com/wp-content/uploads/sites/6/2021/12/pregnant-mom-belly-doctor-appointment.jpg?fit=1024%2C1024&p=1" }
  ]

  const dispatch = useDispatch();
  const [item] = useState(imageArray);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [names, setNames] = useState("")
  const [location, setLocation] = useState("")

  const handleBox = (ele, index) => {
    setIsModalOpen(true);
    setNames(ele.name);
  };

  const handleLocation = (text) => {
    setLocation(text);
  }

  const handle = () => {
    const newData = {
      speciality: names,
      location: location
    }
    dispatch(serviceData(newData));
  }

  return (

    <DIV>
      {/* <p className='para'>"We offer specialized expertise to address your unique needs and concerns. Our team is dedicated to providing you with personalized solutions, ensuring you receive the highest quality of care and attention."</p> */}
      <h1 className='h1 para'>WE CAN HELP YOU WITH</h1>
      <div className='service-image'>
        {item?.map((ele, index) => {
          return <div key={index} >
            <Flex
              // bg="#edf3f8"
              width="500"
              _dark={{
                bg: "#3e3e3e"
              }}
              p={10}
              w="full"
              alignItems="center"
              justifyContent="center"
            >

              <Box onClick={() => handleBox(ele, index)}
                // w={400}
                cursor={"-webkit-grab"}
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                mx="auto"
                width={["100%", "80%"]}
              >
                <Image
                  w="full"
                  //  h={300}
                  h={["200px", "300px"]}
                  fit="contain"
                  src={ele.image}
                  alt="avatar"
                />

                <Box py={5} textAlign="center" style={{ letterSpacing: 1.5, fontWeight: 500 }}>
                  {ele.name}
                </Box>
              </Box>
            </Flex>

          </div>
        })
        }
      </div>
      {isModalOpen && (
        <Modal isCentered isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px)'
          />
          <ModalContent>
            <ModalHeader className='modalHeader'>Select Location</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                {/* {imageArray[selectedServiceIndex].name} Details */}
                <Stack spacing={4} justifyContent={"center"} alignItems={"center"} m={"auto"}>
                  <Button style={{ width: "60%", letterSpacing: 1.4 }} onClick={(e) => handleLocation("BENGALURU")}><FaMapMarkerAlt style={{ marginRight: '8px' }} />BENGALURU</Button>
                  <Button style={{ width: "60%", letterSpacing: 1.4 }} onClick={(e) => handleLocation("CHENNAI")} > <FaMapMarkerAlt style={{ marginRight: '8px' }} />CHENNAI</Button>
                  <Button style={{ width: "60%", letterSpacing: 1.4 }} onClick={(e) => handleLocation(e.target.textContent)}><FaMapMarkerAlt style={{ marginRight: '8px' }} />HYDERABAD</Button>
                </Stack>
              </Text>
              {/* Add more details about the selected service here */}
            </ModalBody>
            <ModalFooter justifyContent="center">
              {/* <Button onClick={onClose}>Close</Button> */}
              <Button onClick={handle}>Proceed</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </DIV>
  )
}

const DIV = styled.div`
    .service-image{
        display: grid;
        grid-template-columns:repeat(2,1fr);
    }
    .h1{
      font-size: 20px;
      font-weight: bold;
    }
    .para{
      text-align: center;
      width: 50%;
      margin: auto;
    }
    @media screen and (min-width:200px) and  (max-width:600px) {
      .service-image{
        display: grid;
        grid-template-columns:repeat(1,1fr);
    }
  
    .para{
      text-align: center;
      width: 80%;
      margin: auto;
    }
  
    }
`
