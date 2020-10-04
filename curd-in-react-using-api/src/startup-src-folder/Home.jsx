import React from 'react';
import { NavLink } from 'react-router-dom';
import web from './image/two.jpg';


const Home=()=>
{
   
    return(<>
     
    <div className="box" >
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-8 box2 ml-2 shadow p-3 mb-5 bg-white rounded text-center ">
           <h2>Welcome to Tech Point</h2>
           <h4>i am <span className="text-danger">Atanu jana</span></h4>
           <p>we are best temp in Tech point</p>
           
            </div>

        </div>

       
    </div>
      
    </div>
    <section className="container-fluid second bgimg" >
        <br/><br/>
        <div className="container">
        <div className="row">
            <br/><br/>
        <div className="col-lg-4 col-md-4 col-8 ml-auto mb-3 my-5">
          <h2>Grow your business with</h2>
          <b>Tech Point</b><br/>

          <h4>Do you want to know something?? </h4>
          <NavLink to="/about" className="btn btn-warning">click me</NavLink>

            </div>
           
            
            </div>
        </div>

    </section>
    
    
    </>);
}
export default Home;