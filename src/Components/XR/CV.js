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

                <a-text color="black" position="-4.923 0.949 -5.669" value="Work in progress, Mayers CV. Walk around to see some of the work that I have done."></a-text> 
                <a-gltf-model src="models/carrawburgh/carrawburgh.gltf" scale="0.01 0.01 0.01" position="0 0 -44.87"></a-gltf-model>
                <a-obj-model src="models/mural/mural.obj"  mtl="models/mural/mural.mtl" scale=".09 .09 .09" position="2.476 1.083 -5.547" rotation="4.645 0 0" ></a-obj-model>
                <a-obj-model src="models/lion/lion.obj" scale=".06 .06 .06" mtl="models/lion/lion.mtl" position="9.891 2.128 4.265" rotation="-22.9 73.96 -93"></a-obj-model>

            </a-scene>
        </div>
    )
}