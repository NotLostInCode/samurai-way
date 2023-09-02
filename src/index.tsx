import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} updateNewPostText={store.updateNewPostText.bind(store)} addPost={store.addPost.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)