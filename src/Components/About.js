import React from 'react';
import {interests, facts, education, projects} from '../config/debstuff.json';
import { Card } from 'react-bootstrap';

export const About = () => {
    return (
        <div className = "row">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Interests</Card.Title>
                    <Card.Img variant="top" src='img/Arran_v02.jpg' />
                    { interests.map(interest => (
                        <Card.Text>{interest}</Card.Text>
                    ))}
                    <Card.Img variant="bottom" src='img/Vindolanda_02.jpg' />
                </Card.Body>
            </Card> 

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Facts</Card.Title>
                    <Card.Img variant="top" src='img/DurhamCathedral.jpg' />
                    { facts.map(fact => (
                        <Card.Text>{fact}</Card.Text>
                    ))}
                    <Card.Img variant="bottom" src='img/TNParthenon.jpg' />
                </Card.Body>
            </Card> 

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Education</Card.Title>
                    <Card.Img variant="top" src='img/Canterbury_Cathedral_v01.jpg' />
                    { education.map(degree => (
                        <Card>
                            <Card.Title>{degree.degree}</Card.Title>
                        <Card.Text>
                            <p>{degree.year}</p>
                            <p>{degree.name}</p>
                        </Card.Text>
                        </Card>
                    ))}
                    <Card.Img variant="bottom" src='img/Carr.jpg' />
                </Card.Body>
            </Card> 

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Projects</Card.Title>
                    <Card.Img variant="top" src='img/Mithraeum.jpg' />
                    {projects.map(project => (
                        <Card>
                            <Card.Title>
                                {project.name}
                            </Card.Title>
                            <Card.Text>
                                <p>{project.description}</p>
                            </Card.Text>
                        </Card>  
                    ))}
                    <Card.Img variant="bottom" src='img/Housesteads.jpg' />
                </Card.Body>
            </Card> 
        </div>  
    )
}