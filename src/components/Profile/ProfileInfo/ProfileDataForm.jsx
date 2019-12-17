import React from 'react';
import style from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button onClick={() => {}}>Save</button></div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <b>full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
      </div>
      }
      <div>
        <b>About me</b>:
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(el => {
        return <div key={el} className={style.contact}>
          <b>{el}: {createField(el, "contacts." + el, [], Input)}</b>
        </div>
      })}
      </div>
    </form>
  )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;