import React from "react";
import logoWhite from "../images/logo-white.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";

function Footer() {
    return (
        <footer className="section-padding">
            <img src={logoWhite} className="logo" alt="Shortly logo" />

            <div className="footer-nav">
                <div className="footer-nav__category">
                    <h1 className="footer-nav__heading">Features</h1>
                    <ul className="footer-nav__ul">
                        <li>
                            <a className="link-neutral-color" href="index.html">
                                Link Shortening
                            </a>
                        </li>
                        <li>
                            <a href="index.html">Branded Links</a>
                        </li>
                        <li>
                            <a href="index.html">Analytics</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-nav__category">
                    <h1 className="footer-nav__heading">Resources</h1>
                    <ul className="footer-nav__ul">
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
                </div>

                <div className="footer-nav__category">
                    <h1 className="footer-nav__heading">Company</h1>
                    <ul className="footer-nav__ul">
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
                </div>
            </div>

            <ul className="social-list">
                <li>
                    <a href="index.html">
                        <img src={iconFacebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="index.html">
                        <img src={iconTwitter} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="index.html">
                        <img src={iconPinterest} alt="Pinterest" />
                    </a>
                </li>
                <li>
                    <a href="index.html">
                        <img src={iconInstagram} alt="Instagram" />
                    </a>
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
