import React from 'react';
import {interests, education} from '../config/debstuff.json';
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
                            <p>{degree.year}</p>
                            <p>{degree.name}</p>
                            </Card>
                        ))}
                    </Card.Body>
                </Card>
            </Col>
        </Row>  
    )
}