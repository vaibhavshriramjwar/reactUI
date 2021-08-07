import React,{Component} from 'react';

import { NavLink } from 'react-router-dom'
import img from './images/img2.png'
import Common from './Short/Common'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Short/Navbar'
import Footer from './Short/Footer'


const Home =()=>{{
  
    return (
     <>
     <div>
     <Navbar/>
     <Common 
     name='Find Contractors Near You On' 
     des='Finding nearest & best contractors,Now it can be very easy on Kamgiri.com'
     imgsrc={img} 
     visit='/login' 
     btnname='Log In' />
      <Footer/>
      </div>
   </>
    )
  }
}
export default Home;

