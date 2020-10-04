import React from 'react';
import web from './image/start.jpg';
// import { NavLink } from 'react-router-dom';
import Comman from './Comman';

const About=()=>
{
    return(<>
   <Comman 
   name="Grow your business With "
   imgsrc={web}
   visit="/service"
   
   />

    
    
    </>);
}
export default About;