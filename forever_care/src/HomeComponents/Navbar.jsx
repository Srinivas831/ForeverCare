import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
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


import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

 
export default function NavBar(){
  const { isAuth, setAuth, setUserData,userData } = useContext(AuthContext);

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

   <>
    <Box position="relative">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={20}
        bg="transparent"
        px={4}
        py={2}
      >
      <Box  bg={"transparent"} px={4} color={"white"} fontWeight={"bold"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            _hover={{
              textDecoration: "none",
              bg: "#01D5A2",
            }}
            size={"md"}
            icon={isOpen ? "" :""}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
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
                  bg: "#01D5A2",
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
                   bg: "#01D5A2",
                 }}
               >
                 {userData.name}
               </MenuItem>
                  <MenuItem
                 
                    _hover={{
                      textDecoration: "none",
                      bg: "#01D5A2",
                    }}
                  >
                    User Details
                  </MenuItem>
                  <Link to="/appointments">
                  <MenuItem
                    _hover={{
                      textDecoration: "none",
                      bg: "#01D5A2",
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
                      bg: "#01D5A2",
                    }}
                  >
                    Logout
                  </MenuItem>
                  
                </MenuList>
              </Menu>
            ) : (
              <Link key={"login"} to="/login" >
                <ChakraLink
                px={2}
                py={1}
                _hover={{
                  textDecoration: 'none',
                  bg: "#01D5A2",
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
                    bg: "#01D5A2",
                  }}>
                  <Icon as={HamburgerIcon} />
                  {ele.label} </ChakraLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      </Box>
      </Box>
    </>
  );
}




// Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">Your Logo</Link>
//       <div className="menu">
//         <Link to="/">Home</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/about">About</Link>
//         <Link to="/packages">Packages</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//       <div className="buttons">
//         <button className="login">Login</button>
//         <button className="signup">Signup</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
