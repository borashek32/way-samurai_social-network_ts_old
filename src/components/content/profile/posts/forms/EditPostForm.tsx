import classes from "../Posts.module.sass";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../../utils/validation/FieldValidation";
import {TextArea} from "../../../../utils/textarea/TextArea";
import {PostType} from "../../../../../redux/profile-reducer";


export type EditPostFormType = {
  onSubmit: (post: PostType) => void
}

const minLength = minLengthCreator(3)
const maxLength = maxLengthCreator(200)

export const EditPostForm: React.FC<InjectedFormProps<PostType, EditPostFormType> & EditPostFormType> = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={classes.post__content}>
      <Field
        name={"desc"}
        component={TextArea}
        placeholder={"Type here to publish a new post"}
        validate={[required, minLength, maxLength]}
      />
      <div className={classes.post__buttons}>
        <button type={"submit"} className={classes.post__button}>Save</button>
      </div>
    </form>
  )
}

export const EditPostReduxForm = reduxForm<PostType, EditPostFormType>({
  form: 'editPost',
}) (EditPostForm)