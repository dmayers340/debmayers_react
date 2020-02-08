import React from 'react';
import 'aframe';
require('aframe-teleport-controls');

const SolarSystem = () => {
    return (
        <div>
            <a-scene>
                <a-entity 
                    camera="" 
                    position="-8.93728 1.6 1.39589" 
                    wasd-controls="acceleration:100" 
                    rotation="-4.354479242994258 -61.19189251997194 0" 
                    look-controls="" 
                    aframe-injected="" 
                    data-aframe-inspector-original-camera=""
                >
                </a-entity>
                <a-sky src="url(img/stars.jpg)"></a-sky>
                <a-entity light="type: ambient; color: #FFFFFF"></a-entity>
                <a-entity light="type: point; intensity: 1;color: #BABABA" position="0 0 0"></a-entity>

                {/* Sun */}
                <a-sphere 
                    position="0 0 0" 
                    scale="4 4 4" 
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
                        position="-4 0 6" 
                        scale="0.4 0.4 0.4" 
                        rotation="0 0 0" 
                        src="url(img/mercury.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                </a-entity>

                {/* Venus */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 15000; fill: forwards; easing: linear; loop: true"
                > 
                    <a-sphere 
                        position="0 0 8.5" 
                        scale="0.4 0.4 0.4" 
                        src="url(img/venus.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 2000; easing: linear; loop: true"
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
                        position="0 0 10.5" 
                        scale="0.5 0.5 0.5" 
                        src="url(img/earth.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true">
                    </a-sphere>

                    {/* Moon */}
                    <a-entity 
                        position="0 0.2 10.5" 
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
                        position="-4 0 12.5" 
                        scale="0.4 0.4 0.4" 
                        src="url(img/mars.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                </a-entity>

                {/* Ceres */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 35000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 14" 
                        scale="0.2 0.2 0.2"
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
                        position="-4 0 24" 
                        scale="2.5 2.5 2.5" 
                        src="url(img/jupiter.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true">
                    </a-sphere>
                </a-entity>


                {/* Saturn */}
                <a-entity 
                    position="-2 0 -11" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 57000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 31" 
                        scale="1.8 1.8 1.8" 
                        src="url(img/saturn.jpg)"
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                    <a-entity 
                        geometry="primitive: torus; radius: 3; radiusTubular: 0.1; segmentsTubular: 25; segmentsRadial: 2" 
                        material="src: img/saturn-ring.png" 
                        position="0 0 31" 
                        rotation="90 0 0" 
                        scale="1 1 0.1"
                    >
                    </a-entity>
                    <a-entity 
                        geometry="primitive: torus; radius: 2.6; radiusTubular: 0.04; segmentsTubular: 25"
                        material="src: img/saturn-ring.png" 
                        position="0 0 31" 
                        rotation="90 0 0" 
                        scale="1 1 0.1"
                    >
                    </a-entity>
                    <a-entity 
                        geometry="primitive: torus; radius: 2.4; radiusTubular: 0.04; segmentsTubular: 25" 
                        material="src: img/saturn-ring.png" 
                        position="0 0 31" 
                        rotation="90 0 0" 
                        scale="1 1 0.1"
                    >
                    </a-entity>
                </a-entity>

                {/* Uranus */}

                <a-entity 
                    position="-5 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 65000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="0 0 36" 
                        scale="1 1 1" 
                        rotation="0 0 0" 
                        src="url(img/uranus.jpg)" 
                        animation="property:rotation; from:0 0 0; to: 0 360 0; dur: 15000; easing: linear; loop: true"
                    >
                    </a-sphere>
                    <a-entity
                        geometry="primitive: torus; radius: 1.5; radiusTubular: 0.01;segmentsTubular: 50"
                        material="color: #FFFFFF;"
                        position="0 0 36"
                        rotation="-10 90 0"
                        scale="1 1 0.1">
                    </a-entity>
                </a-entity>

                {/* Neptune */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0"
                    animation="property:rotation; to: 0 360 0; dur: 70000; fill: forwards; easing: linear;loop: true"
                    >
                    <a-sphere 
                        position="0 0 40" 
                        scale="1 1 1" 
                        src="url(img/neptune.jpg)" 
                        animation="property:rotation; from: 0 0 0; to: 0 360 0; dur: 15000; loop: true; easing: linear"
                    >
                    </a-sphere>
                    <a-entity
                        geometry="primitive: torus; radius: 1.6; radiusTubular: 0.01;segmentsTubular: 50"
                        material="src: img/saturn-ring.png" 
                        position="0 0 40"
                        rotation="90 0 0"
                        scale="1 1 0.1">
                    </a-entity>
                    <a-entity
                        geometry="primitive: torus; radius: 2; radiusTubular: 0.01;segmentsTubular: 50"
                        material="src: img/saturn-ring.png" 
                        position="0 0 40"
                        rotation="90 0 0"
                        scale="1 1 0.1">
                    </a-entity>
                </a-entity>

                {/* Pluto */}
                <a-entity 
                    position="0 0 0" 
                    rotation="0 0 0" 
                    animation="property:rotation; to: 0 360 0; dur: 88000; fill: forwards; easing: linear; loop: true"
                >
                    <a-sphere 
                        position="-3 0 46" 
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
                        position="-2 0 50" 
                        scale="0.4 0.4 0.4" 
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
                        position="0 0 55" 
                        scale="0.4 0.4 0.4" 
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
                        position="0 0 60" 
                        scale="0.4 0.4 0.4" 
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