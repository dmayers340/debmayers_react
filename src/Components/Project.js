import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { Model } from './Model';

export const Project = props => {
    const project = props.project;
    return props.hasIFrame ? (
        <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <iframe title ={project.name} src={project.iframesrc} alt={project.imgAlt} frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true" />
                    <Card.Text><a href={project.url}>{project.name}</a></Card.Text>
                    <Card.Text>by <a href = {project.by}>debmayers24</a></Card.Text>
                    <Card.Text> on <a href = {project.on}>Sketchfab</a></Card.Text>
                </Card.Body>
            </Card>   
        ) : (
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Img variant="top" src={project.imageUrls} alt={project.imageAlt} />
                    <Card.Text>{project.subtitle}</Card.Text>
                    <Card.Text>{project.description}</Card.Text>
                    <Link to={`${props.match.url}/${props.project.name}`}>Go to {props.project.name}</Link> 
                    <Route path={`${props.match.path}/:id`} exact component={Model} />
                </Card.Body>
            </Card>
            
        )
}