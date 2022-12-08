import classesAdd from "./Textarea.module.sass";
import {ChangeEvent, KeyboardEvent} from "react";

type TextareaType = {
  rows: number
  placeholder: string
  value: string
  onChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyPressCallback: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export const Textarea = (props: TextareaType) => {
  const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChangeCallback(e)
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    props.onKeyPressCallback(e)
  }

  return (
    <textarea
      onChange={onChangeCallback}
      onKeyPress={onKeyPressCallback}
      className={classesAdd.addPost__textarea}
      rows={props.rows}
      placeholder={props.placeholder}
      value={props.value}
    ></textarea>
  )
}