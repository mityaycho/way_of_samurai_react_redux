import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYatHjn3DBnwvvyHDdtNAx0-x0QUV7cG056KlBa1reeHp-F7v" alt=""/>
      { props.message }
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;