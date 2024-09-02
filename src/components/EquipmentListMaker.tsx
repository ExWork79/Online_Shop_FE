import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Equipment } from '../types/equipment';
import { Maker } from '../types/maker';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
function EquipmentListMaker() {

  let {category, maker}= useParams();
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [cat, setCat] = useState("");
  const [mak, setMak] = useState("");
  const [makers, setMakers] = useState<Maker[]>([]);
  const url = `http://localhost:8080/api/${category}/${maker}`;
  const url2 = `http://localhost:8080/categories/${category}`;
  const url3 = `http://localhost:8080/makers/`;
  const url4 = `http://localhost:8080/makers/${maker}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setEquipments(res.data);
  });
    axios.get(url2).then((res) => {
      setCat(res.data.title);
});
    axios.get(url3).then((res) => {
      setMakers(res.data);
    });
    axios.get(url4).then((res) => {
      setMak(res.data.title);
    });
}, [category, maker]);

  return (
    <>
      <Navbar></Navbar>
      <h1 style={{textAlign: "center"}}>{cat} - {mak}</h1>
      <ul className='nav nav-underline justify-content-center'>
        {
          makers && makers.map( e => <li className='nav-item'><a href={`/${category}/${e.slug}`} className="nav-link fw-bolder">{e.title}</a></li>)
        }
      </ul>
      <hr></hr>
      <ul>
        {equipments && equipments.map(e => (
          <div className="card" style={{width: '18rem'}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="fw-bolder">{e.name}</h6>
            <p className="fw-bold">{e.price} VND</p>
            <p className="fw-bold">{e.description.storage}</p>
            <a href={`/${e.category}/${e.maker}/${e.slug}`} className="btn btn-primary">Details</a>
          </div>
        </div>
        ))}
      </ul>
    </>
  );
}

export default EquipmentListMaker;
