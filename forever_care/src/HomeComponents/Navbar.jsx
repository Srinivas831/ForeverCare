import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text
} from "@chakra-ui/react";
import { useContext } from "react";
import {
  Avatar,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logoImage from '../logo.svg'

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

 
export default function NavBar(){
  const { isAuth, setAuth, setUserData,userData } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    setUserData({});
    navigate("/");
  };

  const linkAction = isAuth ? handleLogout : null;

  const Paths = [
    { path: "/", onClick: linkAction, label: "Home" },
    { path: "/services", onClick: linkAction, label: "Service" },
    { path: "/about", onClick: linkAction, label: "About" },
    { path: "/packages", onClick: linkAction, label: "Packages" },
    { path: "/contact", onClick: linkAction, label: "Contact" },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

   <div>
    <Box position="relative" zIndex={10}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bg="transparent"
      >
      <Box bg={"rgba(133, 173, 35, 0.5)"} px={4} color={"white"} fontWeight={"bold"} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between" }>
          <IconButton
            as = {HamburgerIcon}
            bg = "#6A8A1C"
            _hover={{
              textDecoration: "none",
              bg: "#AED943",
            }}
            size={"md"}
            icon={isOpen ? "" :""}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box>
          <Link to="/">
                {/* <Text */}
                  {/* fontSize="20px" */}
                  {/* fontWeight="bold" */}
                  {/* fontFamily="cursive"  */}
                  {/* color="#27330A" */}
                  {/* textTransform="uppercase" */}
                  {/* letterSpacing="0.1rem" */}
                  {/* _hover={{ */}
                    {/* textDecoration: "none", */}
                    {/* color: "#E6EED3", */}
                    {/* transition: "color 0.5s ease", */}
                  {/* }} */}
                {/* > */}
                  {/* Forever Care */}
                {/* </Text> */}
                <img src= "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y980dab2kn2on4ozyx80.jpg" alt="Logo"></img>
              </Link>
          </Box>
          
          <HStack spacing={8} alignItems={"center"} color={isAuth ? "white":"black"}>
            
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              justifyContent="center"
            >
              {Paths.map((ele) => (
                <Link key={ele.label} to={ele.path} >
                  <ChakraLink px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: "#AED943",
                }}>
                  {ele.label}
                  </ChakraLink>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {isAuth ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
               
                <MenuList color={"black"}>
                <MenuItem
                 
                 _hover={{
                   textDecoration: "none",
                   bg: "#AED943",
                 }}
               >
                 {userData.name}
               </MenuItem>
                  <MenuItem
                 
                    _hover={{
                      textDecoration: "none",
                      bg: "#AED943",
                    }}
                  >
                    User Details
                  </MenuItem>
                  <Link to="/appointments">
                  <MenuItem
                    _hover={{
                      textDecoration: "none",
                      bg: "#AED943",
                    }}
                  >
                  My Appointments
                  </MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem
                   onClick={linkAction}
                    _hover={{
                      textDecoration: "none",
                      bg: "#AED943",
                    }}
                  >
                  Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link key={"login"} to="/signup" >
                <ChakraLink
                px={2}
                py={1}
                _hover={{
                  textDecoration: 'none',
                  bg: "#AED943",
                }} color={isAuth ? "white":"black"}>
                Login
                </ChakraLink>
              </Link>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}  bg={"white"} borderRadius={5} padding={2} textAlign={"left"} color="black">
              {Paths.map((ele) => (
                <Link key={ele.label} to={ele.path}>
                  <ChakraLink px={2} py={1} rounded={'md'}
                      _hover={{
                      textDecoration: 'none',
                    bg: "#AED943",
                  }}>
                  {ele.label} </ChakraLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      </Box>
      </Box>
    </div>
  );
}