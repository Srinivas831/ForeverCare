import { Flex,Box, Stack, Text, Button, useBreakpointValue } from '@chakra-ui/react'
import HomeTop from '../HomeComponents/HomeTop';
import HomeServices from '../HomeComponents/HomeService';
import HomeDoctor from '../HomeComponents/HomeDoctor';
import Sliding from '../HomeComponents/Sliding';
import { HomeFAQ } from '../HomeComponents/HomeFAQ';

function Home(){   

    return(  
        <Box
            maxWidth="100%" mx="auto"
            w={"full"}
            overflow="hidden"
            position="relative"
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                w="50%"
            />
            <Box>
            <Box position="relative" height="100%">
                <Box>
                    <Flex>
                        <Sliding />
                        <Box position="absolute" zIndex={5}  left={0} right={0} p={4}>
                            <Stack maxW={'2xl'} align={'flex-start'} spacing={6} alignSelf={'flex-start'} textAlign={"left"} mt={200}>
                                <Text
                                    color={'white'}       
                                    fontWeight={"semibold"}
                                    lineHeight={1.2}
                                    fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}>
                                    WE GIVE YOU THE BEST
                                </Text>
                                <Text color={'#13d6a8'}
                                    fontWeight={700}
                                    lineHeight={1.2}
                                    fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
                                    Care Better Together
                                </Text>
                                <Text color={"#424242"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet justo eget risus feugiat eleifend nec vitae justo. Nam sagittis nibh eget augue eleifend semper. Praesent et elit vel metus convallis</Text>
                                <Stack direction={{"base":"column","sm":"column","md":"row"}}>
                                    <Button borderRadius={0} color={"white"}  bg="rgba(1, 213, 162, 1)" variant='solid' opacity={1} size={'lg'} fontSize={'xs'}>HOW CAN WE HELP</Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>

        <Box>
            <HomeTop />
        </Box>
        <Box>
            <HomeServices />
        </Box>
        <Box padding={10}>
            <HomeDoctor />
        </Box>
        <Box>
            <HomeFAQ />
        </Box>
    
    </Box>
    )
}

export default Home;