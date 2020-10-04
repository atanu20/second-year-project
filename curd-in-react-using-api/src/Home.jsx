import React, { useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import axios from 'axios';

const Home=()=>{

    const [users,setUsers]=useState([]);
useEffect(()=>{
    console.log("nice");
    loadUsers();

},[])

const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();


}



const  loadUsers=async ()=>{

    const res=await axios.get("http://localhost:3002/users");
    console.log(res.data);
    setUsers(res.data.reverse());
}

    return (<>
    <div className="container ">
      <div className="row">
          
          <div className="col-lg-10 col-md-11 col-11 mx-auto my-5">
          <br/><br/><br/><br/>
          <div className="shadow bg-white rounded p-3 " >
          <div className="table-responsive ">
    <table className="table table-bordered">
      <thead>
        <tr>
        <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Operation</th>
          
          
          
        </tr>
      </thead>
      <tbody >
       
       

          {
              users.map((user,ind)=>{
                return(<>
                
                <tr>
                   
                <td>{ind+1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <NavLink className="btn btn-success mx-2"  to={`/view/${user.id}`}>View</NavLink>
          <NavLink className="btn btn-outline-primary mx-2 " to={`/edit/${user.id}`} >Edit</NavLink>
          {/* <Link className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)} >Delete</Link> */}



          <Link className="btn btn-danger " data-toggle="modal" data-target="#exampleModa5l" >Delete</Link>




          <div class="modal fade" id="exampleModa5l" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header bg-warning">
        <h5 class="modal-title  text-white" id="exampleModalLabel">Delete " {user.name} " Modal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4 class="text-danger">Are u sure to delete it??</h4>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">Close</button>
        <form>
        <Link className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)} >Delete</Link>
        </form>
       
      </div>
    </div>
  </div>
</div>



                </td>





                </tr>
                </>)


              })
          }
          
       
      </tbody>
    </table>
  </div>


          </div>


          </div>
          </div>
    </div>
 
    </>);



}

export default Home;