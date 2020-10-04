import React, { useState } from 'react';


const Contact=()=>
{ 
    
    const [con,setCon]=useState({
        name:"",
        email:"",
        password:""

    });




    const Submits=(event)=>
    {
         event.preventDefault();
        console.log("you click")
        alert(` Hii ${con.name} ,Your email is ${con.email} \n  you are most welcome`)
        
    }
    


const inputEvent=(event)=>
{
    const{ name,value}=event.target;
    // console.log(name)
    // console.log(value)
    setCon((prevalue)=>{
        return{
            ...prevalue,
            [name]:value,
        }
    })

}



    return(<>
    <section  className="d-flex align-items-center box3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-4  col-10 mr-auto shadow p-3 my-5 bg-white rounded ">
    {/* <h2>{con.name}</h2> */}
                        <form action="" onSubmit={Submits}>
<h3 className="text-center">Contact us</h3>
                                <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter name" id="nam" required autoComplete="off" 
                            
                            name="name"
                            value={con.name}
                            onChange={inputEvent}
                            />
                        </div>
                       
                        <div className="form-group">
                            <label>Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" required autoComplete="off" 
                            
                            name="email"
                            value={con.email}
                            onChange={inputEvent}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" required
                            name="password"
                            value={con.password}

                             onChange={inputEvent}
                            
                            />
                        </div>
  
 
                            <button type="submit" className="btn btn-primary" >Submit</button>
                            </form>

                        </div>
                        <div className="col-md-4  col-10 mx-auto my-5 con-color">

                        <h4>If you have any query contact with </h4>
                        <b>Tech point</b>
                        <p>Have a nice day</p>
                            </div>

                    </div>


                </div>
            </div>

        </div>
    </section>
    
    
    </>);
}
export default Contact;