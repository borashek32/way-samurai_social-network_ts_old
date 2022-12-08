import React from "react";
import state, {addPost, onChange, RootStateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import './index.sass';

const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} onChange={onChange} />,
    document.getElementById('root')
  )
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)
