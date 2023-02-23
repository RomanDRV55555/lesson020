import React from 'react';

import mainpict from '../img/images.jpeg'

const pStyle = {
    // maxwidth: "530px",
    // marginbottom: "15px",
    // background: "#233162",
    // flex: "content",
    // border: "3px solid #eeeff5",
    // boxshadow: "0px 0px 2px 3px #8fbbf7",
    // borderradius: "5px",
    // filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    width: "730px",
    margin: "3px",
    color: "#233162",
    background: "radial-gradient(38.09% 5968.34% at 38.09% 0%, #68BDFB 22%, #D1DEFF 100%)",
    webkitbackgroundclip: "text",
    webkittextfillcolor: "transparent",
    backgroundclip: "text"
};

const HomePage = () => {
    return (
        <div >
            <img src={mainpict} alt='main'>
            </img>
            <p style={pStyle}>
                The movie industry as we know it today originated in the early 19th century through a series of technological developments: the creation of photography, the discovery of the illusion of motion by combining individual still images, and the study of human and animal locomotion. The history presented here begins at the culmination of these technological developments, where the idea of the motion picture as an entertainment industry first emerged. Since then, the industry has seen extraordinary transformations, some driven by the artistic visions of individual participants, some by commercial necessity, and still others by accident. The history of the cinema is complex, and for every important innovator and movement listed here, others have been left out. Nonetheless, after reading this section you will understand the broad arc of the development of a medium that has captured the imaginations of audiences worldwide for over a century.
            </p >
            <p style={pStyle}>
                The Lumière brothers , Auguste Marie Louis Nicolas Lumière (19 October 1862 – 10 April 1954) and Louis Jean Lumière (5 October 1864 – 6 June 1948),[1][2] were French manufacturers of photography equipment, best known for their Cinématographe motion picture system and the short films they produced between 1895 and 1905, which places them among the earliest filmmakers.
            </p>
            <p style={pStyle}>
                Their screening of a single film on 22 March 1895 for around 200 members of the "Society for the Development of the National Industry" in Paris was probably the first presentation of projected film.Their first commercial public screening on 28 December 1895 for around 40 paying visitors and invited relations has traditionally been regarded as the birth of cinema.Either the techniques or the business models of earlier filmmakers proved to be less viable than the breakthrough presentations of the Lumières.
            </p >
        </div >
    );
};

export { HomePage };