import classes from "./Dialogs.module.sass";
import {NavLink, Route} from "react-router-dom";
import {AddMessageFormType} from "./forms/AddMessageForm";
import {Messages} from "./messages/Messages";
import React, {FC} from "react";
import {UserType} from "../../../redux/users-reducer";
import {DialogType, MessageType} from "../../../redux/dialogs-reducer";


type Props = {
  users: UserType[]
  dialog: DialogType
  authenticatedUserId: number | null
  saveChangedMessage: (text: string, messageId: string, dialogId: string) => void
  onSendMessageClick: (newMessageBody: string, dialogId: string, userId: number | null) => void
  removeMessage: (messageId: string, dialogId: string) => void
  messages: MessageType
}

export const Dialog: FC<Props> = ({
                                    dialog,
                                    users,
                                    authenticatedUserId,
                                    saveChangedMessage,
                                    onSendMessageClick,
                                    removeMessage,
                                    messages
                                  }) => {

  const user = users.find(u => u.id === dialog.userId)
  console.log(user)
  return (
    <div key={dialog.dialogId} className={classes.messages}>
      <div className={classes.messages__column_user}>
        <div className={classes.messages__user_wrapper} key={dialog.dialogId}>
          {dialog.dialogId &&
            <NavLink
              to={"/dialogs/" + dialog.dialogId}
              className={classes.messages__user}
              activeClassName={classes.active}
            >
              <img className={classes.messages__user_img}
                   src={user ? user.photos.small : "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634__340.png"}
                   alt="logo" width="30px"/>
              {user && user.name}
            </NavLink>
          }
        </div>
      </div>

      <div className={classes.messages__column_messages}>
        {dialog.dialogId &&
          <Route path={"/dialogs/" + dialog.dialogId} exact render={() => {

            const addNewMessage = (formData: AddMessageFormType) => {
              onSendMessageClick(formData.newMessageBody, dialog.dialogId, authenticatedUserId)
              formData.newMessageBody = ''
            }
            const deleteMessage = (messageId: string) => {
              removeMessage(messageId, dialog.dialogId)
            }

            return (
              <>
                <h3 className={classes.messages__header}>Messages from {user?.name}</h3>
                <Messages
                  users={users}
                  authenticatedUserId={authenticatedUserId}
                  onSendMessageClick={addNewMessage}
                  messages={messages[dialog.dialogId]}
                  removeMessage={(messageId) => deleteMessage(messageId)}
                  saveChangedMessage={(text: string, messageId) => saveChangedMessage(text, messageId, dialog.dialogId)}
                />
              </>
            )
          }}/>
        }
      </div>
    </div>
  )
}