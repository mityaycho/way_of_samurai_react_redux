import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/roller.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader/>;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={style.headerPhoto}>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={style.mainPhoto}/>
        {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        <div>
          <div>
            <b>full name</b>: {profile.fullName}
          </div>
          <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
          </div>
          {profile.lookingForAJob &&
          <div>
            <b>My professional skills</b>: {profile.loodingForAJobDescription}
          </div>
          }
          <div>
            <b>About me</b>: {profile.aboutMe}
          </div>
          <div>
            <b>Contacts</b>: {profile.aboutMe}
          </div>
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;