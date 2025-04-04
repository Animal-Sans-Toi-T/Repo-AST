import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { NavLink } from 'react-router';
import "../style/Header.css"
import logo from "../assets/logo-ast.png"
import banderolle from "../assets/banderolle.png"

import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="header-container">
                <NavLink to="/"><img src={logo} alt="logo" className="header-logo" /></NavLink>
                
                {/* Hamburger icon small screen */}
                <div className="hamburger-wrapper">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size={30} />
                </div>

                {/* Nav menu */}
                <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
                    <ul className="header-nav-bar">
                        <li><NavLink to="/presentation" activeClassName="active">ASBL</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">CONTACT</NavLink></li>
                        <li><NavLink to="/adoptables" activeClassName="active">ADOPTABLES</NavLink></li>
                        <li><NavLink to="/galerie" activeClassName="active">GALERIE</NavLink></li>
                        {/* TO DO after the sub-menu is created */}
                        <li><NavLink to="/" activeClassName="active">NOUS AIDER</NavLink></li>
                        {/* it's a button... do we call it a button instead of a li? Or a li button? */}
                        <li><a className="signaler" href="">SIGNALER</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;