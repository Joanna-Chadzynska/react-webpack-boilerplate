import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/main.scss';

const title = 'React with Webpack and Babel with other content';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('root'),
);

module.hot.accept();
