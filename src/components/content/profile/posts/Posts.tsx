import classes from './Posts.module.sass'
import {AddPost} from "./addPost/AddPost"
import {ButtonDefault} from "../../../utils/buttons/ButtonDefault";
import React, {useState} from "react";
import {Post} from "./post/Post";
import {v1} from "uuid";
import {PostType} from "../../../../redux/state";

export type PropsType = {
  title: string
  posts: Array<PostType>
}

export type FilterType = "All Posts" | "Published Posts" | "Unpublished Posts"

export const Posts = (props: PropsType) => {
  const [posts, setPosts] = useState<Array<PostType>>(props.posts)
  const [filter, setFilter] = useState<FilterType>("All Posts");
  // filter posts
  const filterClickHandler = (buttonName: FilterType) => {
    setFilter(buttonName);
  }
  let currentPosts = posts;
  if (filter === "Published Posts") {
    currentPosts = currentPosts.filter((filteredPost) => filteredPost.isPublished);
  }
  if (filter === "Unpublished Posts") {
    currentPosts = currentPosts.filter((filteredPost) => !filteredPost.isPublished);
  }
  // add post
  const addPost = (desc: string) => {
    let newPublication = {id: v1(), isPublished: false, likes: 0, desc: desc}
    setPosts([newPublication, ...posts])
  }
  // delete post
  const deletePostHandler = (id: string) => {
    setPosts(currentPosts.filter(p => p.id !== id))
  }
  // publish post
  const changeIsPublishedHandler = (id: string, newValue: boolean) => {
    setPosts(posts.map(p => p.id === id ? {...p, isPublished: newValue} : p))
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.posts__header}>{props.title}</h2>
      <AddPost
        addPost={addPost}
      />
      <div className={classes.posts__buttons}>
        <ButtonDefault
          callback={() => filterClickHandler('All Posts')}
          name={"All Posts"}
        />
        <ButtonDefault
          callback={() => filterClickHandler('Published Posts')}
          name={"Published Posts"}
        />
        <ButtonDefault
          callback={() => filterClickHandler('Unpublished Posts')}
          name={"Unpublished Posts"}
        />
        <ButtonDefault
          callback={() => {}}
          name={"New Posts"}
        />

      </div>
      {currentPosts.map((p, index) => {
        return (
          <Post
            key={index}
            post={p}
            deletePost={deletePostHandler}
            changeIsPublished={changeIsPublishedHandler}
          />
        )
      })}
    </div>
  );
}