import React from "react";
import "../style/Header.css"
import logo from "../assets/logo-ast.png"

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="logo" className="header-logo" />
                <nav>
                    <ul>
                        <div className="header-nav-bar">
                            <li><a href="">ASBL</a></li>
                            <li><a href="">CONTACT</a></li>
                            <li><a href="">ADOPTABLES</a></li>
                            <li><a href="">GALERIE</a></li>
                            <li><a href="">NOUS AIDER</a></li> 
                            <li><a className="signaler" href="">SIGNALER</a></li>
                        </div> 
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;