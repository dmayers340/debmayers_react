import React from 'react';
import { Project } from '../Project';
import { models } from '../../config/debstuff.js';
import { sketchfabModels } from '../../config/models.json'
import { Helmet } from 'react-helmet';
import '../../css/models.css';

export const ModelsList = ({match}) => {
    return (
        <>
            <Helmet>
                <title>3D Models List Deb Mayers</title>
            </Helmet>
            <div className="row">
                {models.map(project => <Project key={project.url + project.name} hasIFrame = {false} match={match} project={project} />)}
                {sketchfabModels.map(model => <Project key={model.name + model.imageUrls} hasIFrame = {true} match={match} project={model} />)}
            </div>
        </>
    );
}