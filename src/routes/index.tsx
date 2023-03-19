import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import React from 'react';
import Login from '../pages/Login';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
