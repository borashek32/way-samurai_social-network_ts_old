import classes from './Dialogs.module.sass'
import {NavLink} from "react-router-dom"
import {DialogPageType} from "../../../redux/state";
import {AddMessage} from "./addMessage/AddMessage";
import {Message} from "./message/Message";
import {useState} from "react";
import {v1} from "uuid";

export const Dialogs = (props: DialogPageType) => {
  const [messages, setMessages] = useState(props.messages)

  let dialogsArray = props.dialogs.map((dialog, index) => {
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
  })
  const addMessage = (text: string) => {
    let newMessage = {id: v1(), text: text}
    setMessages([newMessage, ...messages])
  }
  const deleteMessage = (id: string) => {
    setMessages(messages.filter(m => m.id !== id))
  }

  return (
    <div className={classes.messages}>
      <div className={classes.messages__column_user}>
        <h3 className={classes.messages__header}>{props.dialogsTitle}</h3>
        {dialogsArray}
      </div>
      <div className={classes.messages__column_messages}>
        <AddMessage addMessage={addMessage} />
        <h3 className={classes.messages__header}>{props.messagesTitle}</h3>
        {messages.map((m, index) => <Message
          message={m}
          key={m.id}
          deleteMessage={deleteMessage}
        />)}
      </div>
    </div>
  );
}