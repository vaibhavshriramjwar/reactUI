import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardItem from '../src/Short/CardChoose'
import Card from './Short/Card';
import img23 from '../src/images/SignUp1.jpg'


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Short/Navbar'
import Footer from './Short/Footer'

const Contact =()=>{
  return(<> 
  <div>
  <Navbar/>
     <div className="my-5">
       <h1 className="text-center">Choose your Role</h1>
      
     </div>

     <div className="container-fluid mb-5">
          <div className="row">
           <div className="col-10 mx-auto">
             <div className="row gy-4 gx-1">
              {
                CardItem.map((val,ind) =>{
                  return <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title ={val.title}
                      description1={val.description1}
                      btnLabel={val.btnLabel}
                      visit1={val.visit1}

                   />
                })
              }
             </div>
           </div>
          </div>
       </div>
       <Footer/>
       </div>
     </>)
}

export default Contact;

