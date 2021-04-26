import React from 'react';
import { Card, Col, Image, Jumbotron, Row, ListGroup } from 'react-bootstrap';

export const Home = () => {
    return (
        <>
            <div className="visually-hidden">
                <h1>Deb Mayers Home Page</h1>
            </div>
            <Jumbotron fluid>
                <Image src={process.env.PUBLIC_URL + '/img/debmayers.png'} alt= 'Deb Mayers logo' fluid />
            </Jumbotron>
            <Row>
                <Col id="main" tabIndex={-1}>
                    <Card style={{ width: '20rem', height: '40rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" alt="Deb Mayers smiling with VR headset on" src={process.env.PUBLIC_URL + '/img/self_vr_train.jpg'} />
                            <Card.Text>
                                <a href="https://drive.google.com/open?id=1MpdORGaxbUzkkAsqrUg4txP_kA3ZMvrS"> Download my Mithraeum APK for the Oculus Quest on Google Drive! </a>
                            </Card.Text>
                            <Card.Img variant="bottom" src={process.env.PUBLIC_URL + '/img/Arran_v03.jpg'} alt="Sea with a mountain with snow on top in the background" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem', height: '40rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Links to My Online Profiles:</Card.Title>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/CorbridgeLion.png'} alt="Stone Lion statue inside a round fountain in a (re)created Roman courtyard" />
                                <ul className="left-aligned">
                                    <li>
                                        <a href="https://sketchfab.com/debmayers24" aria-label="Deb Mayers Sketchfab Profile">
                                            <span aria-hidden="true">Sketchfab</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/debmayers24" aria-label="Deb Mayers Twitter Profile">
                                            <span aria-hidden="true">Twitter</span>
                                        </a>
                                    </li>       
                                    <li>
                                        <a href="https://www.linkedin.com/in/deborahmayers/" aria-label="Deb Mayers LinkedIn Profile">
                                            <span aria-hidden="true">LinkedIn</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/dmayers340/" aria-label="Deb Mayers Github Profile">
                                            <span aria-hidden="true">Github</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.researchgate.net/publication/329104765_Remembering_Mithras_Can_VR_be_used_to_learn_about_the_past">Research
                                        Gate: Remembering Mithras Dissertation</a>
                                    </li>
                                </ul>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem', height: '40rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/Mithraeum_Front.jpg'} alt="Stone ruin of the temple to Mithras at Carrawburgh" />
                            <Card.Text>
                                Last Project: Carrawburgh Mithraeum VR Experience.
                                Research question: Is VR an Effective Tool for Learning About the Past?
                            </Card.Text>
                            <Card.Img variant="bottom" src={process.env.PUBLIC_URL + '/img/mithraeum_reconstructed.jpg'} alt="(Re)created temple, dark inside with one torch lit, altars and cult statue of Mithras slaying the bull." />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem', height: '40rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Credits:</Card.Title>     
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/AddedRoofDecorations.png'} alt="3D model of the main building at the university of glasgow" />
                            <ListGroup>
                                <ListGroup.Item> 
                                    A-Frame Solar System textures courtesy of <a href="https://www.solarsystemscope.com/textures/">Solar System Scope</a>
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Img variant="bottom" src={process.env.PUBLIC_URL + '/img/altar3_color.png'} alt="Two ancient Roman altars, one with paint that shows the dedication and decoration of three egs at the top next to the original that is faded and without paint"/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}