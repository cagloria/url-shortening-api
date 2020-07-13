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
                    <h1 className="footer-nav__heading" id="featuresHeading">
                        Features
                    </h1>
                    <ul
                        className="footer-nav__ul"
                        aria-labelledby="featuresHeading"
                        role="menubar"
                    >
                        <li role="none">
                            <a
                                className="link-neutral-color"
                                href="index.html"
                                role="menuitem"
                            >
                                Link Shortening
                            </a>
                        </li>
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                Branded Links
                            </a>
                        </li>
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                Analytics
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-nav__category">
                    <h1 className="footer-nav__heading" id="resourcesHeading">
                        Resources
                    </h1>
                    <ul
                        className="footer-nav__ul"
                        role="menubar"
                        aria-labelledby="resourcesHeading"
                    >
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                Blog
                            </a>
                        </li>
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                Developers
                            </a>
                        </li>
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-nav__category">
                    <h1 className="footer-nav__heading" id="companyHeading">
                        Company
                    </h1>
                    <ul
                        className="footer-nav__ul"
                        role="menubar"
                        aria-labelledby="companyHeading"
                    >
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                About
                            </a>
                        </li>
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                Our Team
                            </a>
                        </li>
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                Careers
                            </a>
                        </li>
                        <li role="none">
                            <a href="index.html" role="menuitem">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <ul
                className="social-list"
                role="menubar"
                aria-label="Social media"
            >
                <li role="none">
                    <a href="index.html" role="menuitem" aria-label="Facebook">
                        <img src={iconFacebook} alt="" />
                    </a>
                </li>
                <li role="none">
                    <a href="index.html" role="menuitem" aria-label="Twitter">
                        <img src={iconTwitter} alt="" />
                    </a>
                </li>
                <li role="none">
                    <a href="index.html" role="menuitem" aria-label="Pinterest">
                        <img src={iconPinterest} alt="" />
                    </a>
                </li>
                <li role="none">
                    <a href="index.html" role="menuitem" aria-label="Instagram">
                        <img src={iconInstagram} alt="" />
                    </a>
                </li>
            </ul>

            <p>
                Challenge by{" "}
                <a href="https://www.frontendmentor.io?ref=challenge">
                    Frontend Mentor
                </a>
                . Coded by <a href="https://github.com/cagloria">C.A. Gloria</a>.
            </p>
        </footer>
    );
}

export default Footer;
