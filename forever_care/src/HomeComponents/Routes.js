import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
// import { Switch } from '@chakra-ui/react';

import {About} from '../Pages/About';
import Pricing, {Packages} from '../Pages/Packages';
import {Contact} from '../Pages/Contact';
import { SignUp } from '../LoginComponent/Signup';
import { Services } from '../serviceComponents/Services';
import { SignIn } from '../LoginComponent/SignIn';
import ServicesData from '../serviceComponents/ServicesData';
import Home from '../Pages/Home';
import MultiStepForm from '../serviceComponents/Pay';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path='/services' element={<Services />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/packages" element={<Pricing/>} />
        <Route path="/contact" component={Contact} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/servicesData' element={<ServicesData />} />
        <Route path='/pay' element={<MultiStepForm/>} />
      </Routes>
    </div> 
  );
};

export default AllRoutes;