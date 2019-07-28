import React from 'react';
import {projects} from '../config/debstuff.json';
import { Card } from 'react-bootstrap';

let currentExperience;
export const ProjectInformation = (props) => {
    projects.map(curr => {
        if(curr.name === props.match.params.name){
            console.log(curr)
            currentExperience = curr;
        };
    });
    
    return(
        <>
            <h1>{props.match.params.name}</h1>
            <img alt={currentExperience.imageAlt} src={currentExperience.imageUrls} />
            <p>{currentExperience.description}</p>
        </>
    )

}