import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="1"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.post}>
        <Post message="Hi, how are you?"/>
        <Post message="It's my first post"/>
      </div>
    </div>
  );
}

export default MyPosts;