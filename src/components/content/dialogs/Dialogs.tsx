import classes from './Dialogs.module.sass'
import {NavLink} from "react-router-dom"
import React from "react";
import {DialogsPagePropsType} from "./DialogsContainer";
import {AddMessageFormType, AddMessageReduxForm} from "./AddMessageForm";


export type PropsType = DialogsPagePropsType

export const Dialogs = (props: PropsType) => {

  const addNewMessage = (formData: AddMessageFormType) => {
    props.onSendMessageClick(formData.newMessageBody)
  }

  return (
    <div>
      <div className={classes.messages}>
        <div className={classes.messages__column_user}>
          <h3 className={classes.messages__header}>{props.dialogsPage.dialogsTitle}</h3>

          {props.dialogsPage.dialogs.map((dialog) => {
            let path = "/dialogs/" + dialog.id;
            return (
              <div className={classes.messages__user_wrapper} key={dialog.id}>
                <NavLink to={path} className={classes.messages__user} activeClassName={classes.active}>
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
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}