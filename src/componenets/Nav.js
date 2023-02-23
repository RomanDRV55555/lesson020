import React from 'react';
import { Link } from 'react-router-dom';

import { btnStyle } from './ButtonStyle';

import './Nav.css'

const Nav = () => {
    return (
        <header className='menu-style'>
            <Link style={btnStyle} to="/"> Home</Link>
            <Link style={btnStyle} to="/posts"> Posts</Link>
            <Link style={btnStyle} to="/pictures"> Pictures</Link>
            <Link style={btnStyle} to="/contacts"> Contacts</Link>
        </header>
    );
};

export { Nav }