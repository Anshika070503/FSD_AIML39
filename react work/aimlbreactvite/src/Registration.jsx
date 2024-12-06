import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Registration(regData){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[name,setName]=useState();
    
function getData(){
//alert("Hello inside getData");
alert("Hi" +name)

const data ={
    name,password,email
}
regData(data);

}

  return (
    // <div>
    //   <form>
    //     <label> Enter name:</label><input type="text" onChange={(e)=>setName(e.target.value)} />
    //     <button onclick={getData}>Register</button>
    //   </form>
    //   {name}
    // </div>
    <form>
        <div class="form-group">
    <label For="exampleInputName">Name</label>
    <input onChange={(e) =>setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label For="exampleInputEmail1">Email address</label>
    <input onChange={(e) =>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e) =>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
</form>
  )
}



export default Registration
