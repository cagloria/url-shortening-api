import React from "react";
import ReactDOM from "react-dom";
import Header from "./ui/Header.js";
import Intro from "./ui/landing-page/Intro.js";
import LinkForm from "./components/LinkForm.js";
import Statistics from "./ui/landing-page/Statistics.js";
import Final from "./ui/landing-page/Final.js";
import Footer from "./ui/Footer.js";
import "./styles/site.css";
import "./styles/landing.css";

function LandingPage() {
    return (
        <>
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
