import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';


const App=()=>
{
    return(<>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home}   />
        <Route exact path="/about" component={About}   />
        <Route exact path="/service" component={Service}   />
        <Route exact path="/contact" component={Contact}   />
        <Route component={Error}/>



    </Switch>

    
    
    </>);

}

export default App;