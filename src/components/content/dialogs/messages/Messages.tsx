import s from "./Messages.module.sass"
import {AddMessageFormType, AddMessageReduxForm} from "../forms/AddMessageForm";
import React, {FC} from "react";
import {OneMessageType} from "../../../../redux/dialogs-reducer";
import {Message} from "./Message";


type MessagesType = {
  onSendMessageClick: (formData: AddMessageFormType) => void
  authenticatedUserId: number | null
  messages: OneMessageType[]
  removeMessage: (messageId: string) => void
  saveChangedMessage: (text: string, messageId: string) => void
}

export const Messages: FC<MessagesType> = ({
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
            key={message.id}
            saveChangedMessage={saveChangedMessage}
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