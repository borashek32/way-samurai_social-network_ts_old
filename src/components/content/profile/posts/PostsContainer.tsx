import React, {ChangeEvent} from "react";
import {ActionsTypes, PostType} from "../../../../redux/store";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../../redux/profile-reducer";
import {Posts} from "./Posts";

export type PropsType = {
  title: string
  posts: Array<PostType>
  descForNewPost: string
  dispatch: (action: ActionsTypes) => void
}

export const PostsContainer = (props: PropsType) => {
  // add post
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeNewTextActionCreator(e.currentTarget.value))
  }
  const addPost = () => {
    props.dispatch(addPostActionCreator(props.descForNewPost))
  }

  return (
    <Posts onChangeCallback={onChange} addPost={addPost} title={props.title} posts={props.posts} descForNewPost={props.descForNewPost}/>
  );
}