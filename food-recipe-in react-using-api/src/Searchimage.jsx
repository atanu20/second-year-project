import React from 'react';

const Searchimage=(props)=>{
    const image=`https://source.unsplash.com/400x300/?${props.image}`;
    return(<>
    <div className="d-flex justify-content-center">

    <img src={image} alt="search image"/>
    </div>

    
    
    
    
    
    </>);



}

export default Searchimage;
