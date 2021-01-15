import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/store";
import ReactDOM from "react-dom";
import {App} from "./App";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree()

store.subscriber(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
