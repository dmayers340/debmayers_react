import React from "react";
import { Helmet } from 'react-helmet';

const CodeWeek = () => {
    return (
        <>
            <Helmet>
                <title>CodeWeek Example</title>
            </Helmet>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%"}}
                title="CodeWeek"
                src="/ar/CodeWeek.html"
            />
        </>
    );
};

export default CodeWeek;