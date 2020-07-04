import React from "react";
import logo from "../images/logo.svg";

function Header() {
    return (
        <header className="section-padding">
            <img src={logo} alt="Shortly logo" className="logo" />
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="index.html">Features</a>
                    </li>
                    <li>
                        <a href="index.html">Pricing</a>
                    </li>
                    <li>
                        <a href="index.html">Resources</a>
                    </li>
                </ul>
            </nav>

            <a href="index.html">Login</a>

            <button className="button">Sign Up</button>

            <button className="nav-button"></button>
        </header>
    );
}

export default Header;
