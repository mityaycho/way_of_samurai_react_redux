import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Add post</button>
      </div>
      <div>
        New post
      </div>
      <div className={style.post}>
        <Post message="Hi, how are you?"/>
        <Post message="It's my first post"/>
      </div>
    </div>
  );
}

export default MyPosts;