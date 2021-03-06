import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.js';

// Require Sass file so webpack can build it
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css';
import './assets/index.css';
// import 'react-widgets/dist/css/react-widgets.css';

ReactDOM.render(<App />, document.getElementById('root'));