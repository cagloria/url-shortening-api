import React, { useState, useEffect } from "react";
import $ from "jquery";

function LinkItem({ itemObj, onLinkCopy, isCopied }) {
    /**
     * Copies the shortened URL of this item to the user's clipboard. Lifts the
     * item's id to LinkForm to show that this item was the last one copied.
     */
    function copyToClipboard() {
        // Lift the item's id to LinkForm
        onLinkCopy(itemObj.id);

        // Create temporary input field to copy text from
        let $text = $("<input>");
        $text.val(itemObj.shortened).css("filter", "opacity(0)");
        $("body").append($text);

        // Select and copy text
        $text.select();
        document.execCommand("copy");
        $text.remove();
    }

    return (
        <li>
            <p className="link-list__original">{itemObj.original}</p>
            <p className="link-list__shortened">{itemObj.shortened}</p>
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
    const [message, setMessage] = useState("");
    const [errorOcurred, setErrorOcurred] = useState(false);

    /**
     * Handles the change of the URL input field. inputValue is changed to the
     * input field's value, and any change resets errorMessage.
     * @param {Object} event    URL input field
     */
    function handleChange(event) {
        setInputValue(event.target.value);
        setMessage("");
        setErrorOcurred(false);
    }

    /**
     * Requests a shortened URL from the API, using the value of the URL input
     * field. onUrlSubmit lifts its arguments to LinkForm's shortenUrl()
     * function. If there is an error, the error message will display it.
     */
    function getShortenedURL() {
        setMessage("Processing request...");
        $.post("https://rel.ink/api/links/", { url: inputValue })
            .done(function (data) {
                onUrlSubmit(inputValue, "https://rel.ink/" + data.hashid);
                setMessage("");
                setErrorOcurred(false);
            })
            .fail(function (xhr, status, error) {
                console.log(xhr);
                setMessage("Error: " + xhr.status + ". " + xhr.responseText);
                setErrorOcurred(true);
            });
    }

    /**
     * Handles the form submission. Checks if the input field is empty.
     * @param {Object} event    URL input field
     */
    function handleSubmit(event) {
        event.preventDefault();
        if (inputValue === "") {
            setMessage("Please add a link");
            setErrorOcurred(true);
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
                    (errorOcurred ? " input-field--invalid" : "")
                }
                onChange={handleChange}
                placeholder="Shorten a link here..."
            />
            <p
                className={
                    "url-form__error-message" +
                    (errorOcurred ? " error-color" : "")
                }
            >
                {message}
            </p>
            <input type="submit" value="Shorten it!" className="button" />
        </form>
    );
}

function LinkForm() {
    const [newId, updateId] = useState(getNewId());
    const [linkList, setLinkList] = useState(
        getLocalStorage() ? getLocalStorage() : []
    );
    const [lastCopiedId, setLastCopiedId] = useState(0);

    useEffect(() => {
        localStorage.setItem("linkList", JSON.stringify(linkList));
    });

    /**
     * Return the data of linkList from the browser's local storage.
     */
    function getLocalStorage() {
        return JSON.parse(localStorage.getItem("linkList"));
    }

    /**
     * Check for data in local storage and set the state of newId.
     * @returns ID of the next item to be entered
     */
    function getNewId() {
        if (!getLocalStorage() || getLocalStorage().length === 0) {
            return 1;
        }
        const lastId = getLocalStorage()[getLocalStorage().length - 1].id;
        return lastId + 1;
    }

    /**
     * Sets lastCopiedId to the ID of the last copied item, lifted from
     * LinkItem.
     * @param {Number} id   ID of the last copied item
     */
    function handleCopy(id) {
        setLastCopiedId(id);
    }

    /**
     * Creates a JSON object of an id, the original URL, and the shortened URL,
     * and pushes it into linkList.
     * @param {String} inputUrl     User input URL
     * @param {String} shortenedURL Shortened URL
     */
    function shortenUrl(inputUrl, shortenedURL) {
        setLinkList(
            linkList.concat({
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
                <ul className="link-list">
                    {linkList.map((urlObj) => (
                        <LinkItem
                            itemObj={urlObj}
                            key={urlObj.id}
                            onLinkCopy={handleCopy}
                            isCopied={lastCopiedId === urlObj.id}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default LinkForm;
