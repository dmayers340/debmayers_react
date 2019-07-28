import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { freestyleModels } from '../config/models.json';
import { Project } from './Project';

export const Model = (props) => {
    let foundModel = false;
    
    const findMatchingModel = (modelName) => {
        freestyleModels.forEach(currentModel => {
            if(modelName === currentModel.name){
                foundModel = true;
                return currentModel;
            }
            else {
                return 'Sorry cannot find model';
            }
        })
    }
    
    const currModel = findMatchingModel(props.match.params.name);

    if(foundModel) {
        return(
            <div>
                <h1>{props.match.params.name}</h1>
                Clicked!
                <div>
                    <Card key={props.match.params.name} style={{ width: '20rem' }}>
                        <Card.Title>{currModel.name}</Card.Title>
                        <Card.Img variant="top" src={currModel.image} alt={currModel.imageAlt}/>
                        <Card.Text>{currModel.description}</Card.Text>
                        <Link to={`projects/${currModel.name}`}>Go to the Project Link at {currModel.name}</Link> 
                        <Route path={`projects/:name`} exact component={Project} />
                    </Card>
                    Image
                </div>
                <div>
                    Description
                </div>
                <div>
                    Extra URLs
                </div>
                <div>
                    Images
                </div>
            </div>
        )
    } else {
        return(
            <div>
                {currModel}
            </div>
        )
    }

}