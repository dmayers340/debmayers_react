import React from "react";
import { Helmet } from 'react-helmet';

const Mithraeum = () => {
    return (
        <>
            <Helmet>
                <title>Carrawburgh Mithraeum in AR Deb Mayers</title>
            </Helmet>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%"}}
                title="Carrawburgh Mithraeum in AR"
                src="/ar/Mithraeum.html"
            />
        </>
    );
};

export default Mithraeum;