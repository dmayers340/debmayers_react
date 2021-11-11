import React from 'react';
import 'aframe';
import { Helmet } from 'react-helmet'

require('aframe-teleport-controls');

export const CV = () => {
    return (
        <>
            <Helmet>
                <title>Deb Mayers CV</title>
            </Helmet>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%"}}
                title="CV Deb Mayers"
                src="/vr/cv.html"
            />
        </>
    )
}