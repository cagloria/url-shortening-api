import React, { useState } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Header from "./ui/Header.js";
import Intro from "./ui/landing-page/Intro.js";
import LinkForm from "./components/LinkForm.js";
import Statistics from "./ui/landing-page/Statistics.js";
import Final from "./ui/landing-page/Final.js";
import Footer from "./ui/Footer.js";
import "./styles/site.css";
import "./styles/landing.css";

function LandingPage() {
    const [focusedTimeout, setFocusedTimeout] = useState();

    function showSkipLink() {
        $("#skip-link").addClass("skip-link--focused");
        clearTimeout(focusedTimeout);
    }

    function removeSkipLink() {
        setFocusedTimeout(
            setTimeout(() => {
                $("#skip-link").removeClass("skip-link--focused");
            }, 2000)
        );
    }

    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
                id="skip-link"
                onFocus={showSkipLink}
                onBlur={removeSkipLink}
            >
                Skip to main content
            </a>
            <Header />
            <main>
                <Intro />
                <LinkForm />
                <Statistics />
                <Final />
            </main>
            <Footer />
        </>
    );
}

ReactDOM.render(<LandingPage />, document.getElementById("root"));
