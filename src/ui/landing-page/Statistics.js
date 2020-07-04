import React from "react";
import iconBrand from "../../images/icon-brand-recognition.svg";
import iconRecords from "../../images/icon-detailed-records.svg";
import iconCustom from "../../images/icon-fully-customizable.svg";

function Statistics() {
    return (
        <section className="stats-section section-padding">
            <h2>Advanced Statistics</h2>
            <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>

            <div className="stats-container">
                <div className="stats">
                    <img src={iconBrand} alt="Icon of a graph" />
                    <h3>Brand Recognition</h3>
                    <p>
                        Boost your brand recognition with each click. Generic
                        links don’t mean a thing. Branded links help instil
                        confidence in your content.
                    </p>
                </div>

                <div className="stats">
                    <img src={iconRecords} alt="Icon of a speedometer" />
                    <h3>Detailed Records</h3>
                    <p>
                        Gain insights into who is clicking your links. Knowing
                        when and where people engage with your content helps
                        inform better decisions.
                    </p>
                </div>

                <div className="stats">
                    <img
                        src={iconCustom}
                        alt="Icon of a marker, a pen, and a paintbrush"
                    />
                    <h3>Fully Customizable</h3>
                    <p>
                        Improve brand awareness and content discoverability
                        through customizable links, supercharging audience
                        engagement.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Statistics;
