import React from "react";
import { Helmet } from 'react-helmet';

const SolarSystemAR = () => {
    return (
        <>
            <Helmet>
                <title>Solar System in AR Deb Mayers</title>
            </Helmet>
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