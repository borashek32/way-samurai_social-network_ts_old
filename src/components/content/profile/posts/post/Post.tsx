import classes from './Post.module.sass'
import Author from "./Author/Author";
import React from "react";
import {PostType} from "../../../../../redux/store";

type PropsType = {
  post: PostType
}

export const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={classes.post}>
      <Author />
      <div className={classes.post__content}>
        <p className={classes.post__desc}>{props.post.desc}...</p>
        <div className={classes.post__buttons}>
          Likes: {props.post.likes}
        </div>
      </div>
    </div>
  );
}