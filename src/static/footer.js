import React from "react";
import logo from "../images/logo.svg";

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Shortly logo" />
            <p>Features</p>
            <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>

            <p>Resources</p>
            <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>

            <p>Company</p>
            <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
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
