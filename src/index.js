import React from 'react';
import ReactDOM from 'react-dom';
import { ContactLIst, } from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><ContactLIst /></div>, document.getElementById('root'));
registerServiceWorker();
