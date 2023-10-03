import React, { useState } from "react";
import { Heading, Input, Stack, Link, useToast} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const SignUp = () => {
    const nav = useNavigate();
    const toast = useToast();
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const handleSignUp = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name=formData.get('name');
    if (!email || !password) {
    
      toast({
        title: "Error",
        description: "Please enter valid credentials.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // const isExistingEmail = existingUsers.some(user => user.email === email);
    // if (isExistingEmail) {
      // setIsEmailRegistered(true);
    // } else {
      // setIsEmailRegistered(false);
      const userDetails=[];
      const newUser = { email, password,name,userDetails };
      // const updatedUsers = [...existingUsers, newUser];
      const updatedUsers = newUser;
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      // alert("Account created successfully!");
      toast({
        title: "Success",
        description: "Account created successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      axios.post("https://forevercare.onrender.com/users",newUser);
      nav("/signin");
    }
  // };
      const style = {
        paddingTop : "40px"
      };
    return (
        <DIV className="signup" style={style}>
                <form onSubmit={handleSignUp}>
                    <Stack spacing={5}>
                        <Heading>Sign Up</Heading>
                        <div className="name">
                            <Input    name="name"
                                placeholder='Enter First Name'
                                _placeholder={{ opacity: 1, color: 'teal' }}
                            />
                            <Input
                                 placeholder='Enter Last Name'
                                _placeholder={{ opacity: 1, color: 'teal' }}
                            />
                       </div>
                        <Input
                            type="email"
                            name="email"
                            placeholder='Enter E-Mail'
                            _placeholder={{ opacity: 1, color: 'teal' }}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder='Enter Password'
                            _placeholder={{ opacity: 1, color: 'teal' }}
                        />
                        <Input
                            placeholder='Confirm Password'
                            _placeholder={{ opacity: 1, color: 'teal' }}
                        />
                        <button >Sign up</button>
                        <Link color='teal.500' href='/signin'>
                            Already have an account? SignIn
                        </Link>
                    </Stack>
                </form>
                {isEmailRegistered && (
        <div style={{ color: "red", marginTop: "10px" }}>Email is already registered. Please use a different email.</div>
      )}
        </DIV>
    )
}
const DIV = styled.div`
   text-align: center;
   font-family: 'Poppins', sans-serif;
    Input{
        height: 45px;
        width: 100%;
        margin: auto;
        border-radius: 8px;
        border: 1px solid lightgreen;
        background-color: rgba(235,242,236,1);
        text-align: start;
        font-size: 100%;
        color: black;
    }
    button{
        background-color: #85AD23;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    form{
      width: 38%;
      margin: auto;
      height: 15%;
      border: 1px solid green;
      padding: 2%;
      @media (max-width: 768px) {
      width: 90%;
    }
    }
    button:hover{
      background-color: #B6D89F;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .name{
    display: flex;
    gap: 2%;
    width: 100%;
    }
  `