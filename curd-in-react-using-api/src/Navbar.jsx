
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(<>

<nav className="navbar navbar-expand-lg bg-primary navbar-dark pos fixed-top">
    <div className="container">
  <NavLink className="navbar-brand coli text-white" to="/">Tech Point</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item  coli">
        <NavLink  exact activeClassName="active_class" className="nav-link text-white" to="/"><b>Home</b> </NavLink>
      </li>
      <li className="nav-item coli">
        <NavLink exact activeClassName="active_class" className="nav-link text-white" to="/about"><b>About</b></NavLink>
      </li>
     
      
     
    </ul>
    <NavLink className="btn btn-outline-light " to="/addnew" >Adduser</NavLink>
   
  </div>
  </div>
</nav>
    
    
    </>);
}

export default Navbar;