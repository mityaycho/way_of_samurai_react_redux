import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Dialogs/common/Preloader/Preloader";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  };

  return (
    <div>
      <div>
        <img className={style.headerPhoto} src="http://h2.hqtexture.com/98/9735/1457619934-1.jpg" alt=""/>
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;