import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { Model } from './Model';
import { Helmet } from 'react-helmet';

export const Project = (props) => {
    const { match } = props;
    const project = props.project;
    return (
        <>
            {match.path === "/models" ? (
                <>
                    <Helmet>
                        <title>3D Models List Deb Mayers</title>
                    </Helmet>
                    <div className="visually-hidden">
                        <h1>3D Models List Deb Mayers</h1>
                    </div>
                </>
            ): 
            ( 
                <>
                    <Helmet>
                        <title>Virtual Reality Experience List Deb Mayers</title>
                    </Helmet>
                    <div className="visually-hidden">
                        <h1>Virtual Reality Experience List Deb Mayers</h1>
                    </div>
                </>
            )
            }
            

            {props.hasIFrame ? (
                <>
                    <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <iframe
                                title={project.name}
                                src={project.iframesrc}
                                alt={project.imgAlt}
                                frameBorder="0"
                                allow="autoplay; fullscreen; vr"
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                            />
                            <Card.Text><a href={project.url}>{project.name}</a></Card.Text>
                            <Card.Text>by <a href={project.by}>debmayers24</a></Card.Text>
                            <Card.Text> on <a href={project.on}>Sketchfab</a></Card.Text>
                        </Card.Body>
                    </Card>
                </>
            ) : (
                    <>
                        <Card key={project.name} style={{ width: '20rem', marginBottom: '1rem' }}>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>{project.subtitle}</Card.Text>
                            <Card.Img variant="top" src={project.mainImageUrl} alt={project.mainImageAlt} />
                            {project.externalLink ?
                                <a href={project.externalLink}>
                                    {project.linkDescription}
                                </a> :
                                <Link to={`${match.url}/${project.urlName}`}>
                                    Go to {project.name}
                                </Link>

                            }
                            <Route path={`${match.path}/:id`} exact component={Model} />
                        </Card>
                    </>
                )}
        </>
    )
}