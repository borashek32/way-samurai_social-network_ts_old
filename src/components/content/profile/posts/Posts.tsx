import classes from './Posts.module.sass'
import React from "react";
import {Post} from "./post/Post";
import {PostsPagePropsType} from "./PostsContainer";


export const Posts = (props: PostsPagePropsType) => {

  return (
    <div className={classes.posts}>
      <h2 className={classes.posts__header}>{props.profilePage.title}</h2>
      <div className={classes.addPost}>
        <div className={classes.post__content}>
          <textarea
            onChange={props.onChange}
            value={props.profilePage.descForNewPost}
            rows={5}
            className={classes.addPost__textarea}
            placeholder={"Type here to publish a new post"}
          ></textarea>
          <div className={classes.post__buttons}>
            <button className={classes.post__button} onClick={props.addPost}>Add Post</button>
          </div>
        </div>
      </div>
      {props.profilePage.posts.map((p) => {
        return (
          <Post
            likes={p.likes}
            id={p.id}
            desc={p.desc}
            key={p.id}
          />
        )
      })}
    </div>
  );
}