import React from "react";
import {
  Container,
  Heading,
  Icon,
  Stack,
  Box,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { BiBrain } from "react-icons/bi";
import { LuBaby } from "react-icons/lu";
import { GiHeartOrgan } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { TbMicroscope } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { BsEarFill } from "react-icons/bs";
import { MdPregnantWoman } from "react-icons/md";


const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      overflow="hidden"
      p={5}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      padding={10}
    >
      <Stack align={"start"} spacing={3}>
        <Flex w={"100%"} align={"center"} justify={"flex-start"}>
          {React.cloneElement(icon, { boxSize: "80px" })}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={5} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function HomeServices() {
  return (
    <Box p={"0px 20px 0 30px"}>
      <Container
        maxW={"10xl"}
        textAlign="left"
        display="flex"
        flexWrap="wrap"
        gap={6}
        justifyContent="space-evenly"
      >
        <Box>
          <Heading size="xl" color={"#85AD23"} fontWeight={"semibold"}>
            WHAT OUR DOCTORS DO
          </Heading>
          <Heading size="2xl" color={"black"} fontWeight={"semibold"} paddingTop={3} >
            Our Healthcare Services
          </Heading>
          <Flex>
            <Text color={"#8b8986"} paddingTop={5} >
            Our Healthcare Services encompass a comprehensive range of medical specialties and treatments. From neurology to dental care, our dedicated team of experts is committed to providing top-tier healthcare solutions tailored to your needs. With cutting-edge technology and a patient-centered approach, we ensure your well-being is our priority.
            </Text>
          </Flex>
        </Box>
      </Container>

      <Container maxW={"10xl"} mt={12}>
        <Flex
          flexWrap="wrap"
          gridGap={6}
          justify="space-evenly"
          textAlign={"left"}
        >
          <Card
            heading={"Cadiology"}
            icon={<Icon as={GiHeartOrgan} size={80} color="#779B1F" />}
            description={
              "Our Cardiology Department offers expert care for heart-related issues, using advanced diagnostics and treatments to ensure cardiac health. We are dedicated to helping you maintain a healthy heart and a better quality of life."
            }
          />
          <Card
            heading={"Pediatric"}
            icon={<Icon as={LuBaby} size={80} color="#779B1F" />}
            description={
              "Our Pediatric Department is dedicated to the health and well-being of children. With a team of compassionate specialists, we provide comprehensive care, from routine check-ups to specialized treatments, ensuring your child's growth and development are nurtured in a safe and supportive environment."
            }
          />
          <Card
            heading={"Otolaryngologist"}
            icon={<Icon as={BsEarFill} size={80} color="#779B1F" />}
            description={
              "Our Otolaryngologist Department specializes in ear, nose, and throat care. Our skilled team of ENT specialists offers a wide range of services, from hearing evaluations to surgical procedures, ensuring optimal health and comfort for patients experiencing ENT-related issues."
            }
          />
          <Card
            heading={"Dental Care"}
            icon={<Icon as={TbDental} size={80} color="#779B1F" />}
            description={
              "Our Dental Care Department focuses on maintaining and enhancing oral health. With experienced dentists and modern facilities, we offer a wide range of dental services, from routine check-ups and cleanings to cosmetic procedures, ensuring your smile is healthy and beautiful."
            }
          />
          <Card
            heading={"Vision Treatment"}
            icon={<Icon as={AiOutlineEye} size={80} color="#779B1F" />}
            description={
              "Our Vision Treatment Department specializes in preserving and improving eyesight. With a team of skilled ophthalmologists and advanced technologies, we offer comprehensive eye care services, from routine eye exams to complex vision treatments, ensuring your vision remains clear and healthy."
            }
          />
          <Card
            heading={"Obstetrics"}
            icon={<Icon as={MdPregnantWoman} size={80} color="#779B1F" />}
            description={
              "Our Obstetrics Department is dedicated to supporting expectant mothers throughout their pregnancy journey. With experienced obstetricians and state-of-the-art facilities, we provide comprehensive prenatal care and delivery services, ensuring the health and well-being of both mother and baby."
            }
          />
          <Card
            heading={"Laboratory"}
            icon={<Icon as={ TbMicroscope } size={100} color="#779B1F" />}
            description={
              "Our Laboratory Department is committed to precise diagnostics and analysis. Equipped with advanced technology and staffed by skilled technicians, we provide accurate and timely test results, supporting healthcare providers in making informed decisions for patient care."
            }
          />
          <Card
            heading={"Psychiatry Department"}
            icon={<Icon as={BiBrain} size={100} color="#779B1F" />}
            description={
              "Our Psychiatry Department offers compassionate mental health care. With experienced psychiatrists, we provide assessment and treatment for a wide range of mental health conditions, promoting well-being and emotional health."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
