import s from "../Profile.module.sass";
import {ChangeEvent, useEffect, useState} from "react";

export type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {

  const [status, setStatus] = useState(props.status)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const onEditMode = () => {
    setEditMode(true)
  }
  const offEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={s.profile__statusWrapper}>
      <p className={s.profile__statusEnter} onDoubleClick={onEditMode}>My Status:</p>
      {!editMode && <h4
        className={s.profile__status}
        onDoubleClick={onEditMode}
      >
        {status ? status : props.status}
      </h4>}
      {editMode && <input
        type="text"
        value={status}
        onBlur={offEditMode}
        onChange={onChange}
        className={s.profile__statusInput}
        autoFocus
      />}
    </div>
  )
}