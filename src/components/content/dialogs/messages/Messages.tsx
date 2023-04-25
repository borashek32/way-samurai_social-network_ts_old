import s from "./Messages.module.sass"
import {AddMessageFormType, AddMessageReduxForm} from "../forms/AddMessageForm";
import React, {FC} from "react";
import {OneMessageType} from "../../../../redux/dialogs-reducer";
import {UserType} from "../../../../redux/users-reducer";
import {Message} from "./Message";


type MessagesType = {
  onSendMessageClick: (formData: AddMessageFormType) => void
  authenticatedUserId: number | null
  messages: OneMessageType[]
  users: UserType[]
  removeMessage: (messageId: string) => void
  saveChangedMessage: (text: string, messageId: string) => void
}

export const Messages: FC<MessagesType> = ({
                                             users,
                                             messages,
                                             onSendMessageClick,
                                             authenticatedUserId,
                                             removeMessage,
                                             saveChangedMessage
                                           }) => {



  return (
    <>
      <div className={s.messagesWrapper}>
        {messages.map((message) => (
          <Message
            saveChangedMessage={saveChangedMessage}
            users={users}
            message={message}
            authenticatedUserId={authenticatedUserId}
            removeMessage={removeMessage}
          />
        ))}
      </div>
      <AddMessageReduxForm onSubmit={onSendMessageClick}/>
    </>
  )
}