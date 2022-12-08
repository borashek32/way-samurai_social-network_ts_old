import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import {addPost, onChange, RootStateType} from './redux/state'

export const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} onChange={onChange} />,
    document.getElementById('root')
  )
}