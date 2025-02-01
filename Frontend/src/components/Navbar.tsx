import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-600">About</Link></li>
        <li><Link to="/products" className="hover:text-gray-600">Products</Link></li>
        <li><Link to="/create" className="hover:text-gray-600">Create</Link></li>
        <li><Link to="/edit" className="hover:text-gray-600">Edit List</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;