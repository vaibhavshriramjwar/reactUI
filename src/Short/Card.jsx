import React from 'react';
import { NavLink } from 'react-router-dom';
import './CardButton.css'


const Card =(props)=>{
  return(<> 
     
               <div className="col-md-4 col-10 mx-auto">
               <div className="card">
                  <img src={props.imgsrc} className="card-img-top rounded" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description1}</p>
                    <NavLink to={props.visit1} className="btn-get-started d-flex justify-content-center flex-column">{props.btnLabel}</NavLink>
                  </div>
                </div>
               </div>
             
          
  </>)
}

export default Card;

