import classes from './Post.module.sass'
import Author from "./Author/Author";
import React from "react";
import {PostType} from "../../../../../redux/profile-reducer";


export const Post: React.FC<PostType> = (post) => {
  return (
    <div className={classes.post}>
      <Author />
      <div className={classes.post__content}>
        <p className={classes.post__desc}>{post.desc}...</p>
        <div className={classes.post__buttons}>
          Likes: {post.likes}
        </div>
      </div>
    </div>
  );
}