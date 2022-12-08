import {Textarea} from "../../../utils/textarea/Textarea";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {ButtonDefault} from "../../../utils/buttons/ButtonDefault";
import classes from "./AddMessage.module.sass";

type PropsType = {
  addMessage: (text: string) => void
}

export const AddMessage = (props: PropsType) => {
  const [text, setText] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.charCode === 13) {
      addMessageHandler()
    }
  }
  const addMessageHandler = () => {
    if (text.trim() !== '') {
      props.addMessage(text.trim())
    } else {
      setError(true)
    }
    setText("")
  }

  return (
    <div className={classes.addMessageWrapper}>
      <Textarea
        rows={3}
        placeholder={"Enter your message"}
        value={text}
        onChangeCallback={onChangeHandler}
        onKeyPressCallback={onKeyPressHandler}
      />
      <ButtonDefault
        name={'Add message'}
        callback={addMessageHandler}
      />
    </div>
  )
}