import React from 'react';
import { Helmet } from 'react-helmet';
import {documents } from '../config/projects.json';

const Resume = () => (
        <>
            <Helmet>
                <title>{documents[0].title}</title>
            </Helmet>
            <div className="visually-hidden">
                <h1>Download {documents[0].title}</h1>
            </div>
            <a href={documents[0].link}>{documents[0].linkDescription}</a>
            <object data={documents[0].dataSource} type="application/pdf" width="100%" height="100%" a>
                <p><a href={documents[0].dataSource}>{documents[0].documentDescription}</a></p>
            </object>
        </>
);

export default Resume;