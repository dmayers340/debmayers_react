import React from 'react';
import { projects } from '../config/debstuff.json';
import { Project } from './Project';

export const ProjectList = ({match}) => {
    return(
        <>
            <div className="row">
                {projects.map(project => <Project key={project.name} project={project} hasIFrame = {false} match={match}/>)}
            </div>
        </>
    );
}