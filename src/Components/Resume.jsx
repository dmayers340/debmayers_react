import React from 'react';

const Resume = () => {
    return (
        <>
            <a href="https://debmayers.com/cv">Go to the interactive version of my CV in a WebXR A-Frame Scene</a>
            <object data="doc/MayersResume.pdf" type="application/pdf" width="100%" height="100%">
                <p><a href="doc/MayersResume.pdf">Download CV</a></p>
            </object>
        </>
    )
}

export default Resume;