import classes from './Posts.module.sass'
import React, {ChangeEvent} from "react";
import {Post} from "./post/Post";
import {ActionsTypes, addPostActionCreator, changeNewTextActionCreator, PostType} from "../../../../redux/state";

export type PropsType = {
  title: string
  posts: Array<PostType>
  descForNewPost: string
  dispatch: (action: ActionsTypes) => void
}

export const Posts = (props: PropsType) => {
  // add post
  const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeNewTextActionCreator(e.currentTarget.value))
  }
  const addPost = () => {
    props.dispatch(addPostActionCreator(props.descForNewPost))
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.posts__header}>{props.title}</h2>
      <div className={classes.addPost}>
        <div className={classes.post__content}>
          <textarea
            onChange={onChangeCallback}
            value={props.descForNewPost}
            rows={5}
            className={classes.addPost__textarea}
            placeholder={"Type here to publish a new post"}
          ></textarea>
          <div className={classes.post__buttons}>
            <button className={classes.post__button} onClick={addPost}>Add Post</button>
          </div>
        </div>
      </div>
      {props.posts.map((p) => {
        return (
          <Post
            key={p.id}
            post={p}
          />
        )
      })}
    </div>
  );
}