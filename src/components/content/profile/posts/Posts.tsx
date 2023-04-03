import React from "react"
import classes from './Posts.module.sass'
import {Post} from "./post/Post";
import {PostsPagePropsType} from "./PostsContainer";
import {AddPostFormType, AddPostReduxForm} from "./AddPostForm";


const Posts = React.memo<PostsPagePropsType>((props) => {
  ('posts')
  const addPost = (formData: AddPostFormType) => {
    props.addPost(formData.descForNewPost)
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.posts__header}>{props.profilePage.title}</h2>
      <div className={classes.addPost}>
        <AddPostReduxForm onSubmit={addPost}/>
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
})

export default Posts