import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="http://h2.hqtexture.com/98/9735/1457619934-1.jpg" alt=""/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;