import React from 'react';
import './About.scss';
import '../components/general.scss';
import images from '../images/images';


function About() {
    
    return (
        <div className="about-container">
            <div className="about-section sticky">
                <img src={images.aboutIcon} />
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
            <div className="hex-image"></div>
            <div className="chapter-content">
                <div className="content">
                    <h2>Why do we use it?</h2>
                    <p><strong>I am a UX Designer and Art Director from Austria living in Berlin.</strong></p>
                    <p>Artworks and illustrations were my gateway to the creative industry which led to the
                        foundation of my own studio and to first steps in the digital world.</p>
                    <h2><strong>Art Direction</strong></h2>
                    <p>Starting with basic websites several years ago I found myself working as an Art Director for
                        complex projects with a holistic approach soon. Visually appealing designs, subtle details and
                        brand guidelines combined to innovative interfaces across various touch points became my daily
                        companion.</p>
                    <p><strong>Out of this love for aesthetic design my passion for functionality and structure evolved. Jumping
                        right into Photoshop didn’t feel accurate anymore and skipping the steps of building a framework
                        based on functionality and usability became inevitable.</strong></p>
                    <h2><strong>UX Design</strong></h2>
                    <p>A user-centered mindset and sensitivity for design turned out to be the perfect fit when
                        collaborating with agencies, clients and brands to develop digital concepts and solve problems
                        together.</p>
                    <p>This rough framework outlines my process of developing digital experiences:</p>
                    <div>
                        <ol>
                            <li><strong>RESEARCH</strong> and gather the present state</li>
                            <li><strong>STRUCTURE</strong> setup and content of the project</li>
                            <li><strong>CONCEPT AND STRATEGY</strong></li>
                            <li><strong>CREATE</strong>, evaluate and iterate deliverables like</li>
                            <ul>
                                <li>Personas</li>
                                <li>Site maps</li>
                                <li>Use cases and scenarios</li>
                                <li>User flow</li>
                                <li>Sketches and Infographics</li>
                                <li>Wireframes</li>
                            </ul>
                        </ol>
                    </div>
                    <p><strong>Communicating the conceptual approach/UX strategy and reasoning behind it, is present during the
                        whole process.</strong></p>

                </div>
            </div>
        </div>
    );
}

export default About;