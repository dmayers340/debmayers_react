import React from 'react';
import { Project } from './Project';
import { webxr, vr_projects, documents, models, experiences, freestyleModels } from '../config/projects.json';

export const Projects = () => {
    return (
        <>
            <div className="visually-hidden">
                <h1>Deb Mayers Home Page</h1>
            </div>
            <h2>Web XR</h2>

            <h2>Presentations</h2>

            <h2>Unity Projects</h2>

            <h2>3D Models - 3DS Max</h2>
            {freestyleModels.map(model => {
                console.log('model', model);
                return (
                    <Project props={model} />
                )
            })}
            <h2>3D Models - MetaShape</h2>
        </>
    )
}