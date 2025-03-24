import React from "react";
import "../style/Header.css"


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="">ASBL</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li><a href="">ADOPTABLES</a></li>
                    <li><a href="">GALERIE</a></li>
                    <li><a href="">NOUS AIDER</a></li>  
                </ul>
                <button>SIGNALER</button>
            </nav>
            <div>
                <h1>Refuge</h1>
            </div>
        </header>
    );
};


export default Header;