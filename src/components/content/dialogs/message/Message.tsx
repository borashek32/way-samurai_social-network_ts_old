import classes from "./Message.module.sass";
import {MessageType} from "../../../../redux/state";
import {ButtonDefault} from "../../../utils/buttons/ButtonDefault";

type PropsType = {
  message: MessageType
  deleteMessage: (id: string) => void
}

export const Message = (props: PropsType) => {
  const deleteMessageHandler = () => {
    props.deleteMessage(props.message.id)
  }
  return (
    <div key={props.message.id} className={classes.messageWrapper}>
      <p>{props.message.text}</p>
      <ButtonDefault name={"Delete"} callback={deleteMessageHandler} />
    </div>
  )
}