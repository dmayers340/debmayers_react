import React from 'react';
import 'aframe';
require('aframe-teleport-controls');

export const CV = () => {
    return (
        <div className = "a-frame-cv">
            <a-scene physics="debug: true">
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
                        <a-text color="black" position="4.154 1.5 11.480" rotation="0 180 0" value="Duke University 2011-2015"></a-text> 
                        <a-text color="black" position="4.844 1 11.480" rotation="0 180 0" value="Bachelor of Arts, Classical Civilization"></a-text> 
                        <a-text color="black" position="5.259 0.5 11.480" rotation="0 180 0" value="Certificate, Markets and Management Studies"></a-text> 
                        <a-plane color="white" position="3.096 1.110 11.923" rotation="0 180 0" scale="6 2 2"></a-plane>
                    </a-entity>
                    <a-entity>
                        <a-text color="black" position="11.31 1.5 11.480" rotation="0 180 0" value="University of Glasgow 2016-2017"></a-text> 
                        <a-text color="black" position="10.77 1 11.480" rotation="0 180 0" value="MLitt, Ancient Cultures"></a-text> 
                        <a-text color="black" position="11.75 0.6 11.480" rotation="0 180 0" value="Dissertation: Religious Landscape of Carrawburgh, Class Representative"></a-text> 
                        <a-plane color="white" position="9.707 1.110 11.923" rotation="0 180 0" scale="6 2 2"></a-plane>
                    </a-entity>
                    <a-entity>
                        <a-text color="black" position="18.77 1.5 11.923" rotation="0 180 0" value="University of Glasgow 2017-2018"></a-text> 
                        <a-text color="black" position="18.48 1 11.923" rotation="0 180 0" value="MSc, Information Technology"></a-text> 
                        <a-text color="black" position="18.85 0.5 11.923" rotation="0 180 0" value="Dissertation: Remembering Mithras: Can VR be used to learn about the past?"></a-text> 
                        <a-plane color="white" position="16.66 1.110 11.991" rotation="0 180 0" scale="6 2 2"></a-plane>
                    </a-entity>
                </a-entity>
               
                <a-entity>
                    <a-text color="black" position="-3.62 0.949 -5.669" value="Work in progress, Mayers CV. Walk around to see some of the work that I have done."></a-text> 
                </a-entity>

                <a-entity>
                    <a-text color="black" rotation="0 -90 0" position="8.878 2.160 -4.067" value="Interactable Keyboard."></a-text> 
                    <a-video src="videos/interactableKeyboard.mp4" width="2" height="1" position="8.878 1 -3.114" rotation="0 90 0" scale="2 2 2"></a-video>
                </a-entity>

                <a-entity id="gltf-models">
                    <a-gltf-model src="models/carrawburgh/carrawburgh.gltf" scale="0.01 0.01 0.01" position="0 0 -44.87"></a-gltf-model>
                    <a-gltf-model src="models/mural/mural.glb" scale=".09 .09 .09" position="2.476 1.083 -5.547" rotation="4.645 0 0"></a-gltf-model>
                    <a-gltf-model src="models/lion/lion.glb" gltf-model="models/lion/lion.glb" scale="0.05 0.05 0.05" position="20.17056 1.80176 6.03387" rotation="-22.900000000000002 73.96 -93"></a-gltf-model>
                    <a-gltf-model src="models/lion/fountainBase.glb" gltf-model="models/lion/fountainBase.glb" scale="3 3 3" position="19.1014 0.20223 7.07302" rotation="-0.1283425461093044 68.17223733805073 0.8989707805602616"></a-gltf-model>                    <a-gltf-model src="models/vase/vase.glb" position="-5.98 0 -3.841" rotation="23.4 59.02 -89.45" scale="0.2 0.2 0.2"></a-gltf-model>
                    <a-gltf-model src="models/building/argyleWithExtraBuildingsAndStreet.glb" position="-11.8 0.084 6.510" rotation="0 90 0" scale="0.020 0.020 0.020"></a-gltf-model>
                    <a-gltf-model src="models/mithras/mithras.glb" position="0 0 -7.172" rotation="0 0 -91.72" scale="0.1 0.1 0.1"></a-gltf-model>
                    <a-gltf-model src="models/prima-porta/PrimaPortaGLB.glb" scale="0.1 0.1 0.1" position="-4.74 0.843 -7.015" rotation="0 104 -88.17"></a-gltf-model>                
                </a-entity>

                <a-entity id="mithraeum">
                    <a-gltf-model src="models/mithraeum/decimatedMithraeum.glb" gltf-model="models/mithraeum/decimatedMithraeum.glb" scale="0.4 0.4 0.4" position="-23.375 -5.09463 29.08174" rotation="-27.32664908096948 -92.48971207899314 12.89613405280457"></a-gltf-model>
                    <a-gltf-model src="models/mithraeum/mithraeum-3ds.glb" gltf-model="models/mithraeum/mithraeum-3ds.glb" position="-16.57273 -1.68627 30.1039" scale="0.02 0.02 0.02" rotation="0 87.91 0"></a-gltf-model>
                    <a-plane position="-15.18407 0.10028 36.25004" rotation="0 90 0" scale="6 5 5" material="" geometry=""></a-plane>                    
                    <a-text color="black" text="" position="-15.00043 1.35965 39.17881" rotation="0 90 0" value="Carrawburgh Mithraeum, Photogrammetry model and 3DS model"></a-text>                </a-entity>
            </a-scene>
        </div>
    )
}