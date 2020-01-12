import React from 'react';
import { Card, Col, Image, Jumbotron, Row } from 'react-bootstrap';

export const Home = () => {
    return (
        <>
            <Jumbotron fluid>
                <Image src={process.env.PUBLIC_URL + '/img/debmayers.png'} alt= 'Deb Mayers logo with Colosseum and VR Headset' fluid />
            </Jumbotron>
            <Row>
                <Col id="main" tabIndex={-1}>
                    <Card style={{ width: '20rem', height: '40rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" alt="Myself with VR headset on" src={process.env.PUBLIC_URL + '/img/self_vr_train.jpg'} />
                            <Card.Text>
                                Download my Mithraeum APK for the Oculus Quest< a href="https://drive.google.com/open?id=1MpdORGaxbUzkkAsqrUg4txP_kA3ZMvrS"> here! </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem', height: '40rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Links:</Card.Title>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/CorbridgeLion.png'} alt="Altar flame working" />
                                <Card.Text><a href="https://sketchfab.com/debmayers24">Sketchfab</a></Card.Text>
                                <Card.Text><a href="https://twitter.com/debmayers24">Twitter</a></Card.Text>
                                <Card.Text><a href="https://www.linkedin.com/in/deborahmayers/">LinkedIn</a></Card.Text>
                                <Card.Text><a href="https://github.com/dmayers340/">Github</a></Card.Text>
                                <Card.Text><a href="https://www.researchgate.net/publication/329104765_Remembering_Mithras_Can_VR_be_used_to_learn_about_the_past">Research
                                        Gate: Dissertation</a></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem', height: '40rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/Mithraeum_Front.jpg'} alt="Front of the Temple to Mithras at Carrawburgh" />
                            <Card.Text>
                                Last Project: Carrawburgh Mithraeum VR Experience.
                                Research question: Is VR an Effective Tool for Learning About the Past?
                            </Card.Text>
                            <Card.Img variant="bottom" src={process.env.PUBLIC_URL + '/img/mithraeum_reconstructed.jpg'} alt="Front of the Temple to Mithras at Carrawburgh" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}