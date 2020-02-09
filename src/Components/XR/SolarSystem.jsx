import React from 'react';
import 'aframe';
require('aframe-teleport-controls');

const SolarSystem = () => {
    return (
        <div>
            <a-scene>
                <a-entity 
                    camera="" 
                    position="-20 1.6 1.39589" 
                    wasd-controls="acceleration: 200" 
                    rotation="0 0 0" 
                    look-controls="" aframe-injected="" 
                    data-aframe-inspector-original-camera=""
                ></a-entity>
                <a-sky src="url(img/stars.jpg)"></a-sky>
                <a-entity light="type: ambient; color: #FFFFFF"></a-entity>

                {/* Sun */}
                <a-sphere 
                    position="0 0 0" 
                    scale="10 10 10" 
                    src="url(img/sun.jpg)"
                    animation="property: rotation; from: 0 0 0; to: 0 360 0; dur: 35000; easing: linear; loop: true;"
                >
                </a-sphere>

                {/* Mercury */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 12000; fill: forwards; easing: linear; loop: true"
                >            
                    <a-sphere 
                        position="0 0 11" 
                        scale="0.2 0.2 0.2" 
                        rotation="0 141.08400000049733 0" 
                        src="url(img/mercury.jpg)" 
                        material="" 
                        animation="property: rotation; from: 0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true" geometry="">
                    </a-sphere>
                </a-entity>

                {/* Venus */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 15000; fill: forwards; easing: linear; loop: true"
                > 
                    <a-sphere 
                        position="0 0 13" 
                        scale="0.4 0.4 0.4" 
                        src="url(img/venus.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                </a-entity>

                {/* Earth */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 23000; fill: forwards; easing: linear; loop: true"
                > 
                    <a-sphere 
                        position="0 0 15" 
                        scale="0.5 0.5 0.5" 
                        src="url(img/earth.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true">
                    </a-sphere>

                    {/* Moon */}
                    <a-entity 
                        position="0 0.2 15" 
                        rotation="0 0 0" 
                        animation="property: rotation; to: 0 360 0; dur: 4000; fill: forwards; easing: linear; loop: true;"
                    >
                        <a-sphere 
                            position="0 0.3 0.3" 
                            scale="0.2 0.2 0.2" 
                            src="url(img/moon.jpg)" 
                            animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                        ></a-sphere>
                    </a-entity>
                </a-entity>

                {/* Mars */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 30000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 17" 
                        scale="0.3 0.3 0.3" 
                        src="url(img/mars.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                </a-entity>

               {/* Astroid belt */}
               <a-entity
                position="0 0 0"
                rotation="0 0 0"
                animation="property:rotation; to: 0 360 0; dur: 35000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-13.17451 0 -1.24488" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-12.86022 0 1.1683" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-12.01311 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-12 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-12 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-10 0 8" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-9 0 8.5" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-8.5 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-8.01028 0 12" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-7.6 0 11" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-7 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-6.5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-6.1524 0 10.39093" geometry=""></a-sphere>                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-5.5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-5.4 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-4.5 0 11" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-4 0 12" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-3 0 11.306" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-2 0 12" geometry=""></a-sphere>
                </a-entity>
                <a-entity
                    position="0 0 0"
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 30000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="1 0 12" ></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1"position="1.5 0 13"></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="2.3 0 11"></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="-0.980 0 12"></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-8.18789 0 5" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-8.18789 0 4.51764" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-3.50358 0 -12.27607" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="13.17451 0 -1.24488" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12.86022 0 1.1683" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12.01311 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="10 0 8" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="9 0 8.5" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="8.5 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="8.01028 0 12" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="7.6 0 11" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="7 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="6.5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="6.1524 0 10.39093" geometry=""></a-sphere>                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-5.5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="5.4 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="4.5 0 11" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="4 0 12" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="3 0 11.306" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="2 0 12" geometry=""></a-sphere>
                </a-entity>
                <a-entity
                    position="0 0 0"
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 20000; fill: forwards; easing: linear; loop: true"
                >

                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-3.50358 0 -12.27607" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="13.17451 0 -1.24488" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12.86022 0 1.1683" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12.01311 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="10 0 8" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="9 0 8.5" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="8.5 0 6.59409" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="8.01028 0 12" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="7.6 0 11" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="7 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="6.5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="6.1524 0 10.39093" geometry=""></a-sphere>                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-5.5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="5.4 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="5 0 9.64998" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="4.5 0 11" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="4 0 12" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="3 0 11.306" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="2 0 12" geometry=""></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="1 0 -12" ></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1"position="1.5 0 -13"></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="2.3 0 -11"></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="-0.980 0 -12"></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-8.18789 0 -5" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-8.18789 0 -4.51764" geometry=""></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="1 0 -12" ></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1"position="1.5 0 -13"></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="2.3 0 -11"></a-sphere>
                    <a-sphere color="gray" scale="0.2 0.1 0.1" position="-0.980 0 -12"></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-8.18789 0 -5" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-8.18789 0 -4.51764" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-10.48073 0 -5.9879" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="10.89355 0 -6.76588" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="11 0 -7" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="12.89355 0 -8" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="13 0 -5" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-9.8769 0 -9.30251" geometry=""></a-sphere>
                    <a-sphere color="gray" material="" scale="0.2 0.1 0.1" position="-6.63237 0 -11.50535" geometry=""></a-sphere>
                </a-entity>

                {/* Ceres */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 35000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 18" 
                        scale="0.15 0.15 0.15"
                        src="url(img/ceres.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                </a-entity>

                {/* Jupiter */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 50000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="-19.7 0 30" 
                        scale="5 5 5" 
                        src="url(img/jupiter.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 2000; easing: linear; loop: true">
                    </a-sphere>
                </a-entity>


                {/* Saturn */}
                
                <a-entity 
                    position="-2 0 -11" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 57000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 35" 
                        scale="4 4 4" 
                        src="url(img/saturn.jpg)"
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                    <a-entity 
                        geometry="primitive: torus; radius: 5; radiusTubular: 0.15; segmentsTubular: 25" 
                        material="src: img/saturn-ring.png" 
                        position="0.09094 0 35" 
                        rotation="90 0 0" 
                        scale="1 1 0.1"
                    ></a-entity>
                    <a-entity 
                        geometry="primitive: torus; radius: 2.6; radiusTubular: 0.04; segmentsTubular: 25" 
                        material="src: img/saturn-ring.png" 
                        position="0 0 35" 
                        rotation="90 0 0" 
                        scale="1 1 0.1"
                    ></a-entity>
                </a-entity>

                {/* Uranus */}

                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 65000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 40" 
                        scale="1.5 1.5 1.5" 
                        rotation="0 0 0" 
                        src="url(img/uranus.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                    <a-entity
                        geometry="primitive: torus; radius: 2; radiusTubular: 0.01;segmentsTubular: 50"
                        material="color: #FFFFFF;"
                        position="0 0 40"
                        rotation="-10 90 0"
                        scale="1 1 0.2">
                    </a-entity>
                </a-entity>

                {/* Neptune */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 70000; fill: forwards; easing: linear;loop: true"
                    >
                    <a-sphere 
                        position="0 0 45" 
                        scale="1.5 1.5 1.5" 
                        src="url(img/neptune.jpg)" 
                        animation="property:rotation; from: 0 0 0; to: 0 360 0; dur: 15000; loop: true; easing: linear"
                    >
                    </a-sphere>
                </a-entity>

                {/* Pluto */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 88000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="-3 0 50" 
                        scale="0.4 0.4 0.4" 
                        src="url(img/pluto.jpg)"
                        animation="property:rotation; from: 0 0 0; to: 0 360 0; dur: 15000; loop: true; easing: linear"
                    >
                    </a-sphere>
                </a-entity>

                {/* Haumea */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 92000; fill: forwards; easing: linear; loop: true"
                >                
                    <a-sphere 
                        position="-2 0 55" 
                        scale="0.2 0.40 0.2" 
                        src="url(img/haumea.jpg)"                     
                        animation="property:rotation; from: 0 0 0; to: 0 360 0; dur: 15000; loop: true; easing: linear"
                    >
                    </a-sphere>
                </a-entity>

                {/* Makemake */}
                <a-entity 
                    position="2 0 0" 
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 100000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 60" 
                        scale="0.2 0.2 0.2" 
                        src="url(img/makemake.jpg)"
                        animation="property:rotation; from: 0 0 0; to: 0 360 0; dur: 15000; loop: true; easing: linear"
                    >
                    </a-sphere>
                </a-entity>

                {/* Eris */}
                <a-entity 
                    position="-1 0 0" 
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 110000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 65" 
                        scale="0.3 0.3 0.3" 
                        src="url(img/eris.jpg)" 
                        animation="property: rotation; from: 0 0 0; to: 0 360 0; dur: 15000; loop: true; easing: linear"
                    >
                    </a-sphere>
                </a-entity>
            </a-scene>
        </div>
    )
}

export default SolarSystem;