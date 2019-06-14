import React from 'react';
import ReactDOM from 'react-dom';

// Global Styles
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// App Container
import App from './App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
