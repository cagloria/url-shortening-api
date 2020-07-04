import React from "react";
import illustration from "../images/illustration-working.svg";

function Intro() {
    return (
        <section className="intro-section">
            <h1>More than just shorter links</h1>
            <p>
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
            </p>
            <button className="button">Get Started</button>
            <img
                src={illustration}
                alt="An illustration of a person sitting at a desk, using on a computer"
            />
        </section>
    );
}

export default Intro;
