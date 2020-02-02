import React from 'react';

export const WebAR = () => {
    const script = document.createElement("script");
    script.src = "//cdn.8thwall.com/web/share/embed8.js";
    script.async = true;

    document.body.appendChild(script);
    return (
        <div className = 'arcode'>
            <h1>Testing WebAR</h1>
            <a className = "embed8-link" href = "https://8th.io/hykve" data-attached="true">Click here to see the (re)created altars from the Carrawburgh Temple to Mithras on Project 8th wall</a>
            <a href="./AR.html">Press</a>
        </div>
    )
}