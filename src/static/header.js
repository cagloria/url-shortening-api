import React from "react";
import logo from "../images/logo.svg";

function Header() {
    return (
        <header>
            <img src={logo} alt="Shortly logo" />
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

            <button>Sign Up</button>
        </header>
    );
}

export default Header;
