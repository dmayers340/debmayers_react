import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import { experiences } from '../config/debstuff.js';

let currentExperience;
let unityContent;

export const Experience = (props) => {
    experiences.map(curr => {
        if(curr.name === props.match.params.name){
            currentExperience = curr;
        }
    });
    if(currentExperience.name === 'Mithraeum'){
        unityContent = new UnityContent(
            "../webgl/Build/webgl.json",
            "../webgl/Build/UnityLoader.js"
        );

        return (
            <Unity unityContent={unityContent} />
        )
    } else if(currentExperience.name === 'Space Shooter') {
        unityContent = new UnityContent(
            "../SpaceShooter/Build/SpaceShooter.json",
            "../SpaceShooter/Build/UnityLoader.js"
        );

        return (
            <Unity unityContent={unityContent} />
        )
    } else if(currentExperience.name === 'Roll the Ball'){
        unityContent = new UnityContent(
            "../RollTheBall/Build/Webgl_Build.json",
            "../RollTheBall/Build/UnityLoader.js"
        );

        return (
            <Unity unityContent={unityContent} />
        )
    }
     else {
        return (
            <>
                <h1>{props.match.params.name}</h1>
                Currently working on how to display WebGL builds from Unity in React. Come back later to see the experience!
            </>
        )
    }
}