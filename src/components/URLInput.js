import React, { useState } from "react";
import $ from "jquery";

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

export default URLInput;
