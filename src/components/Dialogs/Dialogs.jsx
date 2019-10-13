import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id} />);
  let messagesElements = props.state.messages.map(el => <Message message={el.message} />);
  let textValue = React.createRef();
  let addText = () => {
    let newPostValue = {id: props.state.messages.length + 1, message: textValue.current.value};
    let addNewStateText = [...props.state.messages, newPostValue];
    props.state.messages = addNewStateText;
    textValue.current.value = '';
    return alert(props.state.messages[5].message);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={style.messages}>
        { messagesElements }
        <textarea ref={textValue}></textarea>
        <div>
          <button onClick={addText}>New message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;