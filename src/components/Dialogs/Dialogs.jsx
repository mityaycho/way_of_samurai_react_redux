import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id} />);
  let messagesElements = props.state.messages.map(el => <Message message={el.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={style.messages}>
        { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;