import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';

export const Presentations = () => {
    return (
        <Row>
            <Col>
                <Card style={{ width: '20rem', height: '20rem', marginBottom: '1rem' }}>
                    <Card.Title>Getting Started With Spatial Computing Presentation</Card.Title>
                    <Card.Body>
                        <object data="doc/GettingStartedWithSpatialComputing.pdf" type="application/pdf" width="100%" height="100%">
                            <p>Your browser doesn't support this feature.</p>
                            <a href="doc/GettingStartedWithSpatialComputing.pdf">Download PDF Instead.</a>
                        </object>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem', height: '20rem', marginBottom: '1rem' }}>
                    <Card.Title>Remembering Mithras: Is VR an Effective Tool to Learn About the Past?</Card.Title>
                    <Card.Body>
                        <object data="doc/Mayers_RememberingMithras_TRAC_Final.pdf" type="application/pdf" width="100%" height="100%">
                            <p>Your browser doesn't support this feature.</p>
                            <a href="doc/Mayers_RememberingMithras_TRAC_Final.pdf">Download PDF Instead.</a>
                        </object>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem', height: '20rem', marginBottom: '1rem' }}>
                    <Card.Title>AR and VR in Enterprises</Card.Title>
                    <Card.Body>
                        <object data="doc/Mayers_AR_VR_Enterprises.pdf" type="application/pdf" width="100%" height="100%">
                            <p>Your browser doesn't support this feature.</p>
                            <a href="doc/Mayers_AR_VR_Enterprises.pdf">Download PDF Instead.</a>
                        </object>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem', height: '20rem', marginBottom: '1rem' }}>
                    <Card.Title>Is Virtual Reality an Effective Tool for Learning?</Card.Title>

                    <Card.Body>
                        <object data="doc/Mayers_LearningAndVR.pdf" type="application/pdf" width="100%" height="100%">
                            <p>Your browser doesn't support this feature.</p>
                            <a href="doc/Mayers_LearningAndVR.pdf">Download PDF Instead.</a>
                        </object>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem', height: '20rem', marginBottom: '1rem' }}>
                    <Card.Title>Remembering Carrawburgh: Using VR to (Re)Create the past</Card.Title>

                    <Card.Body>
                        <object data="doc/Mayers_RecreatingThePastUsingSensoryFeedback.pdf" type="application/pdf" width="100%" height="100%">
                            <p>Your browser doesn't support this feature.</p>
                            <a href="doc/Mayers_RecreatingThePastUsingSensoryFeedback.pdf">Download PDF Instead.</a>
                        </object>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem', height: '20rem', marginBottom: '1rem' }}>
                    <Card.Title>You and Your Avatar: Using XR for Meetings</Card.Title>
                    <Card.Body>
                        <object data="doc/Mayers_You_And_Your_Avatar.pdf" type="application/pdf" width="100%" height="100%">
                            <p>Your browser doesn't support this feature.</p>
                            <a href="doc/Mayers_You_And_Your_Avatar.pdf">Download PDF Instead.</a>
                        </object>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}