import classes from './Dialogs.module.sass'
import {NavLink} from "react-router-dom"
import {DialogPageType} from "../../../redux/state";
import {ButtonDefault} from "../../utils/buttons/ButtonDefault";
import React, {useRef} from "react";

export const Dialogs = (props: DialogPageType) => {
  let newMessageElement = useRef<HTMLTextAreaElement>(null)

  const addMessageHandler = () => {
    if (newMessageElement.current !== null) {
      alert(newMessageElement.current.value)
    }
  }

  return (
    <div className={classes.messages}>
      <div className={classes.messages__column_user}>
        <h3 className={classes.messages__header}>{props.dialogsTitle}</h3>
        {props.dialogs.map((dialog) => {
          let path = "/dialogs/" + dialog.id;
          return (
            <div className={classes.messages__user_wrapper} key={dialog.id}>
              <NavLink key={dialog.id} to={path} className={classes.messages__user} activeClassName={classes.active}>
                <img className={classes.messages__user_img}
                     src="https://gamerwall.pro/uploads/posts/2022-06/1655668285_2-gamerwall-pro-p-koti-na-more-priroda-krasivo-foto-3.jpg"
                     alt="logo" width="30px"/>
                {dialog.userName}
              </NavLink>
            </div>
          )
        })}
      </div>
      <div className={classes.messages__column_messages}>
        <div className={classes.addMessageWrapper}>
          <textarea
            rows={3}
            ref={newMessageElement}
            placeholder={"Enter your message"}
            className={classes.addPost__textarea}
          ></textarea>
          <ButtonDefault
            name={'Add message'}
            callback={addMessageHandler}
          />
        </div>
        <h3 className={classes.messages__header}>{props.messagesTitle}</h3>
        {props.messages.map((m) => {
          return (
            <div key={m.id} className={classes.messageWrapper}>
              <p>{m.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}