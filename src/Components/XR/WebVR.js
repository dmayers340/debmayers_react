import React from 'react';
import 'aframe';
require('aframe-teleport-controls');

export const WebVR = () => {
    return (
        <div className = "arcode">
            <h1>Web VR example</h1>
            <a-scene physics="debug: true">
            <a-assets>
                <a-asset-item id="carrawburgh" src="models/carrawburgh/carrawburgh.gltf" />
            </a-assets>
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
            <a-gltf-model src="#carrawburgh"></a-gltf-model>
        </a-scene>
        </div>
    )
}