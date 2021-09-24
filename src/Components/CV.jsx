import React from 'react';
import 'aframe';
import { Helmet } from 'react-helmet'
import { documents } from '../config/projects.json';

require('aframe-teleport-controls');

export const CV = () => {
    return (
        <>
            <Helmet>
                <title>Deb Mayers CV</title>
            </Helmet>
            <>
                <a href={documents[0].link}>{documents[0].linkDescription}</a>
                <iframe
                    frameBorder="0"
                    style={{ width: "100%", height: "100%" }}
                    title="CV Deb Mayers"
                    src="/vr/cv.html"
                />
            </>

            <object id="pdf" data={documents[0].dataSource} type="application/pdf" width="100%" height="100%">
                <p><a href={documents[0].dataSource}>{documents[0].documentDescription}</a></p>
            </object>
        </>
    )
}