import * as THREE from "three";
import PointerLockControls from './PointerLockControls';
import { DDSLoader } from './DDSLoader';

let OBJLoader = require('three-obj-loader');
let carrawburgh;
export const CarrawburghExperience = () => {
    // if the experience == something frm config return config suttf 
    let container;
    let camera, scene, renderer, mesh;
    let meshFloor, AmbientLight, light;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let loadingManager = null;
    loadingManager = new THREE.LoadingManager();
    let controls;
    let objects = [];
    let raycaster;
    let blocker = document.getElementById( 'blocker' );
    let instructions = document.getElementById( 'instructions' );
    let havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
    if ( havePointerLock ) {
        let element = document.body;
        let pointerlockchange = event => {
            if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
                controlsEnabled = true;
                controls.enabled = true;
                blocker.style.display = 'none';
            } else {
                controls.enabled = false;
                blocker.style.display = '-webkit-box';
                blocker.style.display = '-moz-box';
                blocker.style.display = 'box';
                instructions.style.display = '';
            }
        };
        let pointerlockerror = event => {
            instructions.style.display = '';
        };
        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'pointerlockerror', pointerlockerror, false );
        document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
        document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );
        instructions.addEventListener( 'click', function ( event ) {
            instructions.style.display = 'none';
            // Ask the browser to lock the pointer
            element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
            element.requestPointerLock();
        }, false );
    } else {
        instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
    } 
    init();
    animate();

    let controlsEnabled = false;
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;
    let canJump = false;
    let prevTime = performance.now();
    let velocity = new THREE.Vector3();

    //set up scene

    const init = () => {
        scene = new THREE.Scene();
        container = document.createElement( 'div' );
        document.body.appendChild( container );
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
        camera.position.z = 250;
        scene.add(camera);
        let AmbientLight = new THREE.AmbientLight( 0x404040 ); 
        scene.add( AmbientLight );;
        let light = new THREE.PointLight( 0xff0000, 1, 100 );
        light.position.set( 0, 0, 1 );
        scene.add( light );
        controls = PointerLockControls( camera );
        scene.add( controls.getObject() );
        let onKeyDown = event => {
            switch ( event.keyCode ) {
                case 38: // up
                case 87: // w
                    moveForward = true;
                    break;
                case 37: // left
                case 65: // a
                    moveLeft = true; break;
                case 40: // down
                case 83: // s
                    moveBackward = true;
                    break;
                case 39: // right
                case 68: // d
                    moveRight = true;
                    break;
                case 32: // space
                    if ( canJump === true ) velocity.y += 350;
                    canJump = false;
                    break;
                default: 
                    moveForward = false;
                    moveLeft = false;
                    moveBackward = false;
                    moveRight = false;
                    canJump = false;
            }
        };
        const onKeyUp = event => {
            switch( event.keyCode ) {
                case 38: // up
                case 87: // w
                    moveForward = false;
                    break;
                case 37: // left
                case 65: // a
                    moveLeft = false;
                    break;
                case 40: // down
                case 83: // s
                    moveBackward = false;
                    break;
                case 39: // right
                case 68: // d
                    moveRight = false;
                    break;
                default:
                    moveForward = false;
                    moveLeft = false;
                    moveBackward = false;
                    moveRight = false;
                    canJump = false;
            }
        };
        document.addEventListener( 'keydown', onKeyDown, false );
        document.addEventListener( 'keyup', onKeyUp, false );
        raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
        let manager = new THREE.LoadingManager();
        let onProgress = xhr => {
            if ( xhr.lengthComputable ) {
                let percentComplete = xhr.loaded / xhr.total * 100;
                console.log( Math.round(percentComplete, 2) + '% downloaded' );
            }
        };
        let onError =  xhr => { };
        THREE.Loader.Handlers.add( /\.dds$/i, DDSLoader );
        let texture = new THREE.TextureLoader().load("img/black.jpg");
        let loader = OBJLoader( manager );
        loader.load( "{% static 'obj/car_obj.obj' %}", function ( object ) {
                object.traverse ( function( child ){
                    if( child instanceof THREE.Mesh ) {
                        child.material.map = texture;
                        
                    }
                } );
        
                scene.add( object );
            }, onProgress, onError);
        renderer = new THREE.WebGLRenderer(); 
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor(new THREE.Color(0xEEEEEE));
        container.appendChild( renderer.domElement );
        window.addEventListener( 'resize', onWindowResize, false );
    }
    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    const animate = () => {
        requestAnimationFrame( animate );
        if ( controlsEnabled ) {
            raycaster.ray.origin.copy( controls.getObject().position );
            raycaster.ray.origin.y -= 10;
            let intersections = raycaster.intersectObjects( objects );
            let isOnObject = intersections.length > 0;
            let time = performance.now();
            let delta = ( time - prevTime ) / 1000;
            velocity.x -= velocity.x * 10.0 * delta;
            velocity.z -= velocity.z * 10.0 * delta;
            velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
            if ( moveForward ) velocity.z -= 2000.0 * delta;
            if ( moveBackward ) velocity.z += 2000.0 * delta;
            if ( moveLeft ) velocity.x -= 2000.0 * delta;
            if ( moveRight ) velocity.x += 2000.0 * delta;
            if ( isOnObject === true ) {
                velocity.y = Math.max( 0, velocity.y );
                canJump = true;
            }
            controls.getObject().translateX( velocity.x * delta );
            controls.getObject().translateY( velocity.y * delta );
            controls.getObject().translateZ( velocity.z * delta );
            if ( controls.getObject().position.y < 10 ) {
                velocity.y = 0;
                controls.getObject().position.y = 10;
                canJump = true;
            }
            prevTime = time;
        }
        renderer.render( scene, camera );
    }
};