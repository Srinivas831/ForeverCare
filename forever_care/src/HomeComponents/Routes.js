import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
// import { Switch } from '@chakra-ui/react';

import {About} from '../Pages/About';
import {Packages} from '../Pages/Packages';
import {Contact} from '../Pages/Contact';
import { SignUp } from '../LoginComponent/SignUp';
import { Services } from '../serviceComponents/Services';
import { SignIn } from '../LoginComponent/SignIn';
import ServicesData from '../serviceComponents/ServicesData';
import Home from '../Pages/Home';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path='/services' element={<Services />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/packages" component={Packages} />
        <Route path="/contact" component={Contact} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/servicesData' element={<ServicesData />} />
      </Routes>
    </div> 
  );
};

export default AllRoutes;