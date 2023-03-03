import classes from "./Posts.module.sass";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validation/FieldValidation";
import {TextArea, TextAreaType} from "../../../utils/textarea/TextArea";


export type AddPostFormType = {
  descForNewPost: string
}

const minLength = minLengthCreator(3)
const maxLength = maxLengthCreator(7)

export const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={classes.post__content}>
      <Field
        name={"descForNewPost"}
        component={TextArea}
        placeholder={"Type here to publish a new post"}
        validate={[required, minLength, maxLength]}
      />
      <div className={classes.post__buttons}>
        <button className={classes.post__button} >Add Post</button>
      </div>
    </form>
  )
}

export const AddPostReduxForm = reduxForm<AddPostFormType>({
  form: 'addPost',
}) (AddPostForm)