import React from 'react';
import { Project } from './Project';
import { models, sketchfabModels } from '../config/debstuff.json';
import '../css/models.css';

export const ModelsList = ({match}) => {
    return (
        <>
            <div className="row">
                {models.map(project => <Project key={project.url + project.name} hasIFrame = {false} match={match} project={project} />)}
                {sketchfabModels.map(model => <Project key={model.name + model.imageUrls} hasIFrame = {true} match={match} project={model} />)}
            </div>
        </>
    );
}