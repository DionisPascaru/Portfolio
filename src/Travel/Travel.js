import images from '../images/images';
import './Travel.scss';
import React, { useState, useEffect } from "react";
import TravelContent from './travel-content';


function Travel() {

    const [toggled, toggle] = useState(false);

    useEffect(()=>{
        var header = document.getElementById("travel");
        var listContent = header.getElementsByClassName("crop-image");
        console.log(listContent)
        for (var i = 0; i < listContent.length; i++) {
            listContent[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) { 
                    current[0].className = current[0].className.replace(" active", "");
                }
                if(toggled === true){
                    this.className += "active";
                } else {
                    this.className = delete("active");
                }                
            });
        }
    })

    return (
        <div className={`travel-container ${toggled ? 'active' : ''}`}>

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
                <div className="crop-image">
                    <div className="image-wrap">
                        <div className="chapter-subtitle">
                            <h2>Sankt Moritz</h2>
                            <div onClick={() => toggle(toggled => !toggled)}>
                                More
                            </div>
                        </div>
                        <img src={images.blockImg1} />
                    </div>
                    <div className="travel-content">
                        <TravelContent />
                    </div>
                </div>
                <div className="crop-image">
                    <div className="image-wrap">
                        <div className="chapter-subtitle">
                            <h2>Livigno</h2>
                            <div onClick={() => toggle(toggled => !toggled)}>
                                More
                            </div>
                        </div>
                        <img src={images.blockImg2} />
                    </div>
                    <div id="travel" className="travel-content">
                        <TravelContent />
                    </div>
                </div>
                <div className="crop-image">
                    <div className="image-wrap">
                        <div className="chapter-subtitle">
                            <h2>Milano</h2>
                            <div onClick={() => toggle(toggled => !toggled)}>
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