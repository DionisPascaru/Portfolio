import React from 'react';
import images from '../images/images';
import './Travel.css';

function Travel() {
    return (
        <div className="travel-container">
            <div className="travel-section">
                <img src={images.travelIcon} />
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
            <div className="travel-chapter">
                <div className="crop-image" >
                    <img src={images.blockImg1}/>
                </div>
                <div className="crop-image">
                    <img src={images.blockImg2}/>
                </div>
                <div className="crop-image">
                    <img src={images.blockImg4}/>
                </div>
            </div>
        </div>
    );
}

export default Travel;