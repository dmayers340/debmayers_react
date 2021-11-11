import React from 'react';
import 'aframe';
import { Helmet } from 'react-helmet';
require('aframe-teleport-controls');

export const WebVR = () => {
    return (
        <>
            <Helmet>
                <title>Carrawburgh Roman Fort Using AFrame Deb Mayers</title>
            </Helmet>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%"}}
                title="Carrawburgh Roman Fort Deb Mayers"
                src="/vr/Carrawburgh.html"
            />
        </>
    )
}