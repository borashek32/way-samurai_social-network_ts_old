import classesAdd from './AddPost.module.sass'
import classes from '../post/Post.module.sass'
import {ButtonDefault} from "../../../../utils/buttons/ButtonDefault"
import {Textarea} from "../../../../utils/textarea/Textarea";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsType = {
  addPost: (desc: string) => void
}

export const AddPost = (props: PropsType) => {
  const [desc, setDesc] = useState('')
  const [error, setError] = useState(false)
  // add post
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.currentTarget.value)
    setError(false)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.charCode === 13) {
      addPostHandler()
    }
  }
  const addPostHandler = () => {
    // console.log(desc)
    if (desc.trim() !== '') {
      props.addPost(desc.trim())
    } else {
      setError(true)
    }
    setDesc('')
  }

  return (
    <div className={classesAdd.addPost}>
      <div className={classes.post__content}>
        <Textarea
          rows={5}
          placeholder={"Type here to publish a new post"}
          value={desc}
          onChangeCallback={onChangeHandler}
          onKeyPressCallback={onKeyPressHandler}
        />
        <div className={classes.post__buttons}>
          <ButtonDefault
            callback={addPostHandler}
            name={"Add post"}
          />
        </div>
      </div>
    </div>
  );
}