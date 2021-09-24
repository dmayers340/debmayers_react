import React from 'react';
import { Card } from 'react-bootstrap';

// take in project information, send out in card

export const Project = (props) => {
    console.log('props', props);

    return (
        <Card key={props.imgAlt + props.name} style={{ width: '20rem', marginBottom: '1rem' }}>
            <Card.Text>{props.description}</Card.Text>
            <Card.Title>{props.name}</Card.Title>
            <Card.Img variant="top" src={props.path} alt={props.imgAlt} />
            <a href={`https://debmayers.com/${props.projectUrl}`}>Go to the Project Link at {props.name}</a>
        </Card>
    )
};