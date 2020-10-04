import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipes from './Recipes';

function App()
{
    const[search,setSearch]=useState("");
    const[recipes,setRecipes]=useState([]);

    const APP_ID="5fa53623";
    const APP_KEY= "10be00b6612d598188f0785413b839dc";
    
    useEffect(()=>{
        getvalue();

    },[]);
    
        async function getvalue()
        {
           try{
            const gett=await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    
            // console.log(gett.data.hits[0].recipe.label);
            // console.log(gett.data.hits);
            setRecipes(gett.data.hits);
           }
           catch(error)
           {
               console.log(error);
           }
    
        }



const Submits=()=>{
    getvalue()
}

const inputEvent=(event)=>
{
    // console.log(event.target.value);
    setSearch(event.target.value)

}


    return(
        <>
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1>Food ZONE </h1>
    <br/><br/>
    <div className="form-inline my-2 my-lg-0 d-flex justify-content-center">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" 
      name='food'
      value={search}
      onChange={inputEvent}


      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={Submits}>Search</button>
    </div>
  </div>
</div>


<Recipes 
       key={Math.random()*10}
       recipes={recipes}
       
       
       />





</>
    );

};
export default App;