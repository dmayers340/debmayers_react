import React from 'react';
import { Helmet } from 'react-helmet';
import {documents } from '../config/projects.json';

// Fix to one file with Resume
const Doc = () => (
        <>
            <div className="visually-hidden">
                <h1>Download {documents[1].title}</h1>
            </div>
            <Helmet>
                <title>{documents[1].title}</title>
            </Helmet>
            <a href={documents[1].link}>{documents[1].linkDescription}</a>
            <object data={documents[1].dataSource} type="application/pdf" width="100%" height="100%">
                <p><a href={documents[1].dataSource}>{documents[1].documentDescription}</a></p>
            </object>
        </>
);

export default Doc;