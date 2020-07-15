import React, { useState, useEffect } from "react";
import URLInput from "./URLInput";
import LinkItem from "./LinkItem";

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
