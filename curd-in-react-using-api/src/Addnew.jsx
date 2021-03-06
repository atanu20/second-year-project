import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Addnew=()=>{

let his=useHistory();


const [user,setUser]=useState({
    name:"",
    username:"",
    email:"",
    phone:""


})

const Submits=async (event)=>
    {
         event.preventDefault();
        console.log("you click")
        alert(` Hii ${user.name} ,Your email is ${user.email} \n  you are most welcome`);
        await axios.post("http://localhost:3002/users",user);
        his.push("/");

        
    }



const inputEvent=(event)=>
{   
    
    const{ name,value}=event.target;
    // console.log(name)
     console.log(value)
    setUser((prevalue)=>{
        return{
            ...prevalue,
            [name]:value,
        }
    })


};

    return (<>
    <div className="container">
      <div className="row">
          
          <div className="col-lg-8 col-md-10 col-10 mx-auto my-5">
          <br/><br/><br/><br/>
          <div className="shadow bg-white rounded p-3">
              <h2 className="text-center">Add User</h2>
          <form action="" onSubmit={Submits}>
  <div class="form-group">
    <label >Name:</label>
    <input type="text" className="form-control" placeholder="Enter name" id="name" required  autoComplete="off"
    name="name"
    value={user.name}
    onChange={inputEvent}

    />
  </div>
  <div class="form-group">
    <label >Username:</label>
    <input type="text" className="form-control" placeholder="Enter username" id="user" required  autoComplete="off"
    name="username"
    value={user.username}
    onChange={inputEvent}
    
    />
  </div>
  <div class="form-group">
    <label >Email Address:</label>
    <input type="email" className="form-control" placeholder="Enter email" id="email" required autoComplete="off"
    name="email"
    value={user.email}
    onChange={inputEvent}
    />
  </div>
  <div class="form-group">
    <label >Phone number:</label>
    <input type="text" className="form-control" placeholder="Enter number" id="phone" required autoComplete="off"
    name="phone"
    value={user.phone}
    onChange={inputEvent}
    />
  </div>
  
  
  <button type="submit" className="btn btn-primary btn-block">Submit</button>
</form>
          </div>
         

          </div>
      </div>
  </div>
    
    
    </>);



}

export default Addnew;