import React from 'react';
import {interests, facts, education} from '../config/debstuff.json';
import {vr_projects} from '../config/projects.json';

import { Card, Col, Row } from 'react-bootstrap';

export const About = () => {
    return (
        <Row>
            <Col>
                <Card style={{ width: '20rem', height: '70rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <Card.Title>Interests</Card.Title>
                        <Card.Img variant="top" src='img/Arran_v02.jpg' alt='Sea on the way to Arran'/>
                        {interests.map(interest => (
                            <Card.Text key={interest}>{interest}</Card.Text>
                        ))}
                        <Card.Img src='img/vindolanda.jpg' alt='Vindolanda Roman Fort'/>
                        <Card.Img src='img/SycamoreGap.jpg' alt='Sycamore Gap on Hadrians Wall'/>
                        <Card.Img variant="bottom" src='img/Vindolanda_02.jpg' alt='Fort at Vindolanda' />
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '20rem', height: '70rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <Card.Title>Facts</Card.Title>
                        <Card.Img variant="top" src='img/DurhamCathedral.jpg' alt = 'Durham Cathedral'/>
                        {facts.map(fact => (
                            <Card.Text key={fact}>{fact}</Card.Text>
                        ))}
                        <Card.Img src='img/steelrigg.jpg' alt='Steel Rig, Hadrians Wall going up the hill'/>
                        <Card.Img variant="bottom" src='img/TNParthenon.jpg' alt='Self in front of the statue of Athena at the Tenessee Parthenon'/>
                    </Card.Body>
                </Card>
            </Col> 
            <Col>
                <Card style={{ width: '20rem', height: '70rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <Card.Title>Education</Card.Title>
                        <Card.Img variant="top" src='img/Canterbury_Cathedral_v01.jpg' alt='Canterbury Cathedral' />
                        {education.map(degree => (
                            <Card key = {degree.year+degree.degree}>
                                <Card.Title>{degree.degree}</Card.Title>
                            <Card.Text>{degree.year}</Card.Text>
                            <Card.Text>{degree.name}</Card.Text>
                            </Card>
                        ))}
                        <Card.Img variant="bottom" src='img/Carr.jpg' alt='Self smiling on the road in front of Carrawburgh'/>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '20rem', height: '70rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <Card.Title>Projects</Card.Title>
                        <Card.Img variant="top" src='img/Mithraeum.jpg' alt='Temple to Mithras at Carrawburgh'/>
                        {vr_projects.map(project => (
                            <Card key = {project.name + project.description}>
                                <Card.Title>
                                    {project.name}
                                </Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card>  
                        ))}
                        <Card.Img variant="bottom" src='img/Housesteads.jpg' alt = 'Self in front of the ruins at Housesteads'/>
                    </Card.Body>
                </Card>
            </Col> 
        </Row>  
    )
}