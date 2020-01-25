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

                <a-text color="black" position="-3.62 0.949 -5.669" value="Work in progress, Mayers CV. Walk around to see some of the work that I have done."></a-text> 
                <a-gltf-model src="models/carrawburgh/carrawburgh.gltf" scale="0.01 0.01 0.01" position="0 0 -44.87"></a-gltf-model>
                <a-obj-model src="models/mural/mural.obj"  mtl="models/mural/mural.mtl" scale=".09 .09 .09" position="2.476 1.083 -5.547" rotation="4.645 0 0" ></a-obj-model>
                <a-obj-model src="models/lion/lion.obj" scale=".06 .06 .06" mtl="models/lion/lion.mtl" position="9.891 2.128 4.265" rotation="-22.9 73.96 -93"></a-obj-model>
                <a-obj-model src="models/mithras/mithras.obj" mtl="models/mithras/mithras.mtl" position="0 0 -7.172" rotation="0 0 -91.72" scale="0.1 0.1 0.1"></a-obj-model>
                <a-gltf-model src="models/vase/vase.glb" position="-5.98 0 -3.841" rotation="23.4 59.02 -89.45" scale="0.2 0.2 0.2"></a-gltf-model>
                <a-gltf-model src="models/prima-porta/PrimaPortaGLB.glb" scale="0.1 0.1 0.1" position="-4.74 0.843 -7.015" rotation="0 104 -88.17"></a-gltf-model>
                <a-gltf-model src="models/building/argyleWithExtraBuildingsAndStreet.glb" position="-11.8 0.084 6.510" rotation="0 90 0" scale="0.020 0.020 0.020"></a-gltf-model>
                <a-video src="https://www.youtube.com/embed/hHQXRn7V1MU" position="8.878 1 0.356" rotation="-180 90 0" scale="2 2 2"></a-video>                
            </a-scene>
        </div>
    )
}