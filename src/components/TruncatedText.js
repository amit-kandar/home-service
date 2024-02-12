import React from "react";
import { Link } from "react-router-dom";

function truncateText(text, maxWords, url) {
    if (text === null) {
        return null;
    }

    const words = text.split(' ');

    if (words.length > maxWords) {
        const truncatedWords = words.slice(0, maxWords);
        const truncatedText = truncatedWords.join(' ');

        return (
            <span>
                {truncatedText}
                <Link to={url}>
                    ...
                </Link>
            </span>
        );
    }

    return text;
}

function TruncatedText({ text, maxWords, url }) {
    return (
        <>
            {truncateText(text, maxWords, url)}
        </>
    );
}

export default TruncatedText;
