import React from 'react';
import { Category } from '../types/category';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categoryside = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect( () => {
    const url = "http://localhost:8080/categories";
    axios.get(url).then((res) => {
      setCategories(res.data);
  });
}, []);

  return (
    <div>
      <h1>Category</h1>
      <ul>
        {categories && categories.map(cat => (
          <li key={cat._id}>
            <Link to={`/${cat.slug}`}>{cat.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categoryside;
