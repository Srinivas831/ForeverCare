import React from 'react';
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  Flex,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Your SVG path here */}
    </svg>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box mt={"40px"} 
     //  bgColor={"#009E60"}
    // color={"white"}
    zIndex={10}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/about'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'contact'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'/contact'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack spacing={6} textAlign={'left'}>
            <Text fontSize={'sm'}>Social Links</Text>
            <Text fontSize={'sm'}>
              Reach out to us on any of these platforms
            </Text>
            <Stack direction={'row'} spacing={6}>
              <Flex width={'35px'} height={'35px'} bgGradient="linear(to right, #0ac297, #00d6a3)">
                <Image src="https://img.icons8.com/?size=512&id=106163&format=png" filter="brightness(0) invert(1)" bg={"transparent"} width={"15px"} height={"15px"} margin={"auto"}/>
              </Flex>
              <Flex width={'35px'} height={'35px'} bgGradient="linear(to right, #0ac297, #00d6a3)">
                <Image src="https://img.icons8.com/?size=512&id=102748&format=png" filter="brightness(0) invert(1)" bg={"transparent"} width={"15px"} height={"15px"} margin={"auto"}/>
              </Flex>
              <Flex width={'35px'} height={'35px'} bgGradient="linear(to right, #0ac297, #00d6a3)">
                <Image src="https://img.icons8.com/?size=512&id=YtCEActai4Hq&format=png" filter="brightness(0) invert(1)" bg={"transparent"} width={"15px"} height={"15px"} margin={"auto"}/>
              </Flex>
              <Flex width={'35px'} height={'35px'} bgGradient="linear(to right, #0ac297, #00d6a3)">
                <Image src="https://img.icons8.com/?size=512&id=cFXACXplkI6u&format=png" filter="brightness(0) invert(1)" bg={"transparent"} width={"15px"} height={"15px"} margin={"auto"}/>
              </Flex>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
