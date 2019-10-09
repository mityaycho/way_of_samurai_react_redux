import React from "react";
import style from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="http://h2.hqtexture.com/98/9735/1457619934-1.jpg" alt=""/>
      </div>
      <div className={style.desctiptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;