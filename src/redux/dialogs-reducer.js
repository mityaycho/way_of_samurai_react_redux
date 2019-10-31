const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {...state, newMessageBody: action.body};
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {...state,
        newMessageBody: '',
        messages: [...state.messages, {id: state.messages.length + 1, message: body}]};
    default :
      return state;
  };
};

  export const sendMessageCreator = () => ({type: SEND_MESSAGE});
  export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body};
  };

  export default dialogsReducer;