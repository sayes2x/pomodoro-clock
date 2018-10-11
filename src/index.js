import React from 'react';
import ReactDOM from 'react-dom';
import './emotion/globalStyles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
