import React from 'react';

export const Experience = (props) => {
    console.log(props);
    console.log('Experienceasdsf');
    return(
    <div>
        <h1>{props.match.params.id}</h1>
        Clicked!
    </div>
    )

}