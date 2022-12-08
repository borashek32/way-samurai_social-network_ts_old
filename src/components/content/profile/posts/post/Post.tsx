import classes from './Post.module.sass'
import Author from "./Author/Author";
import {ButtonDefault} from "../../../../utils/buttons/ButtonDefault";
import React from "react";
import {PostType} from "../../../../../redux/state";
import {Checkbox} from "../../../../utils/checkbox/Checkbox";

type PropsType = {
  post: PostType
  deletePost: (id: string) => void
  changeIsPublished: (id: string, newValue: boolean) => void
}

export const Post: React.FC<PropsType> = (props) => {
  const editPost = () => {
    return alert('edited');
  }
  const deletePostCallback = () => {
    props.deletePost(props.post.id)
  }
  const changeIsPublishedCallback = (newValue: boolean) => {
    props.changeIsPublished(props.post.id, newValue)
  }

  return (
    <div className={classes.post}>
      <Author />
      <div className={classes.post__content}>
        <p className={classes.post__desc}>{props.post.desc}...</p>
        <div className={classes.post__buttons}>
          Likes: {props.post.likes}
          <ButtonDefault
            callback={editPost}
            name={"Edit"}
          />
          <ButtonDefault
            callback={deletePostCallback}
            name={"Delete"}
          />
        </div>
      </div>
      <div className={classes.post__published}>
        <p>Published:</p>
        <Checkbox
          value={props.post.isPublished}
          callback={changeIsPublishedCallback}
        />
      </div>
    </div>
  );
}