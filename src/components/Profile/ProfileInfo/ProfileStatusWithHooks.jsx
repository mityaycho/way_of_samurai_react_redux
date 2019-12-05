import React, {useState} from "react";
import style from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <>
      {!editMode &&
      <div className={style.spanText}>
        <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
      </div>}
      {editMode &&
      <div>
        <input onChange={onStatusChange}
               autoFocus={true}
               onBlur={deactivateEditMode}
               value={status}/>
      </div>}
    </>
  );
};

export default ProfileStatusWithHooks;