import React from 'react';
import { vr_projects } from '../../config/projects.json';
import { Project } from '../Project';

export const ProjectList = ({match}) => {
    return(
        <>
            <div className="row">
                {vr_projects.map(project => <Project key={project.name} project={project} hasIFrame = {false} match={match}/>)}
            </div>
        </>
    );
}