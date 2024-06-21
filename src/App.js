import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import Reason from './components/Reason/Reason';
import Testimonial from './components/Testimonials/Testimonial';
import Team from './components/Team/Team';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import SMCcourse from './components/SMC(Sreekanth)/SMCcourse';
import Policy from './components/PrivatePolicy/Policy';
import AboutCourse from './components/SMC(Sreekanth)/AboutCourse';
import WhatOffer from './components/SMC(Sreekanth)/WhatOffer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Navbar/><Home/><Reason/><Testimonial/><Team/><About/></div>}/>
        <Route path='/courses' element={<div><Navbar/><Courses/></div>}/>
        <Route path='/a/zero-to-hero-smc' element={<div><Navbar/><SMCcourse/><AboutCourse/><WhatOffer/> </div>}/>
        <Route path='/marketable_private_policy' element={<div><Navbar/><Policy/></div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;