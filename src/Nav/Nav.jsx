import React, { useState, useEffect, } from 'react';

import './Nav.css';

const Nav = () => {
    // Nav transition animation
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__content">
                    <h1>Matthew__Dev</h1>
                    <i className="fas fa-bars"></i>
            </div>    
        </div>
    )
}

export default Nav;

