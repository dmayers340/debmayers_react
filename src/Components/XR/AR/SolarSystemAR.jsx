import React from "react";
import { Helmet } from 'react-helmet';

const SolarSystemAR = () => {
    return (
        <>
            <Helmet>
                <title>Solar System in AR Deb Mayers</title>
            </Helmet>
            <p>
                Use the <a href="https://en.wikiversity.org/wiki/File:Pattern-hiro.png">hiro image</a> for tracking.
            </p>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%"}}
                title="Solar System in AR"
                src="/ar/SolarSystem.html"
            />
        </>
    );
};

export default SolarSystemAR;