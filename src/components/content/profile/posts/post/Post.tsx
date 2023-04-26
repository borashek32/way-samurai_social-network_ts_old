import classes from './Post.module.sass'
import Author from "./Author/Author";
import React, {useState} from "react";
import {PostType} from "../../../../../redux/profile-reducer";
import {ButtonDefault} from "../../../../utils/buttons/ButtonDefault";
import {Checkbox} from "../../../../utils/checkbox/Checkbox";
import {EditPostReduxForm} from "../forms/EditPostForm";


export type Props = {
  id: string
  desc: string
  isPublished: boolean
  userId: number | null
  likes: number
  authorPhoto: string,
  fullName: string
  removePost: (postId: string) => void
  setIsPublished: (isPublished: boolean, postId: string) => void
  savePost: (post: PostType) => void
}

export const Post: React.FC<PostType & Props> = ({
                                                   id,
                                                   isPublished,
                                                   likes,
                                                   desc,
                                                   authorPhoto,
                                                   fullName,
                                                   removePost,
                                                   setIsPublished,
                                                   savePost
                                                 }) => {

  const [editMode, setEditMode] = useState(false)

  const onEditMode = () => setEditMode(!editMode)

  const savePostData = (post: PostType) => {
    savePost(post)
    setEditMode(!editMode)
  }

  const deletePost = () => removePost(id)

  const changeIsPublished = (isPublished: boolean) => setIsPublished(isPublished, id)

  return (
    <div className={classes.post}>
      <Author authorPhoto={authorPhoto} userName={fullName}/>
      <div className={classes.post__content}>
        {editMode
          ? <EditPostReduxForm onSubmit={savePostData} initialValues={{desc, id, isPublished, likes}}/>
          : <p className={classes.post__desc}>{desc}</p>
        }
        {!editMode && <div className={classes.post__buttons}>
          Likes: {likes}
          <ButtonDefault
            callback={!editMode ? onEditMode : () => savePostData}
            name={"Edit"}
          />
          <ButtonDefault
            callback={deletePost}
            name={"Delete"}
          />
        </div>}
      </div>
      <div className={classes.post__published}>
        <p>Published:</p>
        <Checkbox
          value={isPublished}
          callback={changeIsPublished}
        />
      </div>
    </div>
  );
}