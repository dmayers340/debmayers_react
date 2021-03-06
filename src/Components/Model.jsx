import React from 'react';
import { Card } from 'react-bootstrap';
import { freestyleModels } from '../config/models.json';
import { Helmet } from 'react-helmet';

let currentExperience;
let foundModel;

export const Model = ({match}) => {
    freestyleModels.forEach(curr => {
        if(curr.urlName === match.params.name){
            currentExperience = curr;
            foundModel = true;
        }
    });
    
    return foundModel ? (
        <>
            <Helmet>
                <title>{currentExperience.name} Deb Mayers</title>
            </Helmet>
            <h1>{currentExperience.name}</h1>
            <div className = "row">

            <Card key={match.params.name} style={{ width: '20rem', marginBottom: '1rem'}}>
                <Card.Text>{currentExperience.description}</Card.Text>
                <a href={`https://debmayers.com/${currentExperience.projectUrl}`}>Go to the Project Link at {currentExperience.name}</a> 
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