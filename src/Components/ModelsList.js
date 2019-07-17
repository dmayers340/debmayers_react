import React from 'react';
import { Project } from './Project';
import { models, sketchfabModels } from '../config/debstuff.json';
import '../css/models.css';

export const ModelsList = () => {
    return (
        <>
            <div className="row">
                {models.map(project => <Project hasIFrame = {false} project={project} />)}
                {sketchfabModels.map(model => <Project hasIFrame = {true} project={model} />)}
            </div>
        </>
    );
}