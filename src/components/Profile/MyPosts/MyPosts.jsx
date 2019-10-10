import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)

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
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;