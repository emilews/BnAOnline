import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './colorshilo.css';
import 'normalize.css/normalize.css';


ReactDOM.render(<App />, document.getElementById('root'));
document.title = 'Bakumatsu no Anime'
registerServiceWorker();
