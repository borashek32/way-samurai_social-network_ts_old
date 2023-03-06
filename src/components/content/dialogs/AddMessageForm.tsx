import classes from "./Dialogs.module.sass";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ButtonDefault} from "../../utils/buttons/ButtonDefault";
import {TextArea} from "../../utils/textarea/TextArea";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validation/FieldValidation";


export type AddMessageFormType = {
  newMessageBody: string
}

const minLength = minLengthCreator(3)
const maxLength = maxLengthCreator(7)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

  return (
    <form
      className={classes.addMessageWrapper}
      onSubmit={props.handleSubmit}
    >
      <Field
        name={"newMessageBody"}
        component={TextArea}
        placeholder={"Enter your message"}
        validate={[required, minLength, maxLength]}
      />
      <ButtonDefault name={'Add message'} />
    </form>
  )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({
  form: 'addMessage',
}) (AddMessageForm)