import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(<>

<nav className="navbar navbar-expand-lg bg-dark navbar-dark pos fixed-top">
    <div className="container">
  <NavLink className="navbar-brand coli" to="/">Tech Point</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item  coli">
        <NavLink  exact activeClassName="active_class" className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item coli">
        <NavLink exact activeClassName="active_class" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item coli">
        <NavLink exact activeClassName="active_class" className="nav-link" to="/service">Service</NavLink>
      </li>
      <li className="nav-item coli">
        <NavLink exact activeClassName="active_class" className="nav-link" to="/contact">Contact</NavLink>
      </li>
     
    </ul>
   
  </div>
  </div>
</nav>
    
    
    </>);
}

export default Navbar;