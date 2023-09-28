import React from "react";
import { Box, Heading, Input, Button, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";



export const SignUp= ()=>{

    return(
        <DIV className="signup">
            <Box>
                <Heading>SignUp</Heading>
                <form action="">
                <Stack spacing={5}>
  
  <Input
    placeholder='Enter Name'
    _placeholder={{ opacity: 1, color: 'teal'}}
  />
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
        background-color: #89c461;
        width: 100%;
        height: 40px;
        margin-top: 10%;
        border-radius: 10px;
    }
    form{
      width: 35%;
      margin: auto;
      height: 20%;
    }
`

