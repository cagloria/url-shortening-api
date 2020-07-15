import React from "react";
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

export default LinkItem;
