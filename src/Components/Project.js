import React from 'react';
import { Button, Card } from 'react-bootstrap';

export const Project = props => {
    const project = props.project;
    return props.hasIFrame ? (
        <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <iframe title ={project.name} src={project.iframesrc} frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true" />
                    <Card.Text>
                        <a href={project.url}>{project.name}</a>
                        by <a href = {project.by}>debmayers24</a>
                        on <a href = {project.on}>Sketchfab</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            
        ) : (
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Img variant="top" src={project.imageUrls} />
                    <Card.Text>{project.subtitle}</Card.Text>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="primary">{project.name}</Button>
                </Card.Body>
            </Card>
            
        )
}