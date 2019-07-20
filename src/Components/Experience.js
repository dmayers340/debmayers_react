import React from 'react';
import {experiences} from '../config/debstuff.json';


export const Experience = (props) => {
    const currentExperienceName = props.match.params.name;
    console.log("experience name", currentExperienceName);
    console.log('Experienceasdsf');
    const currentExperience = experiences.includes(props.match.params.name);
    
    return(
    <div>
        <h1>{props.match.params.name}</h1>
        Clicked!
    </div>
    )

}