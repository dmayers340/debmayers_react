import React from 'react';
import { vr_projects } from '../../config/projects.json';
import { Project } from '../Project';
import { Helmet } from 'react-helmet';

export const ProjectList = ({match}) => {
    return(
        <>
            <Helmet>
                <title>Virtual Reality Projects List Deb Mayers</title>
            </Helmet>
            <div className="row">
                {vr_projects.map(project => <Project key={project.name} project={project} hasIFrame = {false} match={match}/>)}
            </div>
        </>
    );
}