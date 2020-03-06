import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import Top from './components/pages/Top';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Top />, document.getElementById('root'));

serviceWorker.unregister();
