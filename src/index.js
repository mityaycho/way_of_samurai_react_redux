import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogsData = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Victor"},
  {id: 6, name: "Valera"}
];

const messagesData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How ara you?"},
  {id: 3, message: "Yooo!!!"},
  {id: 4, message: "Yooo!!!"},
  {id: 5, message: "Yooo!!!"}
];

const posts = [
  {id: 1, message: "Hi, how are you?" , likesCount: 12},
  {id: 2, message: "It's my first post" , likesCount: 11}
];

ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
