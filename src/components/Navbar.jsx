import React from "react";
import {NavLink} from "react-router-dom";

//Styles
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-home">
                    <NavLink to="/" className="nav-link">LearnEnglishWithEase</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};