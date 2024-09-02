import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Category } from '../types/category';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  
  const [categories, setCategories] = useState<Category[]>([]);
  const [islogin, setIslogin] = useState<string>(sessionStorage.getItem("logined") || "");
  const navigate = useNavigate();
  useEffect( () => {
    setIslogin(sessionStorage.getItem('logined') || "");
    const url = "http://localhost:8080/categories";
    axios.get(url).then((res) => {
      setCategories(res.data);
  });
}, []);

  const handleLogout = async () => {
    sessionStorage.removeItem("logined");
    navigate("/");
    alert("Logged out");
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{fontWeight: "bold", fontSize: "30px"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">FPT Shop</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <div className="btn-group">
      <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Category
      </button>
        <ul className="dropdown-menu">
          {
            categories.map(e => <li key={e.slug}><a className="dropdown-item" href={`/${e.slug}`}>{e.title}</a></li>)
          }
        </ul>
        </div>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    {
      !islogin && (<>
        <a className="navbar-brand" href="/login" style={{marginLeft: "100px"}}><button className="btn btn-outline-warning" type="submit">Login</button></a>
        <a className="navbar-brand" href="/register"><button className="btn btn-outline-primary" type="submit">Register</button></a>
      </>)
    }
    {
      islogin && <a style={{marginLeft: "20px"}} className="navbar-brand" href='/' onClick={handleLogout}><button className="btn btn-outline-danger" type="submit">Log out</button></a>
    }
  </div>
</nav>
    </>
  );
}

export default Navbar;
