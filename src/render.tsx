import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/redux-store";
import {BrowserRouter, HashRouter} from "react-router-dom";
import { Provider } from 'react-redux';



export const rerenderEntireTree = () => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>, document.getElementById('root')
  )
}