import React from 'react';
import {projects} from '../config/debstuff.json';


export const ProjectInformation = (props) => {
    const currentExperienceName = props.match.params.name;
    console.log("experience name", currentExperienceName);
    console.log('Experienceasdsf');
    const currentExperience = projects.includes(props.match.params.name);
    
    return(
    <div>
        <h1>{props.match.params.name}</h1>
        Clicked!
    </div>
    )

}