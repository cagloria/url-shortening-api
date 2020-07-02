import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function URLItem({ json }) {
    return (
        <li>
            <a href={json.original}>{json.original}</a> ={" "}
            <a href={json.shortened}>{json.shortened}</a>
        </li>
    );
}

function URLInput({ onUrlSubmit }) {
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(event) {
        onUrlSubmit(input);
        event.target.reset();
        setInput("");
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="url"
                name="input-field"
                id="input-field"
                onChange={handleChange}
                required
            />
            <input type="submit" value="Shorten It!" />
        </form>
    );
}

function App() {
    const [newId, updateId] = useState(1);
    const [urlList, setUrlList] = useState([]);

    const listItems = urlList.map((url) => <URLItem json={url} key={url.id} />);

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
