import React from 'react';
import { experiences } from '../config/debstuff.json';
import { Card } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { Experience } from './Experience';

export const ExperienceList = ({match}) => {
    console.log(match);
    return (experiences.map(experience => {
        return (
            <Card>
                <Card.Title>{experience.name}</Card.Title>
                <Card.Img variant="top" src={experience.image}/>
                <Card.Text>{experience.description}</Card.Text>
                <Link to={`${match.url}/${experience.name}`}>Go to {experience.name}</Link> 
                <Route path={`${match.path}/:id`} exact component={Experience} />
            </Card>

        )
    }))
}