import React from 'react';
import {models} from '../config/debstuff.json';


export const Model = (props) => {
    const currentExperienceName = props.match.params.name;
    console.log("experience name", currentExperienceName);
    console.log('Experienceasdsf');
    const currentExperience = models.includes(props.match.params.name);
    
    return(
    <div>
        <h1>{props.match.params.name}</h1>
        Clicked!
    </div>
    )

}