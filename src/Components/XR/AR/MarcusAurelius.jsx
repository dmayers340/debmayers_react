import React from "react";
import { Helmet } from 'react-helmet';

const MarcusAurelieus = () => {
    return (
        <>
            <Helmet>
                <title>Marcus Aurelieus</title>
            </Helmet>
            <p>
                Use the <a href="https://en.wikiversity.org/wiki/File:Pattern-hiro.png">hiro image</a> for tracking.
            </p>
            <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%"}}
                title="Marcus Aurelius"
                src="/ar/marcus.html"
            />
        </>
    );
};

export default MarcusAurelieus;

// import React, { Suspense } from 'react';
// import { useLoader } from '@react-three/fiber';
// import {
//  ZapparCamera, InstantTracker, ZapparCanvas, Loader, BrowserCompatibility,
// } from '@zappar/zappar-react-three-fiber';
// import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';



// let action;

// const Model = () => {
//   const gltf = useLoader(OBJLoader, '/models/marcus-aurelius-ncma/marcus.obj', '/models/marcus-aurelius-ncma/marcus.mtl');

//   gltf.scene.rotateX(Math.PI / 2);

//   return <primitive object={gltf.scene} />;
// };

// const Marcus = () => {
//   return (
//     <>
//       <BrowserCompatibility />
//       <ZapparCanvas>
//         <ZapparCamera />
//         <Suspense fallback={null}>
//           <InstantTracker>
//             <React.Suspense fallback={null}>
//               <Model />
//             </React.Suspense>
//           </InstantTracker>
//         </Suspense>
//         <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
//         <Loader />
//       </ZapparCanvas>
//       <div
//         id="zappar-button"
//         role="button"
//         onKeyPress={() => action.play() }
//         tabIndex={0}
//         onClick={() => action.play() }
//       >Play Animation</div>
//     </>
//   );
// }

// export default Marcus;