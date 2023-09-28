import React from "react";
import { Box, Heading, Input, Button, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";



export const SignUp= ()=>{

    return(
        <DIV className="signup">
            <Box>
                
                <form action="">
                
                <Stack spacing={5}>
                <Heading>Sign Up</Heading>
                <div className="name">
                <Input
    placeholder='Enter First Name'
    _placeholder={{ opacity: 1, color: 'teal'}}
  />

<Input
    placeholder='Enter Last Name'
    _placeholder={{ opacity: 1, color: 'teal'}}
  />
                </div>
  
<Input
    placeholder='Enter Contact No'
    _placeholder={{ opacity: 1, color: 'teal'}}
  />
<Input
    placeholder='Enter E-Mail'
    _placeholder={{ opacity: 1, color: 'teal'}}
  />

<Input
    placeholder='Enter Password'
    _placeholder={{ opacity: 1, color: 'teal'}}
  />

<Input
    placeholder='Confirm Password'
    _placeholder={{ opacity: 1, color: 'teal'}}
  />
  <Button>Signup</Button>
</Stack>

                </form>
            </Box>
        </DIV>
    )
}

const DIV= styled.div`
   margin-top: 8%;
   
    Input{
        height: 45px;
        width: 100%;
        margin: auto;
        border-radius: 8px;
        border: 1px solid lightgreen;
        background-color: rgba(235,242,236,1);
        margin-top: 2%;
        text-align: start;
        font-size: 100%;
    
    }
    Button{
        background-color: #b5eb9a;
        width: 100%;
        height: 40px;
        margin-top: 5%;
        border-radius: 10px;
        border: none;
    }
    form{
      width: 35%;
      margin: auto;
      height: 20%;
    }
    Button:hover{
      background-color: #89c461;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

.name{
  display: flex;
  gap: 2%;
  width: 100%;
}
    
  `

