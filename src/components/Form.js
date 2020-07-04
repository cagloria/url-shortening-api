import React, { useState } from "react";
import $ from "jquery";

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
            <button onClick={copyToClipboard} className="button button--copy">
                Copy
            </button>
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

    function getShortenedURL() {
        $.post("https://rel.ink/api/links/", { url: input })
            .done(function (data) {
                onUrlSubmit(input, "https://rel.ink/" + data.hashid);
            })
            .fail(function (xhr, status, error) {
                console.log(xhr);
                setError("Error: " + xhr.status + ". " + xhr.responseText);
            });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (input === "") {
            setError("Please add a link");
        } else {
            getShortenedURL();
            setInput("");
            event.target.reset();
        }
    }

    return (
        <form className="url-form" onSubmit={handleSubmit}>
            <input
                type="url"
                name="input-field"
                id="input-field"
                className={
                    "input-field" +
                    (error.length > 0 ? " input-field--invalid" : "")
                }
                onChange={handleChange}
                placeholder="Shorten a link here..."
            />
            <p className="url-form__error-message">
                {error.length > 0 ? error : null}
            </p>
            <input
                type="submit"
                value="Shorten It!"
                className="button url-form__submit-btn"
            />
        </form>
    );
}

function Form() {
    const [newId, updateId] = useState(1);
    const [urlList, setUrlList] = useState([]);

    const listItems = urlList.map((url) => (
        <URLItem jsonObj={url} key={url.id} />
    ));

    function shortenUrl(inputUrl, shortenedURL) {
        setUrlList(
            urlList.concat({
                id: newId,
                original: inputUrl,
                shortened: shortenedURL,
            })
        );
        updateId(newId + 1);
    }
    return (
        <section className="form-section section-padding">
            <URLInput onUrlSubmit={shortenUrl} />
            <ul className="url-list">{listItems}</ul>
        </section>
    );
}

export default Form;