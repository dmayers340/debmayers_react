import React from 'react';
import { Helmet } from 'react-helmet';

export const WebAR = () => {
    const script = document.createElement("script");
    script.src = "//cdn.8thwall.com/web/share/embed8.js";
    script.async = true;

    document.body.appendChild(script);
    return (
        <>
            <Helmet>
                <title>AR Using Project 8th Wall Deb Mayers</title>
            </Helmet>
            <h1>Testing WebAR</h1>
            <p><a className = "embed8-link" href = "https://8th.io/hykve" data-attached="true">Augmented Reality, (re)creation of the altars from the Carrawburgh Temple to Mithras</a></p>
        </>
    )
}