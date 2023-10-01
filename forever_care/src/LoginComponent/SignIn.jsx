import React from "react";
import { Box, Heading, Input, Stack, Link, Checkbox } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { SignUp } from "./SignUp";
import {  useNavigate } from "react-router-dom/dist";



export const SignIn = () => {
  const nav= useNavigate()
  const handleSignIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      alert("Sign in successful!");
      nav("/");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <DIV className="signup">
      <Box>

        <form onSubmit={handleSignIn}>

          <Stack spacing={5}>
            <Heading>Sign In</Heading>

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
            <Checkbox defaultChecked>Remember me</Checkbox>


            <button>Sign In</button>
            
              <Link color='teal.500' href="/signup">
                Don't have an account? SignUp
              </Link>

            

          </Stack>

        </form>
      </Box>
    </DIV>
  )
}

const DIV = styled.div`
   margin-top: 10%;
   text-align: center;
   width: 100%;
   
   
   
   
    Input{
        height: 45px;
        width: 100%;
        margin: auto;
        /* border-radius: 8px; */
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
        /* border-radius: 10px; */
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-size: 100%;
    }
    form{
      width: 35%;
      margin: auto;
      height: 20%;
      border: 1px solid green;
      padding: 2%;
      @media (max-width: 768px) {
      width: 90%; 
    }
    
    }
    button:hover{
      background-color: #b6d89f;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

.name{
  display: flex;
  gap: 2%;
  width: 100%;
}
    
.link{
    display: flex;
    gap: 12%;

}
  `

