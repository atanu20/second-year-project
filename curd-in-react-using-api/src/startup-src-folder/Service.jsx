import React from 'react';
import web from './image/start-new.png';
// import { NavLink } from 'react-router-dom';
import Comman from './Comman';

const Service=()=>
{
    return(<>
   <Comman 
   name="Welcome to your services part "
   imgsrc={web}
   visit="/contact"
   
   />

    
    
    </>);
}
export default Service;