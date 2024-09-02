import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/accounts/login', { username, password});
      if (response.status === 200)
      {
        sessionStorage.setItem("logined", JSON.stringify(response.data)); // On working, show up username and role
        navigate("/");
        alert("Logined");
      }
    } catch (err) {
      alert("Login fail")
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
          <h1 style={{textAlign: "center"}}>Login Page</h1>
        </div>
        <div className="col">
        </div>
      </div>
      <div className="row">
        <div className="col-3">
        <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <h3>Phone number</h3>
          <input type="text" onChange={e => {setUsername(e.target.value)}} style={{width: "300px"}} className="form-control"placeholder="Enter phone number"/>
        </div>
        <div className="mb-3">
          <h3>Password</h3>
          <input type="password" onChange={e => {setPassword(e.target.value)}} style={{width: "300px"}} className="form-control" placeholder="Enter password"/>
        </div>
        <button type="submit" className="btn btn-success">Login in</button>
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
export default Login;
