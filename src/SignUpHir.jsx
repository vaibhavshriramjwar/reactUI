import React, { Component } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Short/Navbar'
import Footer from './Short/Footer'

export default class SignUpHir extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            <div>
                <h1>Hire SignUp</h1>
            </div>
            <Footer/>
            </div>
        )
    }
}
