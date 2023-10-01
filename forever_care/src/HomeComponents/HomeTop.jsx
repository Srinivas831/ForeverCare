import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Icon,
    HStack,
    VStack,
    Box,
    Button
  } from '@chakra-ui/react';
  
  import { MdControlCamera } from 'react-icons/md';
  

  const list=[
    { id: 0,
      title: 'Cadiology',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {id: 1,
    title: 'Pediatric',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {id: 2,
    title: 'Otolaryngologist',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {id: 3,
    title: "Dental Department",
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
    id: 4,
    title: 'Vision Treatment',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
    id: 5,
    title: 'Obstetrics',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
  
  ]
  
  
  export default function HomeTop() {

    const redirectTo = () => {
        window.location.href = '/services'; 
    }

    return (
      <Container maxW={'10xl'} py={12} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              alt={'services image'}
              src={
                'https://res.cloudinary.com/dsixdct6o/image/upload/v1686918246/Screenshot_2023-06-16_at_17.53.20_mjteso.png'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4} mt={{
            "md":'100px'
          }}>
            <Text
              p={2}
              alignSelf={'flex-start'}
              color={'#85AD23'} fontWeight={"semibold"} fontSize='1xl'
            >              
            ABOUT OUR MEDICAL SERVICES
            </Text>
            <Heading textAlign={"left"} color={"black"} fontSize='2xl' fontWeight={"semibold"}>Comprehensive healthcare solutions for all your medical needs.</Heading>
            <Text textAlign={"left"} color={"#8b8986"} fontSize={'lg'}>
            We provide best possible services to all the people.
            </Text>
           <Text textAlign={"left"} color={"black"} fontSize='2xl' fontWeight={"semibold"}>Our Special features</Text>
            <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={5}>
            {list.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={MdControlCamera} color="rgba(1, 213, 162, 1)"/>
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                </VStack>
              </HStack>
            ))}
            <Flex>
            <Button borderRadius={0} color={"white"}  bg="rgba(1, 213, 162, 1)" variant='solid'  size={'lg'} fontSize={'xs'} mr={5} width={"200px"} onClick={redirectTo}>VIEW MORE</Button>
            </Flex>
          </SimpleGrid>
        </Container>
           </Stack>
          
        </SimpleGrid>
      </Container>
    );
  }