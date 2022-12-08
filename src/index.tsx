import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';

const posts = [
    {id: 1, isPublished: false, title: "React", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: 2, isPublished: false, title: "JS", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: 3, isPublished: true, title: "PHP", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: 4, isPublished: false, title: "Ruby", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: 5, isPublished: false, title: "ReactJS", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
    {id: 6, isPublished: true, title: "VueJS", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"}
]

const dialogs = [
    {id: 1, userName: "Polina", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {id: 2, userName: "Vadim", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {id: 3, userName: "Igor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {id: 4, userName: "Olga", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    {id: 5, userName: "Petr", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
]

const messages = [
    {id: 1, text: "Lorem ipsum dolor"},
    {id: 2, text: "Lorem ipsum dolor"},
    {id: 3, text: "Lorem ipsum dolor"},
    {id: 4, text: "Lorem ipsum dolor"},
    {id: 5, text: "Lorem ipsum dolor"}
]

ReactDOM.render(
    <App />,
  document.getElementById('root')
);