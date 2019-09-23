//import React from 'react';
import './About.css';

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useWindowDimensions from '../components/FixedResize';


function About() {

    return (
        <div className="about-container" style={useWindowDimensions()}>
            <div className="about-section">
                <h1>About</h1>
                <div className="nav-bar" >
                    <a href="#"
                        className="nav-link"
                    >
                        About
                    </a>
                    <a href="#"
                        className="nav-link"
                    >
                        Work
                    </a>
                    <a href="#"
                        className="nav-link"
                    >
                        Contact
                    </a>
                </div>
            </div>
            
            <div className="chapter-content">
                <h2>Why do we use it?</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                     desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                     search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                      evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </div>
    );
}

export default About;