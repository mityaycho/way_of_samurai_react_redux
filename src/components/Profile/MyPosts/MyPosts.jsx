import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = (props) => {
  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={onAddPost}/>
      <div className={style.post}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;