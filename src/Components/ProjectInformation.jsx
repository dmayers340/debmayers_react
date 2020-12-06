import React from 'react';
import {vr_projects} from '../config/projects.json';
import { Card } from 'react-bootstrap';
import Helmet from 'react-helmet';

let currentExperience;

export const ProjectInformation = (props) => {
    vr_projects.forEach(curr => {
        if(curr.urlName === props.match.params.name){
            currentExperience = curr;
        } else {
            console.log('current could not find');
        }
    });
    
    return(
        <>
            <Helmet>
                <title>{currentExperience.name} Deb Mayers</title>
            </Helmet>
            <h1>{currentExperience.name}</h1>
            <h2> {currentExperience.document ? (
                    <p><a href={currentExperience.document} download>Download The Dissertation</a></p> 
                    ) : null 
                }</h2>
            <div className="row">
                {currentExperience.dissertationVideo ? (
                    <>
                        <Card key='DissertationVideo' style={{ width: '20rem', marginBottom: '1rem' }}>
                            <iframe title="Youtube Video of Temple to Mithras Dissertation" src={currentExperience.dissertationVideo} name="Youtube Video of Temple to Mithras dissertation" height="100%"/>
                        </Card>
                        <Card key={currentExperience.mainImgAlt} style={{ width: '20rem', marginBottom: '1rem' }}>
                            <Card.Img variant="top" src={currentExperience.mainImageUrl} alt={currentExperience.mainImageAlt} />
                        </Card>
                    </>
                ) : null}
            </div>
            <div className = "row">
                {currentExperience.video ? (
                    <video width="400" controls>
                        <source src={currentExperience.video} type="video/mp4" />
                    </video>
                ) : (
                    currentExperience.images.map(curr => (
                        <Card key={curr.imgAlt} style={{ width: '20rem', marginBottom: '1rem' }}>
                            <Card.Title>{curr.imgAlt}</Card.Title>
                            <Card.Img variant="top" src={curr.imgSrc} alt={curr.imgAlt} />
                        </Card>            
                )))}
            </div>
            <p>{currentExperience.description}</p>
            <p>{currentExperience.link ? (
                <a href={currentExperience.link}>{currentExperience.linkDescription}</a>
            ) : null }</p>
        </>
    )

}