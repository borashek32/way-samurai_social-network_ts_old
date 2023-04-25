import React, {FC, useState} from "react";
import {MessageType, OneMessageType} from "../../../../redux/dialogs-reducer";
import s from "./Messages.module.sass";
import {EditMessageReduxForm} from "../forms/EditMessageForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {UserType} from "../../../../redux/users-reducer";


type Props = {
  saveChangedMessage: (text: string, messageId: string) => void
  users: UserType[]
  message: OneMessageType
  authenticatedUserId: number | null
  removeMessage: (messageId: string) => void
}

export const Message: FC<Props> = ({
                                     saveChangedMessage,
                                     users,
                                     message,
                                     authenticatedUserId,
                                     removeMessage
                                   }) => {

  const [editMode, setEditMode] = useState(false)

  const saveMessage = (message: OneMessageType) => {
    setEditMode(!editMode)
    saveChangedMessage(message.text, message.id)
  }
  const user = users.find((u) => u.id === message.userId)

  return (
    <div key={message.id} className={s.messageWrapper} style={user && {backgroundColor: "#f8f8f8"}}>
      <div className={s.authorMessageWrapper}>
        <p className={s.authorName}>{user ? user.name : 'Me'}:</p>

        {editMode
          ? <EditMessageReduxForm onSubmit={saveMessage} initialValues={message}/>
          : <p>{message.text}</p>}
      </div>

      <div className={s.buttonsWrapper}>
        {!editMode && (authenticatedUserId && authenticatedUserId === message.userId &&
          <div onClick={() => setEditMode(!editMode)}>
            <FontAwesomeIcon icon={faPenToSquare}/>
          </div>
        )}
        <div onClick={() => removeMessage(message.id)}>
          <FontAwesomeIcon icon={faTrash}/>
        </div>
      </div>
    </div>
  )
}