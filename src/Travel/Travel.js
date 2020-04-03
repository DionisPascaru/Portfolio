import images from '../images/images';
import './Travel.scss';
import React, { useState, useEffect } from "react";
import TravelContent from './travel-content';


function Travel() {
    let myRef = React.createRef();
    let openContent = () => {
        console.log("hello", myRef);
    }
    
    return (
        <div className="travel-container ">
            <div className="travel-section sticky">
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
            <div id="travel" className="travel-chapter">
                <div className="crop-image" ref={myRef}>
                    <div className="image-wrap">
                        <div className="chapter-subtitle">
                            <h2>Sankt Moritz</h2>
                            <div onClick={openContent}>  
                                More
                            </div>
                        </div>
                        <img src={images.blockImg1} />
                    </div>
                    <div className="travel-content">
                        <TravelContent />
                    </div>
                </div>
                <div className="crop-image" ref={myRef}>
                    <div className="image-wrap">
                        <div className="chapter-subtitle">
                            <h2>Livigno</h2>
                            <div onClick={openContent}>
                                More
                            </div>
                        </div>
                        <img src={images.blockImg2} />
                    </div>
                    <div id="travel" className="travel-content">
                        <TravelContent />
                    </div>
                </div>
                <div className="crop-image" ref={myRef}>
                    <div className="image-wrap">
                        <div className="chapter-subtitle">
                            <h2>Milano</h2>
                            <div onClick={openContent}>
                                More
                            </div>
                        </div>
                        <img src={images.blockImg4} />
                    </div>
                    <div className="travel-content">
                        <TravelContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel;