import React from 'react';
import logo from './logo.svg';

import Common from './Short/Common'
import img from './images/img1.png'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Short/Navbar'
import Footer from './Short/Footer'


const About =()=>{
  return(<> 
    <div>
    <Navbar/>
    
     <Common 
     name='Find Contractors Near You On' 
     des='Finding nearest & best contractors,Now it can be very easy on Kamgiri.com'
     imgsrc={img} 
     visit='/contact' 
     btnname='Sign Up' />
      <Footer/>
     </div>
  </>)
}

export default About;

