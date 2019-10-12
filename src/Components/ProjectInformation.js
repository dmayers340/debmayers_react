import React from 'react';
import {projects} from '../config/debstuff.json';
import { Card } from 'react-bootstrap';

let currentExperience;

export const ProjectInformation = (props) => {
    console.log('props', props);
    console.log('projectes', projects)
    projects.map(curr => {
        if(curr.urlName === props.match.params.name){
            currentExperience = curr;
            console.log(curr);
        } else {
            console.log('current could not find');
        }
    });
    
    return(
        <>
            <h1>{currentExperience.name}</h1>
            <h4> {currentExperience.document ? (
                    <p>Download The Dissertation <a href={currentExperience.document} download>Here.</a></p> 
                    ) : null 
                }</h4>
            <div className = "row">
                {currentExperience.images.map(curr => (
                    <Card key={curr.imgAlt} style={{ width: '20rem', marginBottom: '1rem' }}>
                        <Card.Title>{curr.imgAlt}</Card.Title>
                        <Card.Img variant="top" src={curr.imgSrc} alt={curr.imgAlt} />
                    </Card>            
                ))}
            </div>
            <p>{currentExperience.description}</p>
            <p>{currentExperience.link ? (
                <a href={currentExperience.link}>{currentExperience.linkDescription}</a>
            ) : null }</p>
        </>
    )

}