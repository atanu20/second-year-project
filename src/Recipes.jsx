import React from 'react';
import Ritems from './Ritems';

const Recipes=(props)=>
{
    const{recipes}=props;
    //  console.log(recipes);
    return(<>
    <div className="container">

    <div className="card-columns">
    
        

    {recipes.map((recipe)=>{
        // console.log(recipe.recipe.label);
        // const vv=parseInt(Math.random()*100);
        // console.log(vv)
       return(
           <>
            
        <Ritems  
        //  key={i}
        label={recipe.recipe.label}
       image={recipe.recipe.image}
       ingredientLines={recipe.recipe.ingredientLines}
        
        
        />
    
           </>

       );
            

        })}


   


</div> </div> 
<br/><br/> 
    </>);
};

export default Recipes;