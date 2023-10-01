import { Flex,Box } from '@chakra-ui/react'
import HomeTop from '../HomeComponents/HomeTop';
import HomeServices from '../HomeComponents/HomeService';
import HomeDoctor from '../HomeComponents/HomeDoctor';
import Sliding from '../HomeComponents/Sliding';
import Footer from '../HomeComponents/Footer';

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
        <Box bg={"#053d4c"} padding={10}>
            <HomeDoctor />
        </Box>
    
    </Box>
    )
}

export default Home;