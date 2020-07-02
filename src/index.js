import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Input() {
    const [urlInput, setUrlInput] = useState("");

    function handleChange(event) {
        setUrlInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch("https://rel.ink/api/links/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ url: urlInput }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log("https://rel.ink/" + data.hashid); // Shortened link
            })
            .catch((error) => console.log(error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="url"
                name="input-field"
                id="input-field"
                onChange={handleChange}
            />
            <input type="submit" value="Shorten It!" />
        </form>
    );
}

ReactDOM.render(<Input />, document.getElementById("root"));
