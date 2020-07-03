import React, { useState } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "./index.css";

function URLItem({ jsonObj }) {
    function copyToClipboard() {
        // Create temporary input field to copy text from
        let $text = $("<input>");
        $text.val(jsonObj.shortened).css("filter", "opacity(0)");
        $("body").append($text);

        // Select and copy text
        $text.select();
        document.execCommand("copy");
        $text.remove();
    }

    return (
        <li>
            <a href={jsonObj.original}>{jsonObj.original}</a> ={" "}
            <a href={jsonObj.shortened}>{jsonObj.shortened}</a>
            <button onClick={copyToClipboard}>Copy</button>
        </li>
    );
}

function URLInput({ onUrlSubmit }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
        setError("");
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (input === "") {
            setError("Please add a link");
        } else {
            onUrlSubmit(input);
            event.target.reset();
            setInput("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="url"
                name="input-field"
                id="input-field"
                onChange={handleChange}
            />
            <p>{error}</p>
            <input type="submit" value="Shorten It!" />
        </form>
    );
}

function App() {
    const [newId, updateId] = useState(1);
    const [urlList, setUrlList] = useState([]);

    const listItems = urlList.map((url) => (
        <URLItem jsonObj={url} key={url.id} />
    ));

    function shortenUrl(inputUrl) {
        fetch("https://rel.ink/api/links/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ url: inputUrl }),
        })
            .then((response) => response.json())
            .then((data) => {
                setUrlList(
                    urlList.concat({
                        id: newId,
                        original: inputUrl,
                        shortened: "https://rel.ink/" + data.hashid,
                    })
                );
            })
            .catch((error) => console.log(error));

        updateId(newId + 1);
    }

    return (
        <>
            <URLInput onUrlSubmit={shortenUrl} />
            <ul>{listItems}</ul>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
