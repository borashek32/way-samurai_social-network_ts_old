import classes from './Dialogs.module.sass'
import s from "./../profile/posts/Posts.module.sass"
import React from "react"
import {DialogsPagePropsType} from "./DialogsContainer"
import {Dialog} from "./Dialog";


export type PropsType = DialogsPagePropsType

export const Dialogs = (props: PropsType) => {

  return (
    <div className={classes.posts}>
      <h2 className={s.posts__header}>Dialogs</h2>

      <div style={{lineHeight:'20px', fontSize: '12px', color: 'grey', textAlign: 'center', marginBottom: "20px"}}>
        <p>
          Hey, this page is hardcoded only on frontend to demonstrate you messages flow
        </p>
        <p>
          Don't take it serious
        </p>
      </div>

      {props.dialogsPage.dialogs.map((dialog) =>
        <Dialog
          key={dialog.dialogId}
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