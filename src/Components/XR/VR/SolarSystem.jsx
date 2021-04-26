import React from 'react';
import 'aframe';
import { Helmet } from 'react-helmet';
require('aframe-teleport-controls');

const SolarSystem = () => {
    return (
        <>
            <Helmet>
                <title>Solar System Using AFrame--Deb Mayers</title>
            </Helmet>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%"}}
                title="SolarSystem Deb Mayers"
                src="/vr/SolarSystem.html"
            />
        </>
    )
}

export default SolarSystem;