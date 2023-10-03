import { StarIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack,chakra,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tooltip, } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { memo, useState } from 'react'
import MultiStepForm from './Pay';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ServiceCard = memo(({education,image,language,location,name,speciality,experience}) => {

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [showAmountTooltip, setShowAmountTooltip] = useState(false);
  const isAuth=useSelector((store)=>store.AuthReducer.isAuth);
  const nav=useNavigate();
  function handleAppointment() {
    if(isAuth){
      setIsModalOpen(true); 
    }
    else{
      nav("/signup");
    }
  }

  function handleCloseModal() {
    setIsModalOpen(false); // Close the modal
  }


  return (

<Flex
  _dark={{
    bg: "#3e3e3e",
  }}
  pt={50}
  w="100%"
  alignItems="center"
  justifyContent="center"
>
  <Flex
    w={{ base: "90%", md: "2xl" }}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    direction={{ base: "column", md: "row" }}
  >
    <Box
      w={{ base: "100%", md: 1 / 3 }}
      h={{ base: "200px", md: "270px" }} 
      bgSize={{
        base:"contain",
        md: "cover", 
      }}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      style={{
        backgroundImage:
          `url(${image})`,
      }}
    ></Box>

    <Box
      w={{ base: "100%", md: 2 / 3 }}
      h="270px"
      p={{
        base: 4,
        md: 4,
      }}
    >
      <chakra.h1
        fontSize={{ base: "lg", md: "2xl" }} 
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
     {name}
      </chakra.h1>

      <chakra.p
        mt={2}
        fontSize={{ base:"15px", md: "xl" }} 
        fontWeight={"bold"}
        // fontSize="md"
        color="gray.600"
        _dark={{
          color: "gray.200",
        }}
      >
      {speciality}  <span style={{color:"red", marginLeft:"10px"}}> {experience} Years Exp</span>
      </chakra.p>
        <h5 style={{fontSize:"18px",padding:"3px"}}>{education}</h5>
        <h3 style={{paddingTop:"2px",paddingBottom:"5px"}}>Forever Care Clinic, Koramangala, <span className='span'>{location}</span> </h3>
        <DIV>
        <div className='language'>
          
          <span style={{padding:"3px"}}>Available :</span> 
        {language.map((ele)=><span key={Math.random()}> {ele}</span>)}
    </div>
    </DIV>
      <HStack spacing={1.5} display="flex" alignItems="center" mt={{base:3,md:5}}>
        <StarIcon
          color="yellow.300"
          _dark={{
            color: "gray.300",
          }}
        />
        <StarIcon
          color="yellow.300"
          _dark={{
            color: "gray.300",
          }}
        />
        <StarIcon
          color="yellow.300"
          _dark={{
            color: "gray.300",
          }}
        />
        <StarIcon
          color="yellow.300"
          _dark={{
            color: "gray.300",
          }}
        />
        <StarIcon color="gray.500" />
      </HStack>

     
    <Flex mb={{ base: 4, md: 1 }} mr={{ base: 12, md: 9 }} mt={{ base: 2, md: -3 }} alignItems="center" justifyContent="space-between">
    <chakra.h1 color="white" fontWeight="bold"></chakra.h1>
        <Tooltip label="Rs 500" isOpen={showAmountTooltip} hasArrow>
          <Button
            fontSize={{ base: "sm" }}
            padding={{ base: 1.5 }}
            _hover={{
              
              color: "white", // Text color on hover
            }}
            backgroundColor={"#009E60"} color={"white"}
            onMouseEnter={() => {
              setShowAmountTooltip(true); // Show the tooltip when hovering
            }}
            onMouseLeave={() => {
              setShowAmountTooltip(false); // Hide the tooltip when not hovering
            }}
            onClick={handleAppointment}>
            BOOK APPOINTMENT
          </Button>
        </Tooltip>


      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}>Book Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MultiStepForm />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Flex>
    </Box>
  </Flex>
</Flex>


  )
})

export default ServiceCard


const DIV=styled.div`
@media screen and (max-width:600px) {
  .language{

  }
}
  
`

