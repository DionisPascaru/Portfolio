import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About/About';
import Travel from './Travel/Travel';
import Contact from './Contact/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Travel />, document.getElementById('travel'));
ReactDOM.render(<Contact />, document.getElementById('contact'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
