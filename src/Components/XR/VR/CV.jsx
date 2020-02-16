import React from 'react';
import 'aframe';
import { Helmet } from 'react-helmet'

require('aframe-teleport-controls');

export const CV = () => {
    return (
        <>
            <Helmet>
                <title>Deb Mayers CV</title>
            </Helmet>
            
            <div className="a-frame-cv">
                <a-scene physics="debug: true">
                <a-camera twoway-motion="speed: 35">...</a-camera>
                    <a-sky color="#ECECEC"></a-sky>
                    <a-entity id="cameraRig">
                        <a-entity id="head" camera wasd-controls look-controls></a-entity>
                        <a-entity id="left-hand"
                            teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head;">
                        </a-entity>
                        <a-entity
                            id="right-hand"
                            teleport-controls="cameraRig: #cameraRig; teleportOrigin: #head;">
                        </a-entity>
                    </a-entity>

                    <a-entity
                        teleport-controls="startEvents: teleportstart; endEvents: teleportend"
                        vive-controls="hand: left"
                        oculus-touch-controls="hand: left"
                        microsoft-motion-controls="hand: left"
                        daydream-controls="left"
                        gearvr-controls="left">
                    </a-entity>

                    <a-entity
                        teleport-controls="startEvents: teleportstart; endEvents: teleportend; type: line"
                        vive-controls="hand: right"
                        microsoft-motion-controls="hand: right"
                        oculus-touch-controls="hand: right"
                        daydream-controls="right"
                        gearvr-controls="right">
                    </a-entity>

                    <a-text color="black" position="11.31 2.5 11.480" rotation="0 180 0" scale="2 2 2" value="Education"></a-text>
                    <a-entity id="education">
                        <a-entity>
                            <a-image src="img/DukeChapel.jpg" material="" position="0.10217 1.11 11.902" rotation="0 180 0" scale="1.5 2 1" geometry=""></a-image>
                            <a-text color="black" text="" position="4.154 1.5 11.90903" rotation="0 180 0" value="Duke University 2011-2015"></a-text>
                            <a-text color="black" text="" position="4.8515 1.14179 11.90869" rotation="0 180 0" value="Bachelor of Arts, Classical Civilization"></a-text>
                            <a-text color="black" text="" position="5.35845 0.81224 11.91593" rotation="0 180 0" value="Certificate, Markets and Management Studies"></a-text>
                            <a-plane color="white" position="3.096 1.110 11.923" rotation="0 180 0" scale="6 2 2"></a-plane>
                            <a-image src="img/kvilleGraduation.JPG" material="" position="6.07146 1.11 11.8814" rotation="0 180 0" scale="1.5 2 2" geometry=""></a-image>
                        </a-entity>
                        <a-entity>
                            <a-text color="black" position="11.31 1.5 11.91593" rotation="0 180 0" value="University of Glasgow 2016-2017"></a-text>
                            <a-text color="black" text="" position="11.04194 1.19274 11.91593" rotation="0 180 0" value="MLitt, Ancient Cultures"></a-text>
                            <a-text color="black" text="" position="12.03327 0.77006 11.91593" rotation="0 180 0" value="Dissertation: Religious Landscape of Carrawburgh, Class Representative"></a-text>
                            <a-plane color="white" position="9.707 1.110 11.923" rotation="0 180 0" scale="6 2 2"></a-plane>
                            <a-image src="img/UniGlasgowFront.JPG" material="" position="20.22498 1.11 11.8814" rotation="0 180 0" scale="1.5 2 2" geometry=""></a-image>
                        </a-entity>
                        <a-entity>
                            <a-text color="black" text="" position="18.3505 1.5 11.923" rotation="0 180 0" value="University of Glasgow 2017-2018"></a-text>
                            <a-text color="black" text="" position="18.18328 1.04867 11.923" rotation="0 180 0" value="MSc, Information Technology"></a-text>
                            <a-text color="black" text="" position="19.06992 0.55101 11.923" rotation="0 180 0" value="Dissertation: Remembering Mithras: Can VR be used to learn about the past?"></a-text>
                            <a-plane color="white" position="16.66 1.110 11.991" rotation="0 180 0" scale="6 2 2"></a-plane>
                            <a-image src="img/GlasgowTower.jpg" material="" position="13.15495 1.11 11.8814" rotation="0 180 0" scale="1.5 2 2" geometry=""></a-image>
                        </a-entity>
                    </a-entity>

                    <a-entity id="WorkExperience">
                        <a-text color="black" text="" position="-7.74817 4.5 12.06549" rotation="0 180 0" scale="2 2 2" value="Work Experience"></a-text>
                        <a-entity id="jpmorgan">
                            <a-plane color="white" material="" position="-5.78429 1.97804 11.97072" rotation="0 180 0" scale="6 4 2" geometry=""></a-plane>
                            <a-text color="black" text="" position="-3.42677 3.5 11.7939" rotation="0 180 0" value="JPMorgan, Software Engineer, July 2018-present"></a-text>
                            <a-text color="black" text="" position="-3.42677 2.95568 11.7939" rotation="0 180 0" value="--Collaborated in a Scrum team using Electron, Node.js, and React to create a client facing application."></a-text>
                            <a-text color="black" text="" position="-3.42677 2.15543 11.7939" rotation="0 180 0" value="--Gathered requirements from stakeholders in order to create Jira tickets for the team to implement."></a-text>
                            <a-text color="black" text="" position="-3.42677 1.42577 11.7939" rotation="0 180 0" value="--Worked on making the project accessible focusing on accessible interaction design and code implementation."></a-text>
                            <a-text color="black" text="" position="-3.42677 0.52865 11.7939" rotation="0 180 0" value="--Lead an AR/VR group in the company, and helped bring in echnologies such as Unity and A-Frame to develop XR experiences for proof of concepts for the enterprise."></a-text>
                        </a-entity>
                        
                        <a-entity id="hindsight">
                            <a-plane color="white" material="" position="-12.3855 1.99019 11.97072" rotation="0 180 0" scale="6 4 2" geometry=""></a-plane>
                            <a-text color="black" text="" position="-10.5829 3.5 11.7939" rotation="0 180 0" value="Center For Advanced Hindsight, Research Associate, January 2016-July 2016"></a-text>
                            <a-text color="black" text="" position="-9.53677 2.955 11.7939" rotation="0 180 0" value="--Studied human behavior in the field of behavioral economics to try and understand how to create better decision making."></a-text>
                            <a-text color="black" text="" position="-9.53677 2.15543 11.7939" rotation="0 180 0" value="--Collaborated with colleagues to conduct user studies."></a-text>
                            <a-text color="black" text="" position="-9.53677 1.42577 11.7939" rotation="0 180 0" value="--Responsible for the recruitment of people for studies, organizing and scheduling appointments, and conducting interviews with participants."></a-text>
                            <a-text color="black" text="" position="-9.53677 0.52865 11.7939" rotation="0 180 0" value="--Wrote a literature review on Individual Differences to understand the factors that relate to decision making."></a-text>
                        </a-entity>
                        <a-entity>
                            <a-plane color="white" material="" position="-18.58128 3.24243 11.97072" rotation="0 180 0" scale="6 6.5 1" geometry=""></a-plane>
                            <a-text color="black" text="" rotation="0 180 0" position="-15.66291 6 11.97072" value="Target, TGIFriday Durham, North Carolina 2015-2016"></a-text>
                            <a-text color="black" text="" rotation="0 180 0" position="-15.65014 5.49781 11.97072" value="Pink Smock Gift Shops, Durham, North Carolina 2012-2013"></a-text>
                            <a-text color="black" text="" rotation="0 180 0" position="-15.65014 4.87017 11.97072" value="Village One Stop Gas Station and Road Runner Drive In Kelliher, Minnesota 2009-2011, Seasonally 2011-2013"></a-text>
                            <a-text color="black" text="" rotation="0 180 0" position="-15.67568 4.25092 11.97072" value="Duke University OIT, Durham, North Carolina September- December 2011"></a-text>
                            <a-text color="black" text="" rotation="0 180 0" position="-16.22486 3.5 11.97072" value="-- Communicated with consumers, managers, and team members daily."></a-text> 
                            <a-text color="black" text="" rotation="0 180 0" position="-16.19847 2.95 11.97072" value="-- Worked in a team to stay on schedule and maintain standards of each establishment."></a-text>
                            <a-text color="black" text="" rotation="0 180 0" position="-16.17207 2.15 11.97072" value="-- Maintained and served a loyal customer base by preserving a high level of energy and providing excellent customer service."></a-text> 
                            <a-text color="black" text="" rotation="0 180 0" position="-16.10169 1.5 11.97072" value="-- Increased sales by interacting with the consumer and keeping fresh products in stock."></a-text>
                            <a-text color="black" text="" rotation="0 180 0" position="-16.02251 1 11.97072" value="-- Advised customers on which product was the most suitable for their needs."></a-text>
                            <a-text color="black" text="" rotation="0 180 0" position="-16.0401 0.5 11.97072" value="-- Assisted students with issues related to hardware and software on individual or University devices."></a-text>                    
                        </a-entity>
                    
                    </a-entity>
                    <a-entity>
                        <a-text color="white" text="" position="-4.02045 1.35125 -8.42117" value="Work in progress, Mayers CV. Walk around to see some of the work that I have done."></a-text>               
                    </a-entity>
                    <a-entity>
                        <a-text color="black" rotation="0 -90 0" position="8.878 2.160 -4.067" value="Interactable Keyboard."></a-text>
                        <a-video src="videos/interactableKeyboard.mp4" width="2" height="1" position="8.878 1 -3.114" rotation="0 90 0" scale="2 2 2"></a-video>
                    </a-entity>

                    <a-entity id="gltf-models">
                        <a-gltf-model src="models/carrawburgh/workingOnHQ.glb" scale="0.01 0.01 0.01" position="0 0 -44.87"></a-gltf-model>
                        <a-gltf-model src="models/mural/mural.glb" scale=".09 .09 .09" position="2.476 1.083 -5.547" rotation="4.645 0 0"></a-gltf-model>
                        <a-gltf-model src="models/lion/lion.glb" gltf-model="models/lion/lion.glb" scale="0.05 0.05 0.05" position="20.17056 1.80176 6.03387" rotation="-22.900000000000002 73.96 -93"></a-gltf-model>
                        <a-gltf-model src="models/lion/fountainBase.glb" gltf-model="models/lion/fountainBase.glb" scale="3 3 3" position="19.1014 0.20223 7.07302" rotation="-0.1283425461093044 68.17223733805073 0.8989707805602616"></a-gltf-model>                    
                        <a-gltf-model src="models/vase/vase.glb" position="-5.98 0 -3.841" rotation="23.4 59.02 -89.45" scale="0.2 0.2 0.2"></a-gltf-model>
                        <a-gltf-model src="models/building/argyleWithExtraBuildingsAndStreet.glb" position="-11.8 0.084 6.510" rotation="0 90 0" scale="0.020 0.020 0.020"></a-gltf-model>
                        <a-gltf-model src="models/mithras/mithras.glb" position="0 0 -7.172" rotation="0 0 -91.72" scale="0.1 0.1 0.1"></a-gltf-model>
                        <a-gltf-model src="models/prima-porta/PrimaPortaGLB.glb" scale="0.1 0.1 0.1" position="-4.74 0.843 -7.015" rotation="0 104 -88.17"></a-gltf-model>
                    </a-entity>

                    <a-entity id="mithraeum">
                        <a-entity position="-13 14 10" animation="property: position; to: -13 -10 10; dur: 5000; easing: linear; loop: true" >
                            <a-cone radius-bottom="1" geometry="radiusTop: 0" radius-top="0" position="-13.09613 12.06582 33.97992" color="blue" material="" scale="1 2 1" rotation="0 0 180"></a-cone>
                            <a-text color="black" text="" position="-8.60247 13.06582 32.22485" rotation="0 -180 0" value="Carrawburgh Mithraeum, Photogrammetry model and 3DS model" scale="3 3 3"></a-text>
                            <a-plane position="-15.90141 13.06582 32.93723" rotation="0 -180 0" scale="15 2 5" material="" geometry=""></a-plane>
                        </a-entity>
                        <a-gltf-model src="models/mithraeum/decimatedMithraeum.glb" gltf-model="models/mithraeum/decimatedMithraeum.glb" scale="0.4 0.4 0.4" position="-23.375 -5.09463 29.08174" rotation="-27.32664908096948 -92.48971207899314 12.89613405280457"></a-gltf-model>
                        <a-gltf-model src="models/mithraeum/mithraeumGLB.glb" gltf-model="models/mithraeum/mithraeumGLB.glb" position="-16.57273 -1.83976 26.03592" scale="0.03 0.03 0.03" rotation="-0.14553127996322912 87.91521704266864 -3.990651043086184"></a-gltf-model>
                        <a-plane position="-15.18407 0.10028 36.25004" rotation="0 90 0" scale="6 5 5" material="" geometry=""></a-plane>
                        <a-text color="black" text="" position="-15.00043 1.35965 39.17881" rotation="0 90 0" value="Carrawburgh Mithraeum, Photogrammetry model and 3DS model"></a-text>
                    </a-entity>
                </a-scene>
            </div>
        </>
    )
}