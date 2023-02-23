import { Button } from 'antd';
import React, { useState } from 'react';

import { test_coffee } from './dCoffeeList';

import { btnStyle } from './ButtonStyle';


const PhotoSlider = () => {

    const [index, setIndex] = useState(0);

    return (
        <div style={{display: "inline-flex"}}>
            <Button style={btnStyle} onClick={() => setIndex(
                ((index === 0) ? (test_coffee.length - 1) : index - 1)
            )}>Prev</Button>
            <img
                alt=''
                src={test_coffee[index].file}
            ></img>
            <Button style={btnStyle} onClick={() => setIndex(
                ((index === (test_coffee.length-1)) ? 0 : index + 1)
            )}
            > Next</Button>
        </div>
    );
};

export { PhotoSlider };