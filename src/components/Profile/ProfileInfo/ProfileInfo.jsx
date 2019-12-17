import React, {useState} from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/roller.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData);
    setEditMode(false)
  };

  return (
    <div className={style.headerPhoto}>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={style.mainPhoto}/>
        {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        {editMode ?
          <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> :
          <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
      <b>full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
    <div>
      <b>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(el => {
      return <Contact key={el} contactTitle={el} contactValue={profile.contacts[el]} />
    })}
    </div>
  </div>
};

const Contact = ({contactTitle, contactValue}) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
};

export default ProfileInfo;