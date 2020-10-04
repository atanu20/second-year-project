import React from 'react';
import { useHistory } from 'react-router-dom';


const Error=()=>
{

    const hist=useHistory();
    return(<>
    <div className="not-found">
   <div className="container">
       <div className="row ">
           <div className="col-md-8 col-sm-10 col-10 mx-auto shadow bg-white rounded inner">
               <h1 className="text-error">4 0 4</h1>
               <h3>Opps!! Page Not found</h3>
               <br/>
               <button className="badge badge-primary" onClick={()=>hist.goBack()}>Go Back</button>


           </div>
       </div>
   </div>
   </div>
    
    </>);
}
export default Error;