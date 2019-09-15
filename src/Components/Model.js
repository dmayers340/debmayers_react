import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { freestyleModels } from '../config/models.json';
import { Project } from './Project';

let currentExperience;
let foundModel;

export const Model = ({match}) => {
    console.log('match', match);
    freestyleModels.map(curr => {
        console.log('crrent', curr);
        if(curr.urlName === match.params.name){
            currentExperience = curr;
            foundModel = true;
            console.log(currentExperience);
        }
    });
    
    return foundModel ? (
        <>
            <h1>{currentExperience.name}</h1>
            <div className = "row">

            <Card key={match.params.name} style={{ width: '20rem', marginBottom: '1rem'}}>
                <Card.Text>{currentExperience.description}</Card.Text>
                <Link to={`projects/${currentExperience.name}`}>Go to the Project Link at {currentExperience.name}</Link> 
                <Route path={`projects/:urlName`} exact component={Project} />
            </Card>
                {currentExperience.imageURLs.map(curr => (
                    <Card key={curr.imgAlt + curr.name} style={{ width: '20rem', marginBottom: '1rem' }}>
                        <Card.Title>{curr.name}</Card.Title>
                        <Card.Img variant="top" src={curr.path} alt={curr.imgAlt} />
                    </Card>            
                ))}
            </div>
        </>
    ) : (
        <div>
            Sorry, page is under construction! Check back later"
        </div>
    )}