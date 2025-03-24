import React from "react";
import "../style/Header.css"


const Header = () => {
    return (
        <header>
            <div>
                <h1>Refuge</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="">Acceuil</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">A propos</a></li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;