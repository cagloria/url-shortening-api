import React, { useState } from "react";
import $ from "jquery";

function URLItem({ jsonObj, onItemCopy, isCopied }) {
    /**
     * Copies the shortened URL of this item to the user's clipboard. Lifts the
     * item's id to Form to show that this item was the last one copied.
     */
    function copyToClipboard() {
        // Lift the item's id to Form
        onItemCopy(jsonObj.id);

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
            <p className="url-list__original">{jsonObj.original}</p>
            <p className="url-list__shortened">{jsonObj.shortened}</p>
            <button
                onClick={copyToClipboard}
                className={"button" + (isCopied ? " button--copied" : "")}
            >
                {isCopied ? "Copied!" : "Copy"}
            </button>
        </li>
    );
}

function URLInput({ onUrlSubmit }) {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    /**
     * Handles the change of the URL input field. inputValue is changed to the
     * input field's value, and any change resets errorMessage.
     * @param {Object} event    URL input field
     */
    function handleChange(event) {
        setInputValue(event.target.value);
        setErrorMessage("");
    }

    /**
     * Requests a shortened URL from the API, using the value of the URL input
     * field. onUrlSubmit lifts its arguments to Form's shortenUrl() function.
     * If there is an error, the error message will display it.
     */
    function getShortenedURL() {
        $.post("https://rel.ink/api/links/", { url: inputValue })
            .done(function (data) {
                onUrlSubmit(inputValue, "https://rel.ink/" + data.hashid);
            })
            .fail(function (xhr, status, error) {
                console.log(xhr);
                setErrorMessage(
                    "Error: " + xhr.status + ". " + xhr.responseText
                );
            });
    }

    /**
     * Handles the form submission. Checks if the input field is empty.
     * @param {Object} event    URL input field
     */
    function handleSubmit(event) {
        event.preventDefault();
        if (inputValue === "") {
            setErrorMessage("Please add a link");
        } else {
            getShortenedURL();
            setInputValue("");
            event.target.reset();
        }
    }

    return (
        <form className="url-form" onSubmit={handleSubmit}>
            <input
                type="url"
                name="input-field"
                id="input-field"
                aria-label="Shorten a link"
                className={
                    "input-field" +
                    (errorMessage.length > 0 ? " input-field--invalid" : "")
                }
                onChange={handleChange}
                placeholder="Shorten a link here..."
            />
            <p className="url-form__error-message">
                {errorMessage.length > 0 ? errorMessage : null}
            </p>
            <input type="submit" value="Shorten it!" className="button" />
        </form>
    );
}

function Form() {
    const [newId, updateId] = useState(1);
    const [urlList, setUrlList] = useState([]);
    const [lastCopiedId, setLastCopiedId] = useState(0);

    /**
     * Sets lastCopiedId to the ID of the last copied item, lifted from URLItem.
     * @param {Number} id   ID of the last copied item
     */
    function handleCopy(id) {
        setLastCopiedId(id);
    }

    /**
     * Creates a JSON object of an id, the original URL, and the shortened URL,
     * and pushes it into urlList.
     * @param {String} inputUrl     User input URL
     * @param {String} shortenedURL Shortened URL
     */
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
            <div className="form-section-content">
                <URLInput onUrlSubmit={shortenUrl} />
                <ul className="url-list">
                    {urlList.map((urlObj) => (
                        <URLItem
                            jsonObj={urlObj}
                            key={urlObj.id}
                            onItemCopy={handleCopy}
                            isCopied={lastCopiedId === urlObj.id}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Form;
