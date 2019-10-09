import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const  Message = (props) => {
  return <div className={style.message}>{props.message}</div>
}

const Dialogs = (props) => {

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

  let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);
  let messagesElements = messagesData.map(el => <Message message={el.message} />);

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
}

export default Dialogs;