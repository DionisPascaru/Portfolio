import React from 'react';
import headerImage from './header-img.jpg';
import './App.css';
import useWindowDimensions from './components/FixedResize';

function App() {
  return (
    <div className="App" style={useWindowDimensions()}>
      <header className="App-header" >
        <img src={headerImage} className="header-img" alt="logo" />
        <div className="nav-bar">
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
