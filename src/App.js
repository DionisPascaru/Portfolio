import React from 'react';
import images from './images/images';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <img src={images.headerImage} className="header-img" alt="logo" />
        <div className="nav-bar">
            <h1>My Horizon</h1>
            <p>Take a deep breath</p>
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
      </header>
    </div>
  );
}

export default App;
