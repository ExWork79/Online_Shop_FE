import React from 'react';
import Navbar from './components/Navbar';
import Categoryside from './components/Categoryside';
import EquipmentList from './components/EquipmentList';
import { Route, Routes } from 'react-router-dom';
import EquipmentListMaker from './components/EquipmentListMaker';
import EquipmentDetail from './components/EquipmentDetail';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:category" element={<EquipmentList />} />
        <Route path="/:category/:maker" element={<EquipmentListMaker />} />
        <Route path="/:category/:maker/:slug" element={<EquipmentDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
