import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CreatePage from './pages/CreatePage';
import EditDeletePage from './pages/EditDeletePage';
import Navbar from './components/Navbar';
import EditListPage from './pages/EditListPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit" element={<EditListPage />} />
        <Route path="/edit/:id" element={<EditDeletePage />} />
      </Routes>
    </Router>
  );
};

export default App;