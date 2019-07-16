import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const Home = () => {
    return (
        <div className="main-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="centerContent">
                        <div className="selfCenter standardWidth">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="debmayers24"
                                options={{height: 600}}
                            />
                        </div>
                    </div>
                </div>	

                <div className="col-md-6">
                    Hi! Welcome to my site. I'm currently rebuilding it using React. Apologies for the construction, but check back soon and it may be working again!
                    <img className = "image" alt="Myself in front of a Classical Sculpture" src={process.env.PUBLIC_URL + '/img/CLSTMuesum.jpg'} /> 
                </div>		
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <img className = "image" src={process.env.PUBLIC_URL + '/img/altarfire.png'} alt="Altar flame working" /><br />
                </div>

                <div className="col-md-6">
                    Here are a few links to find me at various places on the internet:
                    <ul>
                        <li className = "link-text"><a href="https://sketchfab.com/debmayers24">Sketchfab</a></li>
                        <li className = "link-text"><a href="https://twitter.com/debmayers24">Twitter</a></li>
                        <li className = "link-text"><a href="https://www.linkedin.com/in/deborahmayers/">LinkedIn</a></li>
                        <li className = "link-text"><a href="https://github.com/dmayers340/">Github</a></li>
                        <li className = "link-text"><a href="https://www.researchgate.net/publication/329104765_Remembering_Mithras_Can_VR_be_used_to_learn_about_the_past">Research
                                Gate: Dissertation</a></li>
                    </ul>
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h2><strong>Last Project:</strong></h2><br />
                    <h4><strong>Carrawburgh Mithraeum</strong></h4><br />
                    <strong>Description:</strong><br />
                    Research question: Is VR an Effective Tool for Learning About the Past? <br />
                </div>
                <div className="col-md-6">
                    <img className="image" src={process.env.PUBLIC_URL + '/img/Mithraeum_Front.jpg'} alt="Front of the Temple to Mithras at Carrawburgh"/>
                </div>
            </div>
        </div>
    )
}