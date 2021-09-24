import React from 'react';
import { Helmet } from 'react-helmet';

export const UnderConstruction = () => {
    return(
        <>
            <Helmet>
                <title>404 Error Deb Mayers</title>
            </Helmet>
            <h1>Cannot Find Page</h1>
            <p> Oh no! The page you are searching for does not exist</p>
            <img src= "/img/mithraeum_reconstructed.jpg" alt="Recreated of the Temple to Mithras at Carrawburgh with the cult statue displaying Mithras killing the bull"/>
        </>
    )
}