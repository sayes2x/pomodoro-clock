import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import globalStyle from './emotion/globalStyle';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
