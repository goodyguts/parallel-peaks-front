import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";

import {Provider} from 'react-redux';
import createMyStore from "./misc/configureStore";
import {PersistGate} from "redux-persist/integration/react";

import PreloadImages from "./misc/preloadImagesComponent";

const {store, persistor} = createMyStore();

ReactDOM.render(
    <React.StrictMode>
        <PreloadImages/>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={() => (<span>hi</span>)} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
