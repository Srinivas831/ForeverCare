import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import ServiceCard from './ServiceCard'
import React, { useEffect, useState, useRef } from 'react';

import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { serviceData } from '../reduxService/actionService';
import { SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const messageExamples = [
    {
      primary: "Doctor's Appointment",
      secondary: "My appointment for the doctor was rescheduled for next Saturday.",
      person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYdOdFhSlfKukj6FKFx_SvqfRy9h6ld8Ki2C87CxBdDsFgZ5BAEy2iF8aO1mGpVesGHg&usqp=CAU',
    },
    {
      primary: "Caring Staff",
      secondary: "The staff at Forever Care is incredibly caring and supportive.",
      person: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
    },
    {
      primary: "Professional Team",
      secondary: "The professional team at Forever Care truly cares about patients.",
      person: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    },
    {
      primary: "Efficient Service",
      secondary: "I was impressed by the efficient service I received at Forever Care.",
      person: 'https://vlookup.ai/api/public/upload/user/1671826525.png',
    },
    {
      primary:  "Quality Healthcare",
      secondary:"I trust Forever Care to provide quality healthcare for my family.",
      person: 'https://images.unsplash.com/photo-1564564295391-7f24f26f568b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80',
    },
    {
      primary:  "Compassionate Care",
      secondary:  "Forever Care provides compassionate care that put me at ease.",
      person: 'https://img.freepik.com/free-photo/portrait-happy-woman-smiling_1303-9953.jpg',
    },
    {
      primary:  "Prompt Treatment",
      secondary:"I received prompt and effective treatment from Forever Care.",
      person: 'https://img.freepik.com/premium-photo/cute-casual-woman-outdoor_624325-394.jpg',
    },
];

function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  
    return Array.from(new Array(20)).map(
      () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

const ServicesData = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
   
    const dataFromStore = useSelector((store) => ({
        data: store.ServiceReducer.isSuccessService,
        loading: store.ServiceReducer.isLoadingService,
        error: store.ServiceReducer.isErrorService,
    }), shallowEqual);

    

    useEffect(() => {
        const speciality = searchParams.get("speciality");
        const location = searchParams.get("location");

        if (speciality && location) {
            const paramObj = {
                speciality: speciality,
                location: location,
            };
            dispatch(serviceData(paramObj));
        }
    }, [searchParams, dispatch]);

    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const [messages, setMessages] = useState(() => refreshMessages());


    if (dataFromStore.loading) {
        // return (
        //     <img
        //         src="https://i.gifer.com/ZKZg.gif"
        //         style={{ margin: "auto", alignItems: "center", width: "5vw" }}
        //     />
        // );
        return(
            <>
            <Box padding='6' mt={"100px"} boxShadow='lg' bg='white' width={"50%"} ml={"10%"}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2'  />
</Box>
<Box padding='6' boxShadow='lg' bg='white' width={"50%"} ml={"10%"}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' boxShadow='lg' bg='white' width={"50%"} ml={"10%"}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' boxShadow='lg' bg='white' width={"50%"} ml={"10%"}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
            </>
        )
    }

//    useEffect(() => {
//         if (ref.current) { // Add a null check here
//             ref.current.ownerDocument.body.scrollTop = 0;
//             setMessages(refreshMessages());
//         }
//     }, [value, setMessages]);
    return (
        <DIV>
            <div className='outerDiv'>
                <div className='innerDiv1'>
                    {dataFromStore.data?.map((ele) => <ServiceCard key={ele.id} {...ele} />)}
                </div>
                {dataFromStore?.data ? <div className='innerDiv2'>
                    <ThemeProvider theme={theme} >
                        <Box sx={{ pb: 7 }} ref={ref} position={"fixed"} mr={"20px"} borderRadius={"10px"}  bgcolor={"#009E60"} >
                            <h2 style={{ marginTop: "30px", 
                            color:"white",
                            fontSize: "20px", textAlign: "center" }}>Testimonials</h2>
                            <CssBaseline />
                            <List sx={{ maxHeight: '440px', overflowY: 'auto' }}>
                                {messages.map(({ primary, secondary, person }, index) => (
                                    <ListItem key={index + person}>
                                        <ListItemAvatar>
                                            <Avatar alt="Profile Picture" src={person} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<span style={{ color: "whitesmoke" }}>{primary}</span>}
                                            secondary={<span style={{ color: "whitesmoke" }}>{secondary}</span>} />
                                    </ListItem>
                                ))}
                            </List>
                            <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, mr: "15px" }} elevation={3}>
                                <BottomNavigation
                                    showLabels
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                >
                                    <BottomNavigationAction label="Recents" style={{ color: "black" }} />
                                    <BottomNavigationAction label="Favorites" style={{ color: "black" }} />
                                    <BottomNavigationAction label="Archive" style={{ color: "black" }} />
                                </BottomNavigation>
                            </Paper>
                        </Box>
                    </ThemeProvider>
                </div> : null}
            </div>
        </DIV>
    );
}

export default ServicesData;

const DIV = styled.div`
    .outerDiv{
        display : flex;
        justify-content: space-around;
        padding-bottom: 30px; 
    }
    .innerDiv1{
        width: 65%;
    }
    .innerDiv2{
        width: 33%;
        /* background-color:rgb(237,243,248); */
        color: black;
        padding: 20px 20px 20px 5px;
        
    }

    @media screen and (min-width:200px) and  (max-width:600px) {
        .outerDiv{
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: auto;
        }
        .innerDiv1{
            width: 90%;
        }
        .innerDiv2{
            margin-right:60vw ;
        }
    }
`;
