import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCube } from "@fortawesome/free-solid-svg-icons";
import { Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Deb Mayers</title>
            </Helmet>
            <div className="visually-hidden">
                <h1>Deb Mayers Contact</h1>
            </div>
            <div id="main" className="row">
                <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <FontAwesomeIcon pull="right" size="lg" icon={['fab', 'linkedin']} aria-hidden="true"/>
                        <a href="https://www.linkedin.com/in/deborahmayers">Find me on LinkedIn</a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <FontAwesomeIcon pull="right" size="lg" icon={faEnvelope} aria-hidden="true"/>
                        <a href="mailto:dmayers340@gmail.com.com?Subject=Hello%20Contacting%20After%20Visiting%20Your%20Website">Email Me</a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <FontAwesomeIcon pull="right" size="lg" icon={['fab', 'twitter']} aria-hidden="true" />
                        <a href="https://twitter.com/debmayers24">Find me on Twitter</a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <FontAwesomeIcon pull="right" size="lg" icon={['fab', 'github']} aria-hidden="true"/>
                        <a href="https://github.com/dmayers340">Find me on Github</a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <FontAwesomeIcon pull="right" size="lg" icon={faCube} aria-hidden="true" />
                        <a href="https://sketchfab.com/debmayers24">Find me on Sketchfab</a>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}