import classes from "./Dialogs.module.sass";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ButtonDefault} from "../../utils/buttons/ButtonDefault";


export type AddMessageFormType = {
  newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
  return (
    <form
      className={classes.addMessageWrapper}
      onSubmit={props.handleSubmit}
    >
      <Field
        component={"textarea"}
        name={"newMessageBody"}
        placeholder={"Enter your message"}
        className={classes.addPost__textarea}
      ></Field>
      <ButtonDefault name={'Add message'} />
    </form>
  )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({
  form: 'addMessage',
}) (AddMessageForm)