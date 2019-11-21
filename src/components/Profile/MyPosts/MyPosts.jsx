import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={style.post}>
        { postsElements }
      </div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field
            placeholder="add message" name="newPostText" component="textarea" cols="30" rows="1" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;