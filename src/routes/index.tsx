import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import React from 'react';
import Login from '../pages/Login';
import Users from '../pages/Dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Users />} />
    </Routes>
  );
};
