import React from "react";
import logo from "../images/logo.svg";

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Shortly logo" />
            <p>Features</p>
            <ul>
                <li>
                    <a href="index.html">Link Shortening</a>
                </li>
                <li>
                    <a href="index.html">Branded Links</a>
                </li>
                <li>
                    <a href="index.html">Analytics</a>
                </li>
            </ul>

            <p>Resources</p>
            <ul>
                <li>
                    <a href="index.html">Blog</a>
                </li>
                <li>
                    <a href="index.html">Developers</a>
                </li>
                <li>
                    <a href="index.html">Support</a>
                </li>
            </ul>

            <p>Company</p>
            <ul>
                <li>
                    <a href="index.html">About</a>
                </li>
                <li>
                    <a href="index.html">Our Team</a>
                </li>
                <li>
                    <a href="index.html">Careers</a>
                </li>
                <li>
                    <a href="index.html">Contact</a>
                </li>
            </ul>

            <p>
                Challenge by{" "}
                <a href="https://www.frontendmentor.io?ref=challenge">
                    Frontend Mentor
                </a>
                . Coded by <a href="https://github.com/cagloria">cagloria</a>.
            </p>
        </footer>
    );
}

export default Footer;
