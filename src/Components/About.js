import React from 'react';
import {interests, facts, education, projects} from '../config/debstuff.json';
import { Card } from 'react-bootstrap';

export const About = () => {
    return (
        <div className = "about-page">
            <div className = "interests">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Interests</Card.Title>
                        { interests.map(interest => (
                            <Card.Text>{interest}</Card.Text>
                        ))}
                    </Card.Body>
                </Card> 
            </div>

            <div className = "facts">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Facts</Card.Title>
                        { facts.map(fact => (
                            <Card.Text>{fact}</Card.Text>
                        ))}
                    </Card.Body>
                </Card> 
            </div>

            <div className = "education">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Education</Card.Title>
                        { education.map(degree => (
                            <Card>
                                <Card.Title>{degree.degree}</Card.Title>
                            <Card.Text>
                                <p>{degree.year}</p>
                                <p>{degree.name}</p>
                            </Card.Text>
                            </Card>
                           
                        ))}
                    </Card.Body>
                </Card> 
            </div>

            <div className = "projects">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Projects</Card.Title>
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
                </Card.Body>
            </Card> 
            </div>
        </div>  
    )
}