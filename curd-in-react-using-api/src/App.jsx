import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Addnew from './Addnew';
import Home from './Home';
import Error from './Error';
import About from './About';
import Navbar from './Navbar';
import Edit from './Edit';
import View from './View';

const App=()=>{
    return (<>
    <Navbar />
   <Switch>
   <Route exact path="/" component={Home}  />
   <Route exact path="/about" component={About}  />
   <Route exact path="/addnew" component={Addnew}  />
   <Route exact path="/edit/:id" component={Edit}/>
   <Route exact path="/view/:id" component={View}/>
<Route component={ Error}/>
   </Switch>
    
    
    </>);



}

export default App;