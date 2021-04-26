import React from "react";
import { Helmet } from 'react-helmet';

const SciCenter = () => {
    return (
        <>
            <Helmet>
                <title>Science Center Map in AR Deb Mayers</title>
            </Helmet>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%"}}
                title="Science Center Map in AR"
                src="/ar/ScienceCentre.html"
            />
         </>
    );
};

export default SciCenter;