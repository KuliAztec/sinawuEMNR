import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Impor file CSS

const Navbar: React.FC = () => {
    return(
        <nav className="navbar">
            <ul className="navList">
                <li className="navItem">
                    <Link to="/" className="navLink">Home</Link>
                </li>
                <li className="navItem">
                    <Link to="/about" className="navLink">About</Link>
                </li>
                <li className="navItem">
                    <Link to="/products" className="navLink">Products</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;