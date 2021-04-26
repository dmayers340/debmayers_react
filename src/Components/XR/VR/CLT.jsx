import React from 'react';
import 'aframe';
import { Helmet } from 'react-helmet'

require('aframe-teleport-controls');

export const CLT = () => {
    return (
        <>
            <Helmet>
                <title>Return to Office Simulation</title>
            </Helmet>
            <div>
                Click on the 3D model to enter the office!
            </div>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%" }}
                title="Return to Office Simulation"
                src="/vr/CLT.html"
            />
        </>
    )
}