import React, { useState } from "react";
import logo from "../images/logo.svg";
import $ from "jquery";

function Header() {
    function openNav() {
        $("nav").toggleClass("nav-open");
        $(".nav-button").toggleClass("nav-button--nav-open");
    }

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
                    <li className="nav-login">
                        <a href="index.html">Login</a>
                    </li>
                </ul>

                <button className="button">Sign Up</button>
            </nav>

            <button className="nav-button" onClick={openNav}></button>
        </header>
    );
}

export default Header;
