import React, { useState } from 'react';
import  Searchimage from './Searchimage';

const Image=()=>{

const [image,setImage]=useState("");



const inputEvent=(event)=>{
    setImage(event.target.value);
}

    return(<>
    <div className="d-flex justify-content-center my-5">
    <input type="text" 
    
    placeholder="Enter search image..."
    name="image"
    value={image}
    onChange={inputEvent}

    
    />
    
    </div>
   {image ===""?null: < Searchimage image={image} />}
   
    
    
    
    </>);


}

export default Image;