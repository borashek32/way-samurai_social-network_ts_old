import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/redux-store";
import {HashRouter as BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';



export const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter basename={'way-samurai_social-network_ts_old'}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root')
  )
}