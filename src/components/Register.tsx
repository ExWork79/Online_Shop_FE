import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordagain, setPasswordAgain] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    if (passwordagain !== password)
    {
      return alert("Password does not match");
    }
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/accounts/register', { username, password, role_id: "66c5e0e188da26d9673aa6fc" });
      if (response.status == 200)
      {
        alert("Register successfully");
        navigate('/login');
      }
      else
      {
        alert("Failed");
      }
    } catch (err) {
      alert("Register fail")
    }
  }
  return ( 
    <>
    <Navbar></Navbar>
    <div className="container" style={{border: "5px solid orange", borderRadius: "10px", margin: "80px auto", paddingBottom: "20px"}}>
      <div className='row text-align-center'>
        <div className="col">
        </div>
        <div className="col">
          <h1 style={{textAlign: "center"}}>Register Page</h1>
        </div>
        <div className="col">
        </div>
      </div>
      <div className="row">
        <div className="col-3">
        <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <h3>Phone number</h3>
          
          <input type="text" onChange={(e) => { setUsername(e.target.value) }} style={{width: "300px"}} className="form-control"  placeholder="Enter phone number"/>
        </div>
        <div className="mb-3">
          <h3>Password</h3>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} style={{width: "300px"}} className="form-control"  placeholder="Enter password"/>
        </div>
        <div className="mb-3">
          <h3>Password again</h3>
          <input type="password" onChange={(e) => { setPasswordAgain(e.target.value) }} style={{width: "300px"}} className="form-control" placeholder="Enter password again"/>
        </div>
        <button type="submit" className="btn btn-success">Register</button>
        </form>
        </div>
        <div className="col-9">
          <img style={{width: "100%", height: "100%", borderRadius: "10px"}} src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/146025/Originals/NF_1200x628.png" alt="None" />
        </div>
      </div>
    </div>
    </>
  );
};
export default Register;
