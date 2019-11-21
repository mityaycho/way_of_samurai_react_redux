import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />);
  let onAddPost = (values) => {
    props.addPost(values.handleSubmit);
  };

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <AddNewReduxForm onSubmit={onAddPost}/>
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
            placeholder="add message" name="addPosts" component="textarea" cols="30" rows="1" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewReduxForm = reduxForm({form: "addPosts"})(AddNewPostForm)

export default MyPosts;