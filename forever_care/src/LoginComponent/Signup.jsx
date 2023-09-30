import React from "react";
import { Heading, Input, Stack, Link} from "@chakra-ui/react";
import styled from "@emotion/styled";



export const SignUp = () => {

    const handleSignUp = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password)
        
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    
        // Redirect 
      };

    return (
        <DIV className="signup">
            

                <form onSubmit={handleSignUp}>

                    <Stack spacing={5}>
                        <Heading>Sign Up</Heading>
                        <div className="name">
                            <Input     
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
                        <Link color='teal.500' href='#'>
                            Already have an account? SignIn
                        </Link>
                    </Stack>

                </form>
            
        </DIV>
    )
}

const DIV = styled.div`
   margin-top: 8%;
   text-align: center;
   
   
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
      width: 90%; /* Adjust for smaller screens */
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
    
  `

