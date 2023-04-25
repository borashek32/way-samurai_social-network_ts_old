import classes from './Dialogs.module.sass'
import s from "./../profile/posts/Posts.module.sass"
import React from "react"
import {DialogsPagePropsType} from "./DialogsContainer"
import {Dialog} from "./Dialog";


export type PropsType = DialogsPagePropsType

export const Dialogs = (props: PropsType) => {

  console.log(props.users)

  return (
    <div className={classes.posts}>
      <h2 className={s.posts__header}>Dialogs</h2>

      {props.dialogsPage.dialogs.map((dialog) =>
        <Dialog
          key={dialog.dialogId}
          users={props.users}
          dialog={dialog}
          authenticatedUserId={props.authenticatedUserId}
          saveChangedMessage={props.saveChangedMessage}
          onSendMessageClick={props.onSendMessageClick}
          removeMessage={props.removeMessage}
          messages={props.dialogsPage.messages}
        />
      )}
    </div>
  );
}