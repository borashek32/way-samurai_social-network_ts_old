import classes from './Dialogs.module.sass'
import {NavLink} from "react-router-dom"
import {ButtonDefault} from "../../utils/buttons/ButtonDefault";
import React from "react";
import {DialogsPagePropsType} from "./DialogsContainer";

export type PropsType = DialogsPagePropsType

export const Dialogs = (props: PropsType) => {

  return (
    <div className={classes.messages}>
      <div className={classes.messages__column_user}>
        <h3 className={classes.messages__header}>{props.dialogsPage.dialogsTitle}</h3>
        {props.dialogsPage.dialogs.map((dialog) => {
          let path = "/dialogs/" + dialog.id;
          return (
            <div className={classes.messages__user_wrapper} key={dialog.id}>
              <NavLink key={dialog.id} to={path} className={classes.messages__user} activeClassName={classes.active}>
                <img className={classes.messages__user_img}
                     src=""
                     alt="logo" width="30px"/>
                {dialog.userName}
              </NavLink>
            </div>
          )
        })}
      </div>
      <div className={classes.messages__column_messages}>
        <h3 className={classes.messages__header}>{props.dialogsPage.messagesTitle}</h3>
        {props.dialogsPage.messages.map((m) => {

          return (
            <div key={m.id} className={classes.messageWrapper}>
              <p>{m.text}</p>
            </div>
          )
        })}
        <div className={classes.addMessageWrapper}>
          <textarea
            rows={3}
            value={props.dialogsPage.newMessageBody}
            onChange={props.onNewMessageChange}
            placeholder={"Enter your message"}
            className={classes.addPost__textarea}
          ></textarea>
          <ButtonDefault
            name={'Add message'}
            callback={props.onSendMessageClick}
          />
        </div>
      </div>
    </div>
  );
}