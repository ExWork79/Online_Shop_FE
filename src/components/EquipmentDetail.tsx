import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Equipment } from '../types/equipment';
import Navbar from './Navbar';
const EquipmentDetail = () => {

  const {category, maker, slug} = useParams();
  const [equipment, setEquipment] = useState<Equipment>();
  useEffect(() => {
    const url = `http://localhost:8080/api/${category}/${slug}`;
    axios.get(url).then((res) => {
      setEquipment(res.data);
  });
  }, [category, maker, slug]);

  return (
    <>
    <Navbar></Navbar>
    <div className="container" >
      <div className="row">
        <div className="col-8">
          <img src="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-black-1-1.jpg" alt="None" />
        </div>
        <div className="col-4">
          <h1 style={{border: "5px solid black", textAlign: "center", color: "red", marginTop: "25px"}}>Details</h1>
          <h2>{equipment && equipment.name}</h2>
          <h3>Lowest price: {equipment && equipment.price} VND</h3>
          <h3>Color: </h3>{equipment && equipment.description.color.split(', ').map(e => <li>{e.toLocaleUpperCase()}</li>)}
          <h3>Display: {equipment && equipment.description.display}</h3>
          <h3>Storage: </h3>{equipment && equipment.description.storage.split(', ').map(e => <li>{e}</li>)}
          <button type="button" className="btn btn-danger btn-lg">Buy now</button>
          <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
        </div>
      </div>
    </div>
    </>
  );
};
export default EquipmentDetail;
