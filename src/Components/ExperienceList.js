import React from 'react';
import { experiences } from '../config/debstuff.json';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ExperienceList = ({match}) => {
    return (experiences.map(experience => {
        return (
            <Card>
                <Card.Title>{experience.name}</Card.Title>
                <Card.Img variant="top" src={experience.image}/>
                <Card.Text>{experience.description}</Card.Text>
                <Link to={`${match.url}/${experience.name}`}>Go to {experience.name}</Link> 
            </Card>
        )
    }))
}