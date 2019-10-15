import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} name="" id="" cols="30" rows="1"></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.post}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;