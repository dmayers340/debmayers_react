import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import { experiences } from '../config/debstuff.json';

let currentExperience;
export const Experience = (props) => {
    experiences.map(curr => {
        if(curr.name === props.match.params.name){
            currentExperience = curr;
        }
    });
    // if the experience == something frm config return config suttf 
    // if(props.match.params.name === 'Mithraeum'){
    //     return (
    //         <h1>Mithraeum</h1>
    //         )
    // } else if (props.match.params.name === 'Carrawburgh') {
        
    // } else {
        return(
            <div>
                <h1>{props.match.params.name}</h1>
                Currently working on how to display WebGL builds from Unity in React. Come back later to see the experience!
                <img alt={currentExperience.imageAlt} src={currentExperience.image} />
                <p>{currentExperience.description}</p>            
            </div>
        )
    // }
}