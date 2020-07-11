import React, { useState } from "react";
import logo from "../images/logo.svg";
import $ from "jquery";

function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [inDesktopLayout, setInDesktopLayout] = useState(
        $(window).width() > 768 ? true : false
    );
    const linksTabIndex = inDesktopLayout || mobileNavOpen ? "0" : "-1";

    $("main, footer").click(function () {
        if (mobileNavOpen) {
            setMobileNavOpen(false);
        }
    });

    $(window).resize(function () {
        const $win = $(window);
        if ($win.width() > 768 && mobileNavOpen) {
            setMobileNavOpen(false);
        }
        setInDesktopLayout($win.width() > 768);
    });

    $(window).scroll(function () {
        if (mobileNavOpen) {
            setMobileNavOpen(false);
        }
    });

    function toggleNav() {
        setMobileNavOpen(!mobileNavOpen);
    }

    return (
        <header className="section-padding">
            <img src={logo} alt="Shortly logo" className="logo" />

            <button
                className={
                    "nav-button" +
                    (mobileNavOpen ? " nav-button--mobile-nav-open" : "")
                }
                onClick={toggleNav}
            ></button>

            <nav className={mobileNavOpen ? "mobile-nav-open" : ""}>
                <ul className="nav-list">
                    <li className="nav-list__link-li">
                        <a href="index.html" tabIndex={linksTabIndex}>
                            Features
                        </a>
                    </li>
                    <li className="nav-list__link-li">
                        <a href="index.html" tabIndex={linksTabIndex}>
                            Pricing
                        </a>
                    </li>
                    <li className="nav-list__link-li">
                        <a href="index.html" tabIndex={linksTabIndex}>
                            Resources
                        </a>
                    </li>
                    <li className="nav-list__login-li nav-list__link-li">
                        <a href="index.html" tabIndex={linksTabIndex}>
                            Login
                        </a>
                    </li>
                    <li className="nav-list__sign-up-li">
                        <button className="button" tabIndex={linksTabIndex}>
                            Sign Up
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
