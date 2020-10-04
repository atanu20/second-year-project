import React from 'react';
import { useHistory } from 'react-router-dom';


const Error=()=>
{

    const hist=useHistory();
    return(<>
    <div className="not-found">
   <div className="container-fluid error">
       <div className="row w-75">
           <div className="col-md-12 col-10 mx-auto shadow bg-white rounded error-page">
               <h1 className="text-error">4 0 4</h1>
               <h3 className="text-error">Opps!! Page Not found</h3>
               <br/>
               <button className="get-btn" onClick={()=>hist.goBack()}>Go Back</button>


           </div>
       </div>
   </div>
   </div>
    
    </>);
}
export default Error;