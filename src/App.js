import React from 'react';
import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import LogIn from './LogIn'
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Short/Navbar'
import Footer from './Short/Footer'

import SignUpCon from './SignUpCon'
import SignUpHir from './SignUpHir'

import LoginCon from './LoginCon'
import LoginHir from './LoginHir'



const App =()=>{
  return(<> 
  
 
  <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact" component={Contact}/>

        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/loginCon" component={LoginCon}/>
        <Route exact path="/loginHir" component={LoginHir}/>

        <Route exact path="/SignUpCon" component={SignUpCon}/>
        <Route exact path="/SignUpHir" component={SignUpHir}/>
        
        <Redirect to="/" />
  </Switch>
 
 
    
  </>)
}

export default App;

