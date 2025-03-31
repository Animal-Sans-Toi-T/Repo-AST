import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { NavLink } from 'react-router';
import "../style/Header.css"
import logo from "../assets/logo-ast.png"
import banderolle from "../assets/banderolle.png"

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="logo" className="header-logo" />
                <nav>
                    <ul>
                        <div className="header-nav-bar">
                            <li><NavLink to="/presentation" activeClassName="active">ASBL</NavLink></li>
                            <li><NavLink to="/contacts" activeClassName="active">CONTACT</NavLink></li>
                            <li><NavLink to="/adoptables" activeClassName="active">ADOPTABLES</NavLink></li>
                            <li><NavLink to="/galerie" activeClassName="active">GALERIE</NavLink></li>
                            {/* TO DO after the sub-menu is created */}
                            <li><NavLink to="/" activeClassName="active">NOUS AIDER</NavLink></li>
                            {/* it's a button... do we call it a button instead of a li? Or a li button? */}
                            <li><a className="signaler" href="">SIGNALER</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;