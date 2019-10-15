import {rerenderEntireTree} from "../render";

const state = {
  profilePage: {
    posts: [
      {id: 1, message: "Hi, how are you?", likesCount: 12},
      {id: 2, message: "It's my first post", likesCount: 11}
    ],
    newPostText: "mityaycho"
  },
  dialogsPage: {
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How ara you?"},
      {id: 3, message: "Yooo!!!"},
      {id: 4, message: "Yooo!!!"},
      {id: 5, message: "Yooo!!!"}
    ],
    dialogs: [
      {id: 1, name: "Dimych"},
      {id: 2, name: "Andrey"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Sasha"},
      {id: 5, name: "Victor"},
      {id: 6, name: "Valera"}
    ]
  },
  sideBar: {}
};

export let addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;