import React from 'react';

export const WebAR = () => {
    const script = document.createElement("script");

    script.src = "//cdn.8thwall.com/web/share/embed8.js";
    script.async = true;

    document.body.appendChild(script);
    return (
        <div className = 'arcode'>
            <h1>Testing WebAR</h1>
            <a data-8code="hykve"></a>
        </div>
    )
}