import { faCube, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const interests = [
    "VR",
    "AR",
    "Ancient History",
    "Classical Sculpture",
    "UI",
    "UX",
    "HCI",
    "Unity",
    "3D Modelling"
];

export const facts = [
    "I am an ancient historian, focused mainly on the Romans and the frontiers.",
    "I love travelling",
    "I am a VR/AR designer and developer. I actively create experiences as a hobby.",
    "My coffee cup is an extension of my hand."
];
export const education = [
    {
        "name": "University of Glasgow",
        "degree": "MSc Information Technology",
        "year": "2017-2018"
    },
    {
        "name": "University of Glasgow",
        "degree": "MLitt Ancient Cultures",
        "year": "2016-2017"
    },
    {
        "name": "Duke University",
        "degree": "BA Classical Civilization",
        "year": "2011-2015"
    },
    {
        "name": "Duke University",
        "degree": "Certificate in Markets and Management Studies",
        "year": "2011-2015"
    }
];
export const models = [
    {
        "name": "(Re)created Mithraeum",
        "description": "Temple to Mithras: Carrawburgh",
        "mainImageUrl": "/img/Mithraeum2.jpg",
        "mainImageAlt": "(Re)Created Temple to Mithras at Carrawburgh",
        "extraUrls": "",
        "urlName": "recreatedMithraeum"
    },
    {
        "name": "(Re)created Carrawburgh",
        "description": "Carrawburgh",
        "mainImageUrl": "/img/carrawburgh3.png",
        "mainImageAlt": "(Re)Created 3d model of Carrawburgh around the third centry with the fort, mithraeum, shrine to nymphs and genius loci, and Coventina's well",
        "extraUrls": "",
        "urlName": "recreatedCarrawburgh"
    }
]

export const experiences = [
    {
        "name": "Mithraeum",
        "description": "Temple to Mithras: Carrawburgh",
        "buildURL": "webgl/webgl/Build/webgl.json",
        "unityLoaderURL": "webgl/webgl/Build/UnityLoader.js",
        "image": "/img/Mithraeum2.jpg",
        "imageAlt": "(Re)Created Temple to Mithras at Carrawburgh",
        "shortcutIcon": "webgl/webgl/TemplateData/favicon.ico",
        "styleCSS": "webgl/webgl/TemplateData/style.css",
        "unityProgress": "webgl/webgl/TemplateData/UnityProgress.js",
        "unityLoader": "webgl/webgl/Build/UnityLoader.js"
    },
    {
        "name": "Carrawburgh",
        "description": "Carrawburgh 3D model Exploration",
        "url": "",
        "image": "/img/carrawburgh3.png",
        "imageAlt": "(Re)Created 3d model of Carrawburgh"
    },
    {
        "name": "Space Shooter",
        "description": "Unity Tutorial",
        "url": "",
        "image": "/img/SpaceShooter.png",
        "imageAlt": "Spaceship in field of asteroids"
    },
    {
        "name": "Roll the Ball",
        "description": "Unity Tutorial",
        "url": "",
        "image": "/img/RollBall.png",
        "imageAlt": "Roll the ball tutorial with balls in a maze with squares in the air"
    }

];

export const links = [
    {
        title: "WebXR",
        links: [
            {
                "name": "Solar System",
                "href": "/solarsystem"
            },
            {
                "name": "Carrawburgh Roman Fort Recreation",
                "href": "/webvr"
            },
            {
                "name": "CV",
                "href": "/cv"
            },
            {
                "name":"Office Simulation",
                "href": "/officesimulation"
            }
        ]
    },
    {
        title: "WebAR",
        links: [
            {
                "name": "AR Mithraeum",
                "href": "/ar/mithraeum"
            },
            {
                "name": "AR Solar System",
                "href": "/ar/solarsystem"
            },
            {
                "name": "AR Science Centre Map",
                "href": "/ar/science"
            },
            {
                "name": "AR Altars",
                "href": "/ar"
            },
            {
                "name": "Code Week Test",
                "href": "/ar/codeweek"
            }
        ]
    },
    {
        title: "Projects",
        links: [
            {
                "name": "Presentations",
                "href": "/presentations"
            },
            {
                "name": "3D Modelling",
                "href": "/models"
            },
            {
                "name": "Unity XR Projects",
                "href": "/projects"
            },
            {
                "name": "WebGL Experiences",
                "href": "/experiences"
            }
        ]
    }
]

export const socialMedia = [
    {
        "href": "https://twitter.com/debmayers24",
        "ariaLabel": "Twitter",
        "fontAwesomeAlt": "Twitter Bird Logo",
        "icon": ["fab", "twitter"],
        "name": "Deb Mayers Twitter"
    },
    {
        "href": "https://www.linkedin.com/in/deborahmayers/",
        "ariaLabel": "LinkedIn",
        "fontAwesomeAlt": "LinkedIn Logo",
        "icon": ["fab", "linkedin"],
        "name": "Deb Mayers LinkedIn"
    },
    {
        "href": "https://github.com/dmayers340",
        "ariaLabel": "Github",
        "fontAwesomeAlt": "Github Logo",
        "icon": ["fab", "github"],
        "name": "Deb Mayers Github"
    },
    {
        "href": "https://sketchfab.com/debmayers24",
        "ariaLabel": "Sketchfab",
        "fontAwesomeAlt": "cube",
        "icon": faCube,
        "name": "Deb Mayers Sketchfab"
    },
    {
        "href": "mailto:dmayers340@gmail.com.com?Subject=Hello%20Contacting%20After%20Visiting%20Your%20Website",
        "ariaLabel": "Envelope",
        "fontAwesomeAlt": "envelope",
        "icon": faEnvelope,
        "name": "Email Deb Mayers"
    }
]
