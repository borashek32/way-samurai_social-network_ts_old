import React from "react"
import classes from './Posts.module.sass'
import {Post} from "./post/Post";
import {PostsPagePropsType} from "./PostsContainer";
import {AddPostFormType, AddPostReduxForm} from "./AddPostForm";


const Posts = React.memo<PostsPagePropsType>((props) => {

  const addPost = (formData: AddPostFormType) => {
    props.addPost(formData.descForNewPost)
    formData.descForNewPost = ''
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.posts__header}>
        {props.isOwner
          ? props.profilePage.title
          : props.profilePage.profile.fullName + "'s Posts"}
      </h2>
      <div className={classes.addPost}>
        {props.isOwner && <AddPostReduxForm onSubmit={addPost} />}
      </div>

      {props.profilePage.posts.map((p) => {

        if (p.userId === props.profilePage.profile.userId) {
          return (
            <Post
              loadPostDesc={props.loadPostDesc}
              setIsPublished={props.setIsPublished}
              removePost={props.removePost}
              authorPhoto={props.profilePage.profile.photos.large}
              fullName={props.profilePage.profile.fullName}
              {...p}
              key={p.id}
            />
          )
        }
      })}
    </div>
  );
})

export default Posts