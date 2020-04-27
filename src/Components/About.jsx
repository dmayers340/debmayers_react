import React from 'react';
import {interests, education} from '../config/debstuff.js';
import {vr_projects} from '../config/projects.json';
import { Helmet } from 'react-helmet';
import { Card, Col, Row } from 'react-bootstrap';

export const About = () => {
    return (
        <>
            <Helmet>
                <title>About Deb Mayers</title>
            </Helmet>
            <Row>
                <Col id="main">
                    <Card style={{ width: '20rem', height: '70rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Interests</Card.Title>
                            <Card.Img variant="top" src='img/Arran_v02.jpg' alt='Sea rippling behind a ferry with island in the background'/>
                            <ul className="no-list">
                                {interests.map(interest => (
                                    <li key={interest}>{interest}</li>
                                ))}
                            </ul>
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
                            <ul className="no-list">
                                {vr_projects.map(project => (
                                    <li key={project.projectUrl}>
                                        {project.projectUrl ? (<a href={`https://debmayers.com/${project.projectUrl}`}>
                                            <b>{project.name}</b>
                                        </a> ) : (<b>{project.name}</b>)}
                                        <div className='left-aligned'>{project.description}</div>
                                    </li>
                               ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col> 
                <Col>
                    <Card style={{ width: '20rem', height: '70rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Education</Card.Title>
                            <Card.Img variant="top" src='img/UniGlasgowFront.JPG' alt='Front of the main building at the University of Glasgow' />
                            <ul className="no-list">
                                {education.map(degree => (
                                    <li key={degree.degree}>
                                        <b>{degree.degree}</b>
                                        <p>{degree.year}</p>
                                    </li>
                                ))}
                            </ul>
                            <Card.Img variant="bottom" src='img/DukeChapel.jpg' alt='Duke Chapel at Dusk' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>  
    )
}