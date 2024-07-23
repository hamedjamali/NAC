import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FibonacciPage from './pages/FibonacciPage';
import CollatzPage from './pages/CollatzPage';
import EditPage from './pages/EditPage';
import DashBoard from './pages/Dashboard';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route  path="/" element={<DashBoard />}>
      <Route path="/home" element={<HomePage />} />
      <Route path="/fibonacci" element={<FibonacciPage />} />
      <Route path="/collatz" element={<CollatzPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
