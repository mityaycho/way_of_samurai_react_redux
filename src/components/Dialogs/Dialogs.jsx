import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
  let messagesElements = state.messages.map(el => <Message message={el.message} key={el.id}/>);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;