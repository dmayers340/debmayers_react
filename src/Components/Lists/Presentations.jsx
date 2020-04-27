import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export const Presentations = () => {
    return (
        <>
            <Helmet>
                <title>Presentations List Deb Mayers</title>
            </Helmet>
            <Row>
                <Col id="main">
                    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <a href="doc/GettingStartedWithSpatialComputing.pdf">Download the Getting Started With Spatial Computing Presentation.</a>
                            <object data="doc/GettingStartedWithSpatialComputing.pdf" type="application/pdf" width="100%" height="100%">
                                <p>Your browser doesn't support this feature.</p>
                                <a href="doc/GettingStartedWithSpatialComputing.pdf">Download PDF Instead.</a>
                            </object>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <a href="doc/Mayers_RememberingMithras_TRAC_Final.pdf">Download Remembering Mithras Presentation.</a>
                            <object data="doc/Mayers_RememberingMithras_TRAC_Final.pdf" type="application/pdf" width="100%" height="100%">
                                <p>Your browser doesn't support this feature.</p>
                                <a href="doc/Mayers_RememberingMithras_TRAC_Final.pdf">Download PDF Instead.</a>
                            </object>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <a href="doc/Mayers_AR_VR_Enterprises.pdf">Download the AR and VR in Enterprises Presentation.</a>
                            <object data="doc/Mayers_AR_VR_Enterprises.pdf" type="application/pdf" width="100%" height="100%">
                                <p>Your browser doesn't support this feature.</p>
                                <a href="doc/Mayers_AR_VR_Enterprises.pdf">Download PDF Instead.</a>
                            </object>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <a href="doc/Mayers_LearningAndVR.pdf">Download Learning in VR Presentation.</a>
                            <object data="doc/Mayers_LearningAndVR.pdf" type="application/pdf" width="100%" height="100%">
                                <p>Your browser doesn't support this feature.</p>
                                <a href="doc/Mayers_LearningAndVR.pdf">Download PDF Instead.</a>
                            </object>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                        <a href="doc/Mayers_RecreatingThePastUsingSensoryFeedback.pdf">Download (Re)creating the Past Presentation.</a>
                            <object data="doc/Mayers_RecreatingThePastUsingSensoryFeedback.pdf" type="application/pdf" width="100%" height="100%">
                                <p>Your browser doesn't support this feature.</p>
                                <a href="doc/Mayers_RecreatingThePastUsingSensoryFeedback.pdf">Download PDF Instead.</a>
                            </object>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <a href="doc/Mayers_You_And_Your_Avatar.pdf">Download the You and Your Avatar Presentation.</a>
                            <object data="doc/Mayers_You_And_Your_Avatar.pdf" type="application/pdf" width="100%" height="100%">
                                <p>Your browser doesn't support this feature.</p>
                                <a href="doc/Mayers_You_And_Your_Avatar.pdf">Download PDF Instead.</a>
                            </object>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}