
import { Flex, Grid, GridItem,Stack, Image,Box,Container,VStack ,chakra} from "@chakra-ui/react";


const Card = ({image}) => {
  return (
    <Box
     maxW={{ base: "full", md: "275px" }}
     w={"full"}
     overflow="hidden"
    position="relative"
    >
        <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
        />
        <Stack spacing={3} height={"100%"}> 
            <Image src={image} alt="patient" height={"100%"} objectFit={"cover"} width="100%"></Image>
        </Stack>
    </Box>
  );
};

export default function HomeDoctor() {
  return (
 
    <Box p={4} padding={20}>
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(1, 1fr)"
      }}
      gap={4}
      // bg={"#27330A"}
    >

      <GridItem colSpan={1} >
        <VStack spacing="5px" textAlign={"center"}>
          <Flex>
          <chakra.h2 color={'#85AD23'} fontWeight={"semibold"} fontSize='1xl'>
          ABOUT OUR MEDICAL TEAM
          </chakra.h2>
          </Flex>
          <Flex>
          <chakra.h2  color={"black"} fontSize='2xl' fontWeight={"semibold"}>
          Meet Our Dedicated Team of Doctors
          </chakra.h2>
          </Flex>
          <Flex>
            <chakra.p color={"black"}>
            Our team of experienced and compassionate doctors is committed to your health and well-being. With expertise in a wide range of medical specialties, they provide personalized care and the latest treatments to ensure you receive the highest quality healthcare. Whether you're seeking routine check-ups or specialized medical attention, our doctors are here to guide you on your path to wellness.
            </chakra.p>
            </Flex>
        </VStack>
      </GridItem>
    </Grid>

    <Container maxW={"11xl"} mt={12} > 
      <Grid templateColumns={{
         base: "repeat(1, 1fr)",
         sm: "repeat(2, 1fr)",
         md: "repeat(4, 1fr)", 
      }} gap={3} justifyContent="space-evenly">
       
        <Card
          image="https://www.mazemenshealth.com/wp-content/uploads/2020/06/iStock-1156352527.jpg"
        />
        <Card
          image="https://estheticaindia.com/wp-content/uploads/2021/05/consult.jpg"
        />
        <Card
         image="https://stock.intellemo.com/6257fc5d46f08b25730e4d85/6257fc6194b8f9bf5d0af3bb-v90/consultation_from_healthcare_specialist_doctor_l.jpg"
        />
        <Card
          image="https://www.mazemenshealth.com/wp-content/uploads/2020/06/iStock-1156352527.jpg"
        />
      </Grid>
    </Container>
  </Box>
  );
}