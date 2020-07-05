import React, { useState } from "react";
import logo from "../images/logo.svg";
import $ from "jquery";

function Header() {
    const [navIsOpen, setNavIsOpen] = useState(false);

    $("main, footer").click(function () {
        if (navIsOpen) {
            setNavIsOpen(false);
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 768 && navIsOpen) {
            setNavIsOpen(false);
        }
    });

    function toggleNav() {
        setNavIsOpen(!navIsOpen);
    }

    return (
        <header className="section-padding">
            <img src={logo} alt="Shortly logo" className="logo" />
            <nav className={navIsOpen ? "nav-open" : ""}>
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
                    <li className="nav-login-li">
                        <a href="index.html">Login</a>
                    </li>
                    <li className="nav-sign-up-li">
                        <button className="button">Sign Up</button>
                    </li>
                </ul>
            </nav>

            <button
                className={
                    "nav-button" + (navIsOpen ? " nav-button--nav-open" : "")
                }
                onClick={toggleNav}
            ></button>
        </header>
    );
}

export default Header;
