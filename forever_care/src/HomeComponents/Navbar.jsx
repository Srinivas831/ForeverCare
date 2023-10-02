import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../reduxAuth/action";

 
export default function NavBar(){
  // const { setAuth, setUserData,userData } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const isAuth=useSelector((store)=>store.AuthReducer.isAuth);
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handleLogout = () => {
    // setAuth(false);
    // setUserData({});
    dispatch(authLogout())
    navigate("/");
  };

  useEffect(()=>{
    console.log(isAuth);
  },[isAuth])
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
    <Box position="relative" zIndex={10} mb={"60px"}>
      <Box
        position="fixed"
        width={"-webkit-full-available"}
        top={0}
        left={0}
        right={0}
        bg="transparent"
      >
      <Box
      //  bg={"rgba(133, 173, 35, 0.5)"} 
      // bg={"rgb(1,213,162)"}
      bg={"rgb(237,243,248)"}
      px={4} color={"white"} fontWeight={"bold"} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between" }>
          <IconButton
            as = {HamburgerIcon}
            // bg = "#6A8A1C"
            _hover={{
              textDecoration: "none",
              // bg: "#AED943",
            }}
            size={"md"}
            icon={isOpen ? "" :""}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box>
          <Link to="/">
              
                <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x9j5guxzzgksruid010e.png" alt="Logo" width={"240px"} height={"200px"} />
                {/* https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9xz2guks0iij3w6ez7uw.png */}
                {/* "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/06rfxiejshilc7yovjww.png" */}
              </Link>
          </Box>
          
          <HStack spacing={8} alignItems={"center"} color={"black"}>
            
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
                    // bg: "#AED943",
                    color:"#329938"
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
                   color: "#329938"
                 }}
               >
                 {/* {userData.name} */}
               </MenuItem>
                  <MenuItem
                    _hover={{
                      textDecoration: "none",
                      color: "#329938"
                    }}
                  >
                    User Details
                  </MenuItem>
                  <Link to="/appointments">
                  <MenuItem
                    _hover={{
                      textDecoration: "none",
                      color: "#329938"
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
                      color: "#329938"
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
                  color: "#329938"
                }} color={"black"}>
                SIGN-IN
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