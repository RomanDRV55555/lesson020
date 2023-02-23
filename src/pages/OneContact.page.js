import React from 'react';

const OneContactPage = (props) => {
    return (
        <div>
            <div id='firstName'> {props.firstName}</div>
            <div id='lastName' >{props.lastName}</div>
            <div id='phone' >{props.phone}</div>
            <a href='/contacts'>До списку контактів</a>
        </div>
    );
};

export { OneContactPage };