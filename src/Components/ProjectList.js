import React from 'react';
import { projects } from '../config/debstuff.json';
import { Project } from './Project';

export const ProjectList = () => {
    return(
        <>
            <div class="row">
                {projects.map(project => <Project project={project} />)}
            </div>
        </>
    );
}