import {ChangeEvent} from "react";

type CheckboxType = {
  value: boolean
  callback: (value: boolean) => void
}

export const Checkbox = (props: CheckboxType) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    props.callback(e.currentTarget.checked)
  }

  return (
    <input
      type={"checkbox"}
      checked={props.value}
      onChange={onChangeCallback}
    />
  )
}