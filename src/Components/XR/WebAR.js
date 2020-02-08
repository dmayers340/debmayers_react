import React from 'react';

export const WebAR = () => {
    const script = document.createElement("script");
    script.src = "//cdn.8thwall.com/web/share/embed8.js";
    script.async = true;

    document.body.appendChild(script);
    return (
        <div className = 'arcode'>
            <h1>Testing WebAR</h1>
            <p><a className = "embed8-link" href = "https://8th.io/hykve" data-attached="true">Click here to see the (re)created altars from the Carrawburgh Temple to Mithras on Project 8th wall</a></p>
            <p><a href="AR.html">Testing A-Frame and Ar.js</a></p>
        </div>
    )
}