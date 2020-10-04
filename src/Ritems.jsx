import React from 'react';
const Ritems =(props)=>
{
    const {label,image,ingredientLines}=props;
    return (<>
   
    
    <div className="card ">
        <img src={image} alt="okkk" className="img-fluid w-75 d-block mx-auto    rounded-circle"/>
        <div className="card-body">
    <h3>{label}</h3>


        </div>
        <ol className="list-group list-group-flush">
            {
                ingredientLines.map((item)=>{
                    return(<>
                    <li className="list-group-item">{item}</li>
                    
                    
                    
                    </>);
                })

            }

           
        </ol>
    </div>
   
    
    
    
    
    
    
    </>);

}

export default Ritems;