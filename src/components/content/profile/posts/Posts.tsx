import React from "react"
import classes from './Posts.module.sass'
import {Post} from "./post/Post";
import {PostsPagePropsType} from "./PostsContainer";
import {AddPostReduxForm} from "./forms/AddPostForm";


const Posts = React.memo<PostsPagePropsType>((props) => {

  console.log(props.profilePage.posts)

  const addPost = (formData: {descForNewPost: string}) => {
    console.log("formData", formData)
    props.addPost(formData, props.authenticatedUserId)
    formData.descForNewPost = ''
  }

  console.log(props.authenticatedUserId)

  return (
    <div className={classes.posts}>

      <h2 className={classes.posts__header}>
        {props.isOwner
          ? props.profilePage.title
          : props.profilePage.profile.fullName + "'s Posts"}
      </h2>
      <div style={{lineHeight:'20px', fontSize: '12px', color: 'grey', textAlign: 'center', marginBottom: "20px"}}>
        <p>
          Hey, the posts are hardcoded only on frontend to demonstrate you its flow
        </p>
        <p>
          Don't take it serious
        </p>
      </div>
      <div className={classes.addPost}>
        {props.isOwner && <AddPostReduxForm onSubmit={addPost} />}
      </div>

      {props.profilePage.posts.map((p) => {

        if (p.userId === props.authenticatedUserId) {

          return (
            <Post
              savePost={props.savePost}
              setIsPublished={props.setIsPublished}
              removePost={props.removePost}
              authorPhoto={props.profilePage.profile.photos.large}
              fullName={props.profilePage.profile.fullName}
              desc={p.desc}
              isPublished={p.isPublished}
              id={p.id}
              likes={p.likes}
              userId={p.userId}
              key={p.id}
            />
          )
        }
      })}
    </div>
  );
})

export default Posts