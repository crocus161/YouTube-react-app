import './index.css';
import App from './app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import 'react-lazy-load-image-component/src/effects/blur.css';



window.addEventListener('load', () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
    document.getElementById('root'));
});

