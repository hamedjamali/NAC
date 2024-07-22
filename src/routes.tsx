import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FibonacciPage from './pages/FibonacciPage';
import CollatzPage from './pages/CollatzPage';
import EditPage from './pages/EditPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fibonacci" element={<FibonacciPage />} />
      <Route path="/collatz" element={<CollatzPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
