import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
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
      ],
      newMessageBody: ''
    },
    sideBar: {}
	},
	
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
	},
	
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sideBar = sidebarReducer(this._state.sideBar, action);
		
    this._callSubscriber(this._state);
  }
};

export default store;