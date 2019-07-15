import React from 'react';
import { Button, Card } from 'react-bootstrap';

export const Project = props => {
    const project = props.project;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.mainImage} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.subtitle}</Card.Text>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary">{project.name}</Button>
            </Card.Body>
        </Card>
    )
}