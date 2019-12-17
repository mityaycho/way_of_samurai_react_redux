import React from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button onClick={() => {}}>Edit</button></div>
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
        <b>About me</b>: {profile.aboutMe}
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      {/*<div>*/}
      {/*  <b>Contacts</b>: {Object.keys(profile.contacts).map(el => {*/}
      {/*  return <Contact key={el} contactTitle={el} contactValue={profile.contacts[el]} />*/}
      {/*})}*/}
      {/*</div>*/}
    </form>
  )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;