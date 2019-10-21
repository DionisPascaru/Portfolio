import React from 'react';
import images from '../images/images';
import './Contact.scss';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-section sticky">
                <img src={images.contactIcon} />
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
            <div className="contact-chapter">
                <div className="content">
                    <p>If you want to collaborate on crafting amazing experience for people – you are very welcome to 
                        contact me.</p>
                    <p>I am available for freelance projects and full-time employment.</p>
                    <h2><strong>Pascaru Dionis</strong></h2>
                    <p>UI Design & FrontEnd Developer</p>
                    <p>Denis.pascaru95@gmail.com</p>
                    <p>+37378781949</p>
                </div>                
            </div>
        </div>
    );
}

                
export default Contact;