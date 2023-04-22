import classes from './Post.module.sass'
import Author from "./Author/Author";
import React, {useState} from "react";
import {PostType} from "../../../../../redux/profile-reducer";
import {ButtonDefault} from "../../../../utils/buttons/ButtonDefault";
import {Checkbox} from "../../../../utils/checkbox/Checkbox";
import {TextArea} from "../../../../utils/textarea/TextArea";
import {AddPostReduxForm} from "../AddPostForm";


type Props = {
  authorPhoto: string,
  fullName: string
  removePost: (postId: string) => void
  setIsPublished: (isPublished: boolean, postId: string) => void
  loadPostDesc: (desc: string, postId: string) => void
}

export const Post: React.FC<PostType & Props> = ({
                                                   id,
                                                   desc,
                                                   likes,
                                                   authorPhoto,
                                                   fullName,
                                                   isPublished,
                                                   removePost,
                                                   setIsPublished,
                                                   loadPostDesc
                                                 }) => {

  const [editMode, setEditMode] = useState(false)

  const onEditMode = () => {
    setEditMode(!editMode)
    loadPostDesc(desc, id)
  }

  const deletePost = () => removePost(id)

  const changeIsPublished = (isPublished: boolean) => setIsPublished(isPublished, id)

  return (
    <div className={classes.post}>
      <Author authorPhoto={authorPhoto} userName={fullName}/>
      <div className={classes.post__content}>
        <p className={classes.post__desc}>{desc}</p>
        <div className={classes.post__buttons}>
          Likes: {likes}
          {/*<ButtonDefault*/}
          {/*  callback={onEditMode}*/}
          {/*  name={"Edit"}*/}
          {/*/>*/}
          <ButtonDefault
            callback={deletePost}
            name={"Delete"}
          />
        </div>
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