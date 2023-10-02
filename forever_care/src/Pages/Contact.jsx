// import React from 'react';
// import {
//   Box,
//   Flex,
//   Text,
//   Heading,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   ChakraProvider,
//   Icon,
// } from '@chakra-ui/react';
// import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// function Contact() {
//   const address = 'Apollo Hospitals DRDO, DMRL Cross Rd, Kanchan Bagh, Hyderabad, Telangana 500058';
//   const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;

//   return (
//     <ChakraProvider>
//       <Flex flexDirection={['column', 'row']} minHeight="100vh">
//         <Box
//           bgImage="https://admin.risingkashmir.com/Source/News/668fba0a-9927-48c0-a950-4801e4868ad8.png"
//           bgSize="cover"
//           bgPosition="center"
//           py={8}
//         //   marginTop={20}
//         //   marginBottom={20}
//         //   marginLeft={20}
//           px={4}
//           textAlign="center"
//           flex={['1', '1/2']}
//           opacity="0.7"
//         >
//           <Flex flexDirection="column" alignItems="center" color="white">
//             <Box mb={6} >
//               <Icon as={MdLocationOn} fontSize="3xl" mb={2} color="black" />
//             </Box>
//             <Text fontSize="xl" mb={2} color="black" fontWeight="600">
//               Address
//             </Text>
//             <Link href={googleMapsUrl} isExternal color="black" fontWeight="bold">
//               <Text fontSize="lg">{address}</Text>
//             </Link>
//           </Flex>
//           <Flex flexDirection="column" alignItems="center" color="white" mt={4}>
//             <Box mb={6}>
//               <Icon as={MdPhone} fontSize="3xl" mb={2} color="black" />
//             </Box>
//             <Text fontSize="xl" mb={2} color="black">
//               Lets Talk
//             </Text>
//             <Text fontSize="lg">+91 88812 36879</Text>
//           </Flex>
//           <Flex flexDirection="column" alignItems="center" color="white" mt={4}>
//             <Box mb={6}>
//               <Icon as={MdEmail} fontSize="3xl" mb={2} color="black" />
//             </Box>
//             <Text fontSize="xl" mb={2} color="black">
//               General Support
//             </Text>
//             <Text fontSize="lg">contact@example.com</Text>
//           </Flex>
//         </Box>
//         <Box flex={['1', '1/2']} p={4} borderWidth="1px" borderRadius="md" boxShadow="md" marginTop={20}
//           marginBottom={20}
//           marginRight={20}>
//           <Heading as="h1" size="lg" textAlign="center" mb={4}>
//             Send Us A Message
//           </Heading>
//           <form>
//             <FormControl id="first-name" isRequired mb={4}>
//               <FormLabel>First Name</FormLabel>
//               <Input type="text" placeholder="First name" />
//             </FormControl>
//             <FormControl id="last-name" isRequired mb={4}>
//               <FormLabel>Last Name</FormLabel>
//               <Input type="text" placeholder="Last name" />
//             </FormControl>
//             <FormControl id="email" isRequired mb={4}>
//               <FormLabel>Email</FormLabel>
//               <Input type="email" placeholder="Eg. example@email.com" />
//             </FormControl>
//             <FormControl id="phone" mb={4}>
//               <FormLabel>Phone Number</FormLabel>
//               <Input type="tel" placeholder="Eg. +1 800 000000" />
//             </FormControl>
//             <FormControl id="message" isRequired mb={4}>
//               <FormLabel>Message</FormLabel>
//               <Textarea placeholder="Write us a message" />
//             </FormControl>
//             <Button type="submit" colorScheme="blue">
//               Send Message
//             </Button>
//           </form>
//         </Box>
//       </Flex>
//     </ChakraProvider>
//   );
// }

// export default Contact;

import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  Icon,
  Link,
  ChakraProvider,
} from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

function Contact() {
  const address = 'Apollo Hospitals DRDO, DMRL Cross Rd, Kanchan Bagh, Hyderabad, Telangana -  500058';
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(
    address
  )}`;

  return (
    <ChakraProvider>
      <Flex
        flexDirection="row"
        // minHeight="50vh"
        bgImage="https://admin.risingkashmir.com/Source/News/668fba0a-9927-48c0-a950-4801e4868ad8.png"
        bgSize="cover"
        bgPosition="center"
        opacity="0.7"
      >
        {/* First Part */}
        <Box
          py={8}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            <Box mb={6}>
              <Icon as={MdLocationOn} fontSize="3xl" mb={2} color="black" />
            </Box>
            <Text fontSize="xl" mb={2} fontWeight="600">
              Address
            </Text>
            <Link href={googleMapsUrl} isExternal color="black" fontWeight="bold">
              <Text fontSize="lg" marginLeft={10} marginRight={10} textAlign={'center'}>{address}</Text>
            </Link>
          </Flex>
        </Box>

        {/* Second Part */}
        <Box
          py={8}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            <Box mb={6}>
              <Icon as={MdPhone} fontSize="3xl" mb={2} color="black" />
            </Box>
            <Text fontSize="xl" mb={2} fontWeight="600">
              Lets Talk
            </Text>
            <a href="tel:+918881236879" style={{ textDecoration: 'none' }}>
                <Text fontSize="lg" cursor="pointer">
                +91 88812 36879
                </Text>
            </a>
          </Flex>
        </Box>

        {/* Third Part */}
        <Box
          py={8}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            <Box mb={6}>
              <Icon as={MdEmail} fontSize="3xl" mb={2} color="black" />
            </Box>
            <Text fontSize="xl" mb={2} fontWeight="600">
              General Support
            </Text>
            <a href="mailto:contact@example.com" style={{ textDecoration: 'none' }}>
                <Text fontSize="lg" cursor="pointer">
                contact@example.com
                </Text>
            </a>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Contact;

