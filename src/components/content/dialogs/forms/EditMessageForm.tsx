import React, {FC} from "react"
import s from "./../messages/Messages.module.sass"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {OneMessageType} from "../../../../redux/dialogs-reducer"
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validation/FieldValidation"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFloppyDisk} from "@fortawesome/free-solid-svg-icons"


export type EditMessageFormType = {
  onSubmit: (message: OneMessageType) => void
}

const minLength = minLengthCreator(3)
const maxLength = maxLengthCreator(200)

const EditMessageForm: FC<InjectedFormProps<OneMessageType, EditMessageFormType> & EditMessageFormType> = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={s.editMessageForm}>
      <Field
        className={s.editMessageInput}
        name={"text"}
        component={"input"}
        validate={[required, minLength, maxLength]}
      />
      <button type={"submit"} className={s.saveMessageButton}>
        <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
    </form>
  )
}

export const EditMessageReduxForm = reduxForm<OneMessageType, EditMessageFormType>({
  form: 'editMessage',
}) (EditMessageForm)