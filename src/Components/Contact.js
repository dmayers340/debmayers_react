import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Card } from 'react-bootstrap';

export const Contact = () => {
    return (
        <div className = "row">
            <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                <Card.Body>
                    <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'linkedin']} />                            
                    <Card.Title>LinkedIn</Card.Title>
                    <a href="https://www.linkedin.com/in/deborahmayers">View My LinkedIn</a>
                </Card.Body>
            </Card>
        
            <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                <Card.Body>
                    <FontAwesomeIcon pull = "right" size="lg" icon={faEnvelope} />
                    <Card.Title>Email</Card.Title>
                    <a href="mailto:dmayers340@gmail.com.com?Subject=Hello%20Contacting%20After%20Visiting%20Your%20Website">Email Me</a>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem', marginBottom: '1rem' }}>
                <Card.Body>
                    <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} />                            
                    <Card.Title>Twitter</Card.Title>
                    <a href="https://twitter.com/debmayers24">Find me on Twitter</a>
                </Card.Body>
            </Card>
        </div>
    )
}