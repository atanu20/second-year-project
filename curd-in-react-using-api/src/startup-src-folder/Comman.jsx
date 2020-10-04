import React from 'react';
// import web from './image/start.jpg';
import { NavLink } from 'react-router-dom';


const Comman=(props)=>{

    return (<>

<section id="header" className="d-flex align-items-center">
       <div className="container-fluid">
           <div className="row">
               <div className="col-10 mx-auto">
                   <div className="row">
                   <div className="col-lg-6 col-md-6 order-2 order-lg-1  d-flex justify-content-center flex-column shadow p-3 my-5 bg-white rounded">
                   <h1>
                      {props.name}
                       <b className="text-primary"> Tech Point</b>

                   </h1>
                   <p>we are the team of talented devloper</p>
                   <NavLink to={props.visit} className="btn btn-info mr-auto">click me</NavLink>

                

               </div>
               <div className=" col-lg-6 col-md-6 order-1 order-lg-2">
                   <img src={props.imgsrc} alt="nice" className="img-fluid animate"/>

               </div>

                   </div>


               </div>
               
           </div>
       </div>
   </section>

    
    
    
    
    </>);
}
export default Comman;