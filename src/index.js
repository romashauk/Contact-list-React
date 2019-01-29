import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';
import registerServiceWorker from './registerServiceWorker';
import ContactList from './App.js';

ReactDOM.render(<ContactList />, document.getElementById('root'));
registerServiceWorker();
